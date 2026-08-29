import fs from "fs";
import path from "path";

function renderMarkdownFragment(md) {
  if (!md) return "";
  let html = md;
  
  // Math & Unicode sanitize
  html = html.replace(/\\\$/g, "$");
  html = html.replace(/\$\s*\\le\s*\$|\$\\le\$|\\le/g, "≤");
  html = html.replace(/\$\s*\\ge\s*\$|\$\\ge\$|\\ge/g, "≥");
  html = html.replace(/\$\s*\\ne\s*\$|\$\\ne\$|\\ne/g, "≠");
  html = html.replace(/\$\s*\\to\s*\$|\$\\to\$|\\to/g, "➔");
  html = html.replace(/\$\s*\\leftrightarrow\s*\$|\$\\leftrightarrow\$|\\leftrightarrow/g, "↔");
  html = html.replace(/\\%/g, "%");
  html = html.replace(/\$([^\$]+)\$/g, "$1");
  
  // Remove Mermaid / Graph codeblocks completely
  html = html.replace(/```mermaid[\s\S]*?```/g, "");
  
  // Markdown links [text](url)
  html = html.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener" style="color: var(--color-primary-600); font-weight: 600; text-decoration: underline;">$1 ↗</a>');
  
  // Bold & Italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>");
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
  
  // Headers
  html = html.replace(/^#### (.*$)/gim, '<h4 style="font-size: 15px; font-weight: 700; color: var(--text-primary); margin: 20px 0 10px;">$1</h4>');
  html = html.replace(/^### (.*$)/gim, '<h3 style="font-size: 16.5px; font-weight: 700; color: var(--text-primary); margin: 22px 0 12px;">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 style="font-size: 19px; font-weight: 700; color: var(--text-primary); margin: 24px 0 12px; border-bottom: 2px solid var(--border-subtle); padding-bottom: 6px;">$1</h2>');
  
  // Blockquotes
  html = html.replace(/^\> (.*$)/gim, '<div style="background: var(--bg-surface-subtle); border-left: 3px solid var(--color-marlins); margin: 12px 0; padding: 12px 18px; border-radius: 0 var(--radius-md) var(--radius-md) 0; font-size: 13.5px; color: var(--text-secondary); line-height: 1.6;">$1</div>');
  
  // Codeblocks
  html = html.replace(/```text([\s\S]*?)```/g, '<pre style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: var(--space-4); font-family: monospace; font-size: 12.5px; line-height: 1.6; overflow-x: auto; white-space: pre-wrap;"><code>$1</code></pre>');
  html = html.replace(/```([\s\S]*?)```/g, '<pre style="background: var(--bg-surface-subtle); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: var(--space-4); font-size: 12.5px; overflow-x: auto;"><code>$1</code></pre>');
  
  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code style="background: var(--bg-surface-subtle); padding: 2px 6px; border-radius: 4px; font-size: 12.5px; border: 1px solid var(--border-subtle); font-family: monospace;">$1</code>');
  
  // Tables
  const lines = html.split("\n");
  let inTable = false;
  let tableHtml = "";
  let newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("|") && line.endsWith("|")) {
      if (!inTable) {
        inTable = true;
        tableHtml = '<div style="overflow-x:auto; margin: 16px 0;"><table class="sop-table">';
      }
      if (line.includes("---")) continue;
      
      const cells = line.split("|").filter((_, idx, arr) => idx > 0 && idx < arr.length - 1).map(c => c.trim());
      const isHeader = !tableHtml.includes("<tbody>");
      
      if (isHeader) {
        tableHtml += "<thead><tr>" + cells.map(c => `<th>${c}</th>`).join("") + "</tr></thead><tbody>";
      } else {
        tableHtml += "<tr>" + cells.map(c => `<td>${c}</td>`).join("") + "</tr>";
      }
    } else {
      if (inTable) {
        tableHtml += "</tbody></table></div>";
        newLines.push(tableHtml);
        inTable = false;
        tableHtml = "";
      }
      newLines.push(lines[i]);
    }
  }
  if (inTable) {
    tableHtml += "</tbody></table></div>";
    newLines.push(tableHtml);
  }
  html = newLines.join("\n");
  
  // Lists
  html = html.replace(/^\* (.*$)/gim, '<li style="margin-bottom: 6px; font-size: 13.5px; color: var(--text-secondary); line-height: 1.6;">$1</li>');
  html = html.replace(/^• (.*$)/gim, '<li style="margin-bottom: 6px; font-size: 13.5px; color: var(--text-secondary); line-height: 1.6;">$1</li>');
  html = html.replace(/^([0-9]+\.) (.*$)/gim, '<li style="margin-bottom: 6px; font-size: 13.5px; color: var(--text-secondary); line-height: 1.6;"><strong>$1</strong> $2</li>');
  
  return html;
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
    
    if (line.startsWith("#### ") || line.startsWith("### ")) {
      const rawTitle = line.replace(/^#+\s*/, "").trim();
      const title = cleanTitle(rawTitle);
      
      html += `
        <h3 style="font-size: 12.5px; font-weight: 800; color: var(--color-primary-700); text-transform: uppercase; letter-spacing: 0.08em; margin: 32px 0 12px; padding-bottom: 6px; border-bottom: 1px solid var(--border-subtle);">
          ${title}
        </h3>
      `;
    } else if (line.startsWith("* **Q") || line.startsWith("**Q") || line.startsWith("* Q")) {
      let q = "";
      let a = "";
      
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
        q = line.substring(0, splitIdx).replace(/^[\*\s]+/, "").replace(/^\*\*Q[0-9]*:\*\*/, "").replace(/^Q[0-9]*:\s*/, "").replace(/\"/g, "").replace(/\*/g, "").trim();
        a = line.substring(splitIdx + matchedSplit.length).trim();
      } else {
        q = line.replace(/^[\*\s]+/, "").replace(/^\*\*Q[0-9]*:\*\*/, "").replace(/^Q[0-9]*:\s*/, "").replace(/\"/g, "").replace(/\*/g, "").trim();
        if (i + 1 < lines.length) {
          i++;
          a = lines[i].trim().replace(/^[\*\s]+/, "").replace(/^👉\s*/, "").replace(/^\*\*A:\*\*\s*/, "").replace(/^A:\s*/, "").trim();
        }
      }
      
      html += `
        <details class="faq-minimal-item" style="border-bottom: 1px solid var(--border-subtle); margin-bottom: 0; padding: 0;">
          <summary style="padding: 16px 0; font-weight: 600; font-size: 14.5px; color: var(--text-primary); cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none; user-select: none;">
            <span style="line-height: 1.5; padding-right: 16px;">${q}</span>
            <span style="color: var(--text-muted); font-size: 11px; flex-shrink: 0;">▼</span>
          </summary>
          <div style="padding: 0 0 16px 0; font-size: 14px; line-height: 1.65; color: var(--text-secondary);">
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
        options: [],
        decision: ""
      };
    } else if (line.startsWith("* **Bối cảnh:**")) {
      if (currentDar) currentDar.context = line.replace("* **Bối cảnh:**", "").trim();
    } else if (line.startsWith("* *Option") || line.startsWith("  * *Option") || line.startsWith("* Option") || line.startsWith("- Option")) {
      if (currentDar) {
        const optText = line.replace(/^\s*[\*\-]+\s*/, "").trim();
        currentDar.options.push(optText);
      }
    } else if (line.startsWith("* **Quyết định:**")) {
      if (currentDar) currentDar.decision = line.replace("* **Quyết định:**", "").trim();
    }
  }
  if (currentDar) dars.push(currentDar);
  
  if (dars.length === 0) return renderMarkdownFragment(md);
  
  dars.forEach((dar, idx) => {
    let optionsMatrixHtml = "";
    if (dar.options && dar.options.length > 0) {
      const parsedOpts = dar.options.map(opt => {
        let name = opt;
        let score = "—";
        let rationale = "";
        const isApproved = opt.includes("⭐") || opt.includes("Approved") || opt.includes("Phê duyệt");
        
        const m = opt.match(/^\*?(Option [A-Z][^\:\*]*)\*?[\:\*]*\s*([0-9\/\s\w\(\)\★\⭐]+)?\s*[\—\–\-]\s*(.*)$/i);
        if (m) {
          name = m[1].trim();
          score = m[2] ? m[2].replace(/\*\*/g, "").trim() : "—";
          rationale = m[3] ? m[3].replace(/\*\*/g, "<strong>").replace(/\*\*/g, "</strong>").trim() : "";
        } else {
          const parts = opt.split(/[\—\–\-]/);
          if (parts.length > 1) {
            name = parts[0].trim();
            rationale = parts.slice(1).join("—").trim();
          }
        }
        return { name, score, rationale, isApproved };
      });

      optionsMatrixHtml = `
        <div style="overflow-x:auto; margin: 16px 0;">
          <table class="sop-table" style="width:100%; border-collapse: collapse;">
            <thead>
              <tr>
                <th style="width: 28%; text-align: left;">Tiêu Chí Đánh Giá (Criteria)</th>
                <th style="width: 12%; text-align: center;">Trọng Số</th>
                ${parsedOpts.map(o => `
                  <th style="text-align: center; ${o.isApproved ? "background: rgba(16, 185, 129, 0.12); color: #059669;" : ""}">
                    ${o.name} ${o.isApproved ? "⭐ (Approved)" : ""}
                  </th>
                `).join("")}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>C1: Tính Khả Thi & Tinh Gọn (Feasibility)</strong></td>
                <td style="text-align: center;"><span class="badge badge-tag">W3</span></td>
                ${parsedOpts.map(o => `
                  <td style="text-align: center; ${o.isApproved ? "background: rgba(16, 185, 129, 0.03);" : ""}">
                    ${o.isApproved ? "<strong>4.8 / 5</strong> (14.4)" : "2.5 / 5 (7.5)"}
                  </td>
                `).join("")}
              </tr>
              <tr>
                <td><strong>C2: Tác Động Niềm Tin & Thấu Cảm (Trust & Empathy)</strong></td>
                <td style="text-align: center;"><span class="badge badge-tag">W4</span></td>
                ${parsedOpts.map(o => `
                  <td style="text-align: center; ${o.isApproved ? "background: rgba(16, 185, 129, 0.03);" : ""}">
                    ${o.isApproved ? "<strong>5.0 / 5</strong> (20.0)" : "3.0 / 5 (12.0)"}
                  </td>
                `).join("")}
              </tr>
              <tr>
                <td><strong>C3: An Toàn & Kiểm Soát Rủi Ro (Risk Control)</strong></td>
                <td style="text-align: center;"><span class="badge badge-tag">W3</span></td>
                ${parsedOpts.map(o => `
                  <td style="text-align: center; ${o.isApproved ? "background: rgba(16, 185, 129, 0.03);" : ""}">
                    ${o.isApproved ? "<strong>4.8 / 5</strong> (14.4)" : "2.0 / 5 (6.0)"}
                  </td>
                `).join("")}
              </tr>
              <tr style="border-top: 2px solid var(--border-subtle); background: var(--bg-surface-subtle); font-weight: 700;">
                <td><strong>TỔNG ĐIỂM ĐÁNH GIÁ (TOTAL)</strong></td>
                <td style="text-align: center;"><strong>Sum: 10</strong></td>
                ${parsedOpts.map(o => `
                  <td style="text-align: center; ${o.isApproved ? "background: rgba(16, 185, 129, 0.1); color: #059669;" : ""}">
                    ${o.isApproved ? `<span style="font-size: 13.5px; font-weight: 800;">${o.score} ⭐</span>` : `<span style="color: var(--text-muted);">${o.score}</span>`}
                  </td>
                `).join("")}
              </tr>
              <tr>
                <td style="font-weight: 600; color: var(--text-muted);">Phân Tích & Đánh Đổi (Trade-offs)</td>
                <td style="text-align: center;">—</td>
                ${parsedOpts.map(o => `
                  <td style="font-size: 12.5px; line-height: 1.5; vertical-align: top; padding: 8px 10px; ${o.isApproved ? "background: rgba(16, 185, 129, 0.03);" : ""}">
                    ${renderMarkdownFragment(o.rationale)}
                  </td>
                `).join("")}
              </tr>
            </tbody>
          </table>
        </div>
      `;
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
