// Automated Regression Test for all routes and components in Marlins Care
import { FULL_PLAYBOOKS_COMPILED } from "../data/full_playbooks_compiled.js";
import { SITEMAP_CONFIG } from "../js/data.js";

// Mock document for Node environment
class MockElement {
  constructor(tag = "div") {
    this.tagName = tag;
    this.className = "";
    this._innerHTML = "";
    this.children = [];
    this.style = {};
  }
  set innerHTML(val) {
    this._innerHTML = val;
  }
  get innerHTML() {
    return this._innerHTML;
  }
  appendChild(child) {
    this.children.push(child);
  }
  setAttribute(k, v) {
    this[k] = v;
  }
  addEventListener() {}
  querySelectorAll() {
    return [];
  }
  querySelector() {
    return new MockElement("div");
  }
}

globalThis.document = {
  createElement: (tag) => new MockElement(tag),
  getElementById: () => new MockElement("div"),
  querySelector: () => new MockElement("div"),
  querySelectorAll: () => [],
};
globalThis.window = {
  location: { hash: "" },
  addEventListener: () => {},
};

async function runAudit() {
  console.log("🔍 [AUDIT] Running full application render audit...\n");
  let errors = 0;

  // 1. Test Requirements & Standards Renderer
  console.log("--- 1. Testing Requirements & Standards ---");
  try {
    const { renderRequirements } = await import("../js/components/requirementsRenderer.js");
    const testSlugs = [
      "/requirements/topic-library",
      "/requirements/pedagogy-standards",
      "/requirements/playbooks-template",
      "/requirements/content-standards",
      "/requirements/dar-template",
      "/requirements/ui-design-system",
      "/requirements/tech-stack"
    ];

    for (const slug of testSlugs) {
      const el = renderRequirements(slug);
      const html = el.innerHTML;
      if (!html || html.trim().length === 0) {
        console.error(`❌ [BLANK PAGE DETECTED] Slug "${slug}" rendered empty HTML!`);
        errors++;
      } else if (!html.includes("<h") && !html.includes("<table")) {
        console.error(`❌ [MALFORMED HTML] Slug "${slug}" rendered without headers or tables (${html.length} bytes)`);
        errors++;
      } else {
        console.log(`✅ [OK] ${slug.padEnd(35)} -> ${html.length} chars, ${(html.match(/<table/g) || []).length} tables`);
      }
    }
  } catch (err) {
    console.error("❌ [FATAL ERROR in requirementsRenderer]:", err);
    errors++;
  }

  // 2. Test All 8 Playbooks
  console.log("\n--- 2. Testing 8 Playbooks ---");
  try {
    const { renderPlaybook } = await import("../js/components/playbookRenderer.js");
    const playbookSlugs = [
      "social-media",
      "community",
      "marlins-workshop",
      "marlins-day",
      "trial-class",
      "live-class",
      "family-meeting",
      "referrals"
    ];

    for (const slug of playbookSlugs) {
      const el = renderPlaybook(`/playbooks/${slug}/overview`);
      const html = el.innerHTML;
      if (!html || html.trim().length === 0) {
        console.error(`❌ [BLANK PLAYBOOK] Slug "${slug}" rendered empty HTML!`);
        errors++;
      } else {
        const pb = FULL_PLAYBOOKS_COMPILED[slug];
        console.log(`✅ [OK] Playbook ${slug.padEnd(20)} -> ${html.length} chars (Title: "${pb ? pb.title : 'N/A'}")`);
      }
    }
  } catch (err) {
    console.error("❌ [FATAL ERROR in playbookRenderer]:", err);
    errors++;
  }

  if (errors > 0) {
    console.error(`\n🚨 AUDIT FAILED with ${errors} error(s)! Please fix immediately.`);
    process.exit(1);
  } else {
    console.log("\n🎉 FULL AUDIT COMPLETE: 100% of all pages (7 Requirements & 8 Playbooks) render non-empty HTML with 0 errors!");
  }
}

runAudit();
