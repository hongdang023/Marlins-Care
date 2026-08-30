import fs from "fs";
import path from "path";

function renderMarkdownFragment(md) {
  if (!md) return "";
  let html = md;
  
  // Math & Unicode sanitize
  html = html.replace(/\\\$/g, "$");
  html = html.replace(/\$\s*\\le\s*\$|\$\le\$|\\le/g, "≤");
  html = html.replace(/\$\s*\\ge\s*\$|\$\ge\$|\\ge/g, "≥");
  html = html.replace(/\$\s*\\ne\s*\$|\$\ne\$|\\ne/g, "≠");
  html = html.replace(/\$\s*\\to\s*\$|\$\to\$|\\to/g, "➔");
  html = html.replace(/\$\s*\\leftrightarrow\s*\$|\$\leftrightarrow\$|\\leftrightarrow/g, "↔");
  html = html.replace(/\\%/g, "%");
  html = html.replace(/\$([^\$]+)\$/g, "$1");
  
  // Remove Mermaid / Graph codeblocks completely
  html = html.replace(/```mermaid[\s\S]*?```/g, "");
  
  // Markdown links [text](url)
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, "<a href=\"$2\" target=\"_blank\" rel=\"noopener\" style=\"color: var(--color-primary-600); font-weight: 600; text-decoration: underline;\">$1 ↗</a>");
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<span style=\"color: var(--color-primary-600); font-weight: 600;\">$1</span>");
  
  // Bold & Italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
  
  // Headers
  html = html.replace(/^#### (.*$)/gim, "<h4 style=\"font-size: 15px; font-weight: 700; color: var(--text-primary); margin: 20px 0 10px;\">$1</h4>");
  html = html.replace(/^### (.*$)/gim, "<h3 style=\"font-size: 16.5px; font-weight: 700; color: var(--text-primary); margin: 22px 0 12px;\">$1</h3>");
  html = html.replace(/^## (.*$)/gim, "<h2 style=\"font-size: 19px; font-weight: 700; color: var(--text-primary); margin: 24px 0 12px; border-bottom: 2px solid var(--border-subtle); padding-bottom: 6px;\">$1</h2>");
  html = html.replace(/^# (.*$)/gim, "<h1 style=\"font-size: 24px; font-weight: 800; color: var(--text-primary); margin: 0 0 16px;\">$1</h1>");
  
  // Blockquotes
  html = html.replace(/^\> (.*$)/gim, "<div style=\"background: var(--bg-surface-subtle); border-left: 3px solid var(--color-marlins); margin: 12px 0; padding: 12px 18px; border-radius: 0 var(--radius-md) var(--radius-md) 0; font-size: 13.5px; color: var(--text-secondary); line-height: 1.6;\">$1</div>");
  
  // Codeblocks
  html = html.replace(/```text([\s\S]*?)```/g, "<pre style=\"background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: var(--space-4); font-family: monospace; font-size: 12.5px; line-height: 1.6; overflow-x: auto; white-space: pre-wrap;\"><code>$1</code></pre>");
  html = html.replace(/```([\s\S]*?)```/g, "<pre style=\"background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: var(--space-4); font-size: 12.5px; overflow-x: auto;\"><code>$1</code></pre>");
  
  // Inline code
  html = html.replace(/`([^`]+)`/g, "<code style=\"background: var(--bg-surface-subtle); padding: 2px 6px; border-radius: 4px; font-size: 12.5px; border: 1px solid var(--border-subtle); font-family: monospace;\">$1</code>");
  
  // Tables & Lists line by line
  const lines = html.split("\n");
  let inTable = false;
  let inUl = false;
  let inOl = false;
  let tableHtml = "";
  let processedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Table handling
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      if (inUl) { processedLines.push("</ul>"); inUl = false; }
      if (inOl) { processedLines.push("</ol>"); inOl = false; }
      
      if (!inTable) {
        inTable = true;
        tableHtml = "<div style=\"overflow-x:auto; margin: 16px 0;\"><table class=\"sop-table\">";
      }
      if (trimmed.includes("---")) continue;
      
      const cells = trimmed.split("|").filter((_, idx, arr) => idx > 0 && idx < arr.length - 1).map(c => c.trim());
      const isHeader = !tableHtml.includes("<tbody>");
      
      if (isHeader) {
        tableHtml += "<thead><tr>" + cells.map(c => `<th>${c}</th>`).join("") + "</tr></thead><tbody>";
      } else {
        tableHtml += "<tr>" + cells.map(c => `<td>${c}</td>`).join("") + "</tr>";
      }
      continue;
    } else if (inTable) {
      tableHtml += "</tbody></table></div>";
      processedLines.push(tableHtml);
      inTable = false;
      tableHtml = "";
    }
    
    // List handling (unordered: *, -, •)
    const ulMatch = line.match(/^(\s*)([\*\-\•])\s+(.*)$/);
    if (ulMatch) {
      if (inOl) { processedLines.push("</ol>"); inOl = false; }
      if (!inUl) { processedLines.push("<ul style=\"margin: 8px 0 12px 20px; padding-left: 0;\">"); inUl = true; }
      const indent = ulMatch[1].length > 0 ? "margin-left: 18px;" : "";
      processedLines.push(`<li style="margin-bottom: 6px; font-size: 13.5px; color: var(--text-secondary); line-height: 1.6; ${indent}">${ulMatch[3]}</li>`);
      continue;
    }
    
    // List handling (ordered: 1., 2.)
    const olMatch = line.match(/^(\s*)([0-9]+)\.\s+(.*)$/);
    if (olMatch) {
      if (inUl) { processedLines.push("</ul>"); inUl = false; }
      if (!inOl) { processedLines.push("<ol style=\"margin: 8px 0 12px 20px; padding-left: 0;\">"); inOl = true; }
      const indent = olMatch[1].length > 0 ? "margin-left: 18px;" : "";
      processedLines.push(`<li style="margin-bottom: 6px; font-size: 13.5px; color: var(--text-secondary); line-height: 1.6; ${indent}">${olMatch[3]}</li>`);
      continue;
    }
    
    // Close any open lists
    if (inUl) { processedLines.push("</ul>"); inUl = false; }
    if (inOl) { processedLines.push("</ol>"); inOl = false; }
    
    processedLines.push(line);
  }
  
  if (inTable) { tableHtml += "</tbody></table></div>"; processedLines.push(tableHtml); }
  if (inUl) processedLines.push("</ul>");
  if (inOl) processedLines.push("</ol>");
  
  return processedLines.join("\n");
}

function parseMetadataHeader(rawMeta) {
  if (!rawMeta) return {};
  const data = {};
  const lines = rawMeta.split("\n");
  
  lines.forEach(line => {
    const l = line.trim();
    if (l.startsWith("* **Objective:**")) data.objective = l.replace("* **Objective:**", "").trim();
    else if (l.startsWith("* **Trigger:**")) data.trigger = l.replace("* **Trigger:**", "").trim();
    else if (l.startsWith("* **Standard Time:**")) data.standardTime = l.replace("* **Standard Time:**", "").trim();
    else if (l.startsWith("* **Target Audience:**")) data.targetAudience = l.replace("* **Target Audience:**", "").trim();
    else if (l.startsWith("* **Owner:**")) data.owner = l.replace("* **Owner:**", "").trim();
    else if (l.startsWith("* **Output:**")) data.output = l.replace("* **Output:**", "").trim();
  });
  return data;
}

function renderFormattedMetadataCard(metaObj) {
  return `
    <div class="executive-kpi-strip" style="margin-bottom: var(--space-6);">
      <!-- 1. Objective Nổi Bật Trên Cùng -->
      ${metaObj.objective ? `
        <div style="border-left: 3px solid var(--color-primary-600); padding: 6px 0 6px 16px; margin-bottom: var(--space-5);">
          <div style="font-size: 11px; font-weight: 800; color: var(--color-primary-700); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">
            Objective
          </div>
          <div style="font-size: 15.5px; color: var(--text-primary); line-height: 1.6; font-weight: 500;">
            ${metaObj.objective}
          </div>
        </div>
      ` : ""}

      <!-- 2. KPI Grid Strip -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-4); padding: var(--space-3) 0; border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
        ${metaObj.trigger ? `
          <div>
            <div style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px;">
              Trigger
            </div>
            <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
              ${metaObj.trigger}
            </div>
          </div>
        ` : ""}
        
        ${metaObj.standardTime ? `
          <div>
            <div style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px;">
              Standard Time
            </div>
            <div>
              <span class="badge badge-tag" style="font-size: 12px; font-weight: 600; padding: 3px 8px; border-radius: var(--radius-sm);">
                ${metaObj.standardTime}
              </span>
            </div>
          </div>
        ` : ""}
        
        ${metaObj.targetAudience ? `
          <div>
            <div style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px;">
              Target Audience
            </div>
            <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
              ${metaObj.targetAudience}
            </div>
          </div>
        ` : ""}
        
        ${metaObj.owner ? `
          <div>
            <div style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px;">
              Owner
            </div>
            <div style="font-size: 13.5px; color: var(--text-primary); font-weight: 600; line-height: 1.5;">
              ${metaObj.owner}
            </div>
          </div>
        ` : ""}

        ${metaObj.output ? `
          <div style="grid-column: 1 / -1; padding-top: var(--space-2); border-top: 1px dashed var(--border-subtle);">
            <div style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 2px;">
              Deliverable / Output
            </div>
            <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
              ${metaObj.output}
            </div>
          </div>
        ` : ""}
      </div>
    </div>
  `;
}

function cleanTitle(raw) {
  return raw
    .replace(/^[#\*\s\-\•\uD800-\uDFFF\u2600-\u27BF]+/g, "")
    .replace(/<[^>]+>/g, "")
    .trim();
}

/**
 * Minimalist Clean FAQ Toggle (Like Claude FAQ)
 */
function formatFaqSection(md) {
  if (!md) return "";
  const lines = md.split("\n");
  let html = "";
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Group Header: #### or ###
    if (line.startsWith("#### ") || line.startsWith("### ")) {
      const rawTitle = line.replace(/^#+\s*/, "").trim();
      const title = cleanTitle(rawTitle);
      
      html += `
        <h3 style="font-size: 13px; font-weight: 800; color: var(--color-primary-700); text-transform: uppercase; letter-spacing: 0.08em; margin: 28px 0 12px; padding-bottom: 6px; border-bottom: 1px solid var(--border-subtle);">
          ${title}
        </h3>
      `;
    } else if (line.startsWith("* **") || line.startsWith("**") || (line.startsWith("* ") && line.includes("?"))) {
      let q = "";
      let a = "";
      
      // Check if inline Q and A on same line
      const splitMatches = ["👉 **A:**", "**A:**", "👉 A:", "A:"];
      let splitIdx = -1;
      let matchedSplit = "";
      
      for (const sm of splitMatches) {
        const idx = line.indexOf(sm);
        if (idx !== -1 && (splitIdx === -1 || idx < splitIdx)) {
          splitIdx = idx;
          matchedSplit = sm;
        }
      }
      
      if (splitIdx !== -1) {
        q = line.substring(0, splitIdx)
          .replace(/^\*\s*/, "")
          .replace(/^\*\*/, "")
          .replace(/\*\*$/, "")
          .replace(/^\*\*Q[0-9]*:\*\*/i, "")
          .replace(/^Q[0-9]*:\s*/i, "")
          .trim();
        a = line.substring(splitIdx + matchedSplit.length).trim();
      } else {
        q = line
          .replace(/^\*\s*/, "")
          .replace(/^\*\*/, "")
          .replace(/\*\*$/, "")
          .replace(/^\*\*Q[0-9]*:\*\*/i, "")
          .replace(/^Q[0-9]*:\s*/i, "")
          .trim();
        
        const answerLines = [];
        while (i + 1 < lines.length) {
          const nextLine = lines[i + 1].trim();
          if (!nextLine) {
            i++;
            continue;
          }
          if (nextLine.startsWith("#") || nextLine.startsWith("* **") || (nextLine.startsWith("* ") && nextLine.includes("?"))) {
            break;
          }
          i++;
          const cleanAnswerLine = nextLine
            .replace(/^👉\s*/, "")
            .replace(/^\*\*A:\*\*\s*/, "")
            .replace(/^A:\s*/, "")
            .replace(/^\*\s*/, "")
            .trim();
          answerLines.push(cleanAnswerLine);
        }
        a = answerLines.join(" ");
      }
      
      if (q.endsWith("**")) q = q.slice(0, -2).trim();
      
      html += `
        <details class="faq-minimal-item" style="border-bottom: 1px solid var(--border-subtle); margin-bottom: 0; padding: 0;" open>
          <summary style="padding: 14px 0; font-weight: 600; font-size: 14px; color: var(--text-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; user-select: none;">
            <span style="line-height: 1.5; padding-right: 16px;">${q}</span>
            <span style="color: var(--text-muted); font-size: 11px; flex-shrink: 0;">▼</span>
          </summary>
          <div style="padding: 0 0 14px 0; font-size: 13.5px; line-height: 1.65; color: var(--text-secondary);">
            ${renderMarkdownFragment(a)}
          </div>
        </details>
      `;
    }
  }
  return html || md;
}

/**
 * Standard CMMI DAR Scoring Matrix:
 * Cột dọc: Tiêu chí đánh giá (Criteria) + Trọng số (Weight)
 * Cột ngang: Các Phương án (Options A, B, C...)
 */
function formatDarSection(md) {
  if (!md) return "";
  const lines = md.split("\n");
  let html = "";
  
  let currentDar = null;
  const dars = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    if (line.startsWith("#### ") || line.startsWith("### ")) {
      if (currentDar) dars.push(currentDar);
      const title = line.replace(/^#+\s*/, "").trim();
      currentDar = {
        title: cleanTitle(title),
        context: "",
        tableLines: [],
        decision: ""
      };
    } else if (line.startsWith("* **Bối cảnh:**") || line.startsWith("**Bối cảnh:**") || line.startsWith("Bối cảnh:")) {
      if (currentDar) currentDar.context = line.replace(/^\*?\s*\*\*Bối cảnh:\*\*\s*/, "").replace(/^Bối cảnh:\s*/, "").trim();
    } else if (line.startsWith("|") && line.endsWith("|")) {
      if (currentDar) {
        currentDar.tableLines.push(line);
      }
    } else if (line.startsWith("* **Quyết định:**") || line.startsWith("**Quyết định:**") || line.startsWith("Quyết định:")) {
      if (currentDar) currentDar.decision = line.replace(/^\*?\s*\*\*Quyết định:\*\*\s*/, "").replace(/^Quyết định:\s*/, "").trim();
    }
  }
  if (currentDar) dars.push(currentDar);
  
  if (dars.length === 0) return renderMarkdownFragment(md);
  
  dars.forEach((dar, idx) => {
    let optionsMatrixHtml = "";
    if (dar.tableLines && dar.tableLines.length >= 2) {
      const parsedRows = [];
      dar.tableLines.forEach(tLine => {
        if (tLine.includes("---")) return; // skip markdown divider
        const cells = tLine.split("|").filter((_, cIdx, arr) => cIdx > 0 && cIdx < arr.length - 1).map(c => c.trim());
        if (cells.length > 0) parsedRows.push(cells);
      });
      
      if (parsedRows.length >= 2) {
        const headerRow = parsedRows[0];
        // Col 0: Criteria header, Col 1: Weight header, Col 2..N: Options
        const optionHeaders = headerRow.slice(2).map(h => {
          const isApproved = h.includes("⭐") || h.includes("Approved") || h.includes("Phê duyệt");
          const cleanName = h.replace(/\*\*/g, "").replace(/\*/g, "").replace(/⭐/g, "").replace(/\(Approved\)/gi, "").trim();
          return { name: cleanName, isApproved, raw: h };
        });
        
        let tbodyHtml = "";
        for (let r = 1; r < parsedRows.length; r++) {
          const row = parsedRows[r];
          const col0 = row[0] || "";
          const col1 = row[1] || "";
          const optionCells = row.slice(2);
          
          const isTotalRow = col0.toUpperCase().includes("TỔNG") || col0.toUpperCase().includes("TOTAL");
          const isTradeoffRow = col0.toUpperCase().includes("ĐÁNH ĐỔI") || col0.toUpperCase().includes("TRADE-OFF");
          
          if (isTotalRow) {
            tbodyHtml += `
              <tr style="border-top: 2px solid var(--border-subtle); background: var(--bg-surface-subtle); font-weight: 700;">
                <td style="padding: 10px 12px; font-weight: 700;">${col0.replace(/\*\*/g, "")}</td>
                <td style="text-align: center; padding: 10px 12px;"><span class="badge badge-system" style="font-weight: 700;">${col1.replace(/\*\*/g, "")}</span></td>
                ${optionCells.map((val, optIdx) => {
                  const opt = optionHeaders[optIdx] || {};
                  const isApp = opt.isApproved || val.includes("Approved") || val.includes("⭐");
                  const cleanVal = val.replace(/\*\*/g, "").replace(/\*/g, "").trim();
                  return `
                    <td style="text-align: center; padding: 10px 12px; ${isApp ? "background: rgba(16, 185, 129, 0.12); color: #059669;" : ""}">
                      <span style="font-size: 13.5px; font-weight: ${isApp ? "800" : "700"}; ${isApp ? "color: #059669;" : "color: var(--text-primary);"}">
                        ${cleanVal}
                      </span>
                    </td>
                  `;
                }).join("")}
              </tr>
            `;
          } else if (isTradeoffRow) {
            tbodyHtml += `
              <tr>
                <td style="font-weight: 600; color: var(--text-muted); padding: 10px 12px; vertical-align: top;">${col0.replace(/\*\*/g, "")}</td>
                <td style="text-align: center; color: var(--text-muted); padding: 10px 12px; vertical-align: top;">${col1.replace(/\*\*/g, "")}</td>
                ${optionCells.map((val, optIdx) => {
                  const opt = optionHeaders[optIdx] || {};
                  const isApp = opt.isApproved;
                  return `
                    <td style="font-size: 12.5px; line-height: 1.5; vertical-align: top; padding: 10px 12px; ${isApp ? "background: rgba(16, 185, 129, 0.03);" : ""}">
                      ${renderMarkdownFragment(val)}
                    </td>
                  `;
                }).join("")}
              </tr>
            `;
          } else {
            // Regular Criteria row
            tbodyHtml += `
              <tr>
                <td style="padding: 10px 12px;"><strong style="color: var(--text-primary);">${col0.replace(/\*\*/g, "")}</strong></td>
                <td style="text-align: center; padding: 10px 12px;"><span class="badge badge-tag">${col1.replace(/\*\*/g, "")}</span></td>
                ${optionCells.map((val, optIdx) => {
                  const opt = optionHeaders[optIdx] || {};
                  const isApp = opt.isApproved;
                  const cleanVal = val.replace(/\*\*/g, "").replace(/\*/g, "").trim();
                  return `
                    <td style="text-align: center; padding: 10px 12px; ${isApp ? "background: rgba(16, 185, 129, 0.03);" : ""}">
                      ${isApp ? `<strong>${cleanVal}</strong>` : cleanVal}
                    </td>
                  `;
                }).join("")}
              </tr>
            `;
          }
        }
        
        optionsMatrixHtml = `
          <div style="overflow-x:auto; margin: 16px 0; border: 1px solid var(--border-subtle); border-radius: var(--radius-md);">
            <table class="sop-table" style="width:100%; border-collapse: collapse; margin: 0;">
              <thead>
                <tr style="background: var(--bg-surface-subtle);">
                  <th style="width: 28%; text-align: left; padding: 10px 12px;">${headerRow[0] || "Tiêu Chí Đánh Giá (Criteria)"}</th>
                  <th style="width: 12%; text-align: center; padding: 10px 12px;">${headerRow[1] || "Trọng Số"}</th>
                  ${optionHeaders.map(o => `
                    <th style="text-align: center; padding: 10px 12px; ${o.isApproved ? "background: rgba(16, 185, 129, 0.15); color: #059669; font-weight: 800;" : ""}">
                      ${o.name} ${o.isApproved ? "⭐ (Approved)" : ""}
                    </th>
                  `).join("")}
                </tr>
              </thead>
              <tbody>
                ${tbodyHtml}
              </tbody>
            </table>
          </div>
        `;
      }
    }
    
    html += `
      <details class="dar-toggle-item" style="border-bottom: 1px solid var(--border-subtle); margin-bottom: 10px; padding-bottom: 10px;" ${idx === 0 ? "open" : ""}>
        <summary style="padding: 10px 0; font-weight: 700; font-size: 15px; color: var(--text-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; user-select: none;">
          <h3 style="font-size: 15px; font-weight: 700; color: var(--text-primary); margin: 0; display: inline-flex; align-items: center; gap: 8px;">
            <span>${dar.title}</span>
          </h3>
          <span style="color: var(--text-muted); font-size: 11px;">▼</span>
        </summary>
        <div style="padding: 8px 0 14px; font-size: 13.5px; line-height: 1.65; color: var(--text-secondary);">
          ${dar.context ? `
            <div style="margin-bottom: 10px; font-size: 13.5px; line-height: 1.6; color: var(--text-secondary);">
              <strong style="color: var(--text-primary);">Bối cảnh:</strong> ${renderMarkdownFragment(dar.context)}
            </div>
          ` : ""}
          
          ${optionsMatrixHtml}
          
          ${dar.decision ? `
            <div style="background: var(--bg-surface-subtle); border-left: 3px solid #10B981; padding: 10px 14px; margin-top: 12px; font-size: 13.5px; color: var(--text-primary); line-height: 1.6; border-radius: 0 var(--radius-sm) var(--radius-sm) 0;">
              <strong style="color: #059669;">Quyết định:</strong> ${renderMarkdownFragment(dar.decision)}
            </div>
          ` : ""}
        </div>
      </details>
    `;
  });
  
  return html;
}

const fileMap = {
  "social-media": "C_Playbooks/P01_Social_Media_Playbook.md",
  "community": "C_Playbooks/P02_Community_Playbook.md",
  "marlins-workshop": "C_Playbooks/P03_Marlins_Workshop_Playbook.md",
  "marlins-day": "C_Playbooks/P04_Marlins_Day_Playbook.md",
  "trial-class": "C_Playbooks/P05_Trial_Class_Playbook.md",
  "live-class": "C_Playbooks/P06_Live_Class_Playbook.md",
  "family-meeting": "C_Playbooks/P07_Family_Meeting_Playbook.md",
  "referrals": "C_Playbooks/P08_Referrals_Program_Playbook.md"
};

const fullCompiled = {};

Object.entries(fileMap).forEach(([slug, filePath]) => {
  const content = fs.readFileSync(filePath, "utf-8");
  const clean = content.replace(/^---[\s\S]*?---\n*/, "").trim();
  
  const sections = {};
  
  // Metadata Header -> Executive KPI Strip
  const metaMatch = clean.match(/## Metadata Header([\s\S]*?)(?=(<details|## |\n---\n<details))/i);
  if (metaMatch) {
    const metaParsed = parseMetadataHeader(metaMatch[1].trim());
    sections["overview"] = renderFormattedMetadataCard(metaParsed);
  } else {
    sections["overview"] = "";
  }
  
  // Details regex
  const detailsRegex = /<details[\s\S]*?<summary>[\s\S]*?<h3>(.*?)<\/h3>[\s\S]*?<\/summary>([\s\S]*?)<\/details>/gi;
  let match;
  while ((match = detailsRegex.exec(clean)) !== null) {
    const title = match[1].replace(/<[^>]+>/g, "").trim().toLowerCase();
    const body = match[2].trim();
    
    if (title.includes("faq")) {
      sections["faq"] = formatFaqSection(body);
    } else if (title.includes("decision") || title.includes("dar") || title.includes("log")) {
      sections["decision-logs"] = formatDarSection(body);
    } else if (title.includes("stakeholder")) {
      sections["stakeholder-mapping"] = renderMarkdownFragment(body);
    } else if (title.includes("agenda")) {
      sections["session-agenda"] = renderMarkdownFragment(body);
    } else if (title.includes("sop") || title.includes("step")) {
      sections["sop-steps"] = renderMarkdownFragment(body);
    } else if (title.includes("do") || title.includes("dont")) {
      sections["dos-donts"] = renderMarkdownFragment(body);
    } else if (title.includes("rubric") || title.includes("assessment")) {
      sections["assessment-rubrics"] = renderMarkdownFragment(body);
    } else if (title.includes("framework") || title.includes("mindset") || title.includes("architecture") || title.includes("engine") || title.includes("concept")) {
      sections["framework"] = (sections["framework"] ? sections["framework"] + '\n\n<hr style="border:none; border-top:1px solid var(--border-subtle); margin:24px 0;">\n\n' : "") + renderMarkdownFragment(body);
    }
  }
  
  fullCompiled[slug] = sections;
});

const outJs = "export const FULL_PLAYBOOKS_COMPILED = " + JSON.stringify(fullCompiled, null, 2) + ";\n";
fs.writeFileSync("data/full_playbooks_compiled.js", outJs);
console.log("Successfully rebuilt and compiled all 8 playbooks with DARs & FAQs!");
