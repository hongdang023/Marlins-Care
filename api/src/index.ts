/**
 * Marlins Care Knowledge Hub — Cloudflare Workers API Gateway
 * api.domain.com
 */

export interface Env {
  DB: D1Database;
  CORS_ORIGIN?: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const { pathname, searchParams } = url;

    // CORS Headers
    const corsHeaders = {
      "Access-Control-Allow-Origin": env.CORS_ORIGIN || "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Content-Type": "application/json; charset=utf-8"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // 1. Health Check
      if (pathname === "/api/health" || pathname === "/") {
        return new Response(JSON.stringify({
          status: "healthy",
          service: "Marlins Care API Gateway",
          version: "v2.0.0",
          timestamp: new Date().toISOString()
        }), { headers: corsHeaders });
      }

      // 2. GET /api/v1/playbooks - Lấy danh sách toàn bộ Playbooks
      if (pathname === "/api/v1/playbooks" && request.method === "GET") {
        const { results: playbooks } = await env.DB.prepare(
          `SELECT * FROM playbooks ORDER BY order_index ASC`
        ).all();

        const { results: sections } = await env.DB.prepare(
          `SELECT * FROM playbook_sections ORDER BY order_index ASC`
        ).all();

        // Gắn sections vào từng playbook
        const fullData = playbooks.map((p: any) => ({
          ...p,
          touchpoints: p.touchpoints ? p.touchpoints.split(", ") : [],
          sections: sections.filter((s: any) => s.playbook_id === p.id)
        }));

        return new Response(JSON.stringify({ success: true, data: fullData }), {
          headers: corsHeaders
        });
      }

      // 3. GET /api/v1/playbooks/:slug - Chi tiết 1 playbook
      if (pathname.startsWith("/api/v1/playbooks/") && request.method === "GET") {
        const slug = pathname.replace("/api/v1/playbooks/", "");
        const playbook = await env.DB.prepare(
          `SELECT * FROM playbooks WHERE slug = ? OR id = ?`
        ).bind(`/playbooks/${slug}`, slug).first();

        if (!playbook) {
          return new Response(JSON.stringify({ success: false, error: "Playbook not found" }), {
            status: 404,
            headers: corsHeaders
          });
        }

        const { results: sections } = await env.DB.prepare(
          `SELECT * FROM playbook_sections WHERE playbook_id = ? ORDER BY order_index ASC`
        ).bind(playbook.id).all();

        const { results: faqs } = await env.DB.prepare(
          `SELECT * FROM faqs WHERE playbook_id = ? ORDER BY order_index ASC`
        ).bind(playbook.id).all();

        return new Response(JSON.stringify({
          success: true,
          data: {
            ...playbook,
            touchpoints: playbook.touchpoints ? (playbook.touchpoints as string).split(", ") : [],
            sections,
            faqs
          }
        }), { headers: corsHeaders });
      }

      // 4. POST /api/v1/playbooks - Thêm mới Playbook (Admin)
      if (pathname === "/api/v1/playbooks" && request.method === "POST") {
        const body: any = await request.json();
        const id = body.id || body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        const slug = body.slug || `/playbooks/${id}`;

        await env.DB.prepare(`
          INSERT INTO playbooks (id, module_id, title, slug, tier, touchpoints, objective, trigger_condition, standard_time, target_audience, owner, output, order_index)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
          id,
          body.module_id || "playbooks",
          body.title,
          slug,
          body.tier || "Tier 2",
          Array.isArray(body.touchpoints) ? body.touchpoints.join(", ") : body.touchpoints,
          body.objective || "",
          body.trigger_condition || "",
          body.standard_time || "",
          body.target_audience || "",
          body.owner || "",
          body.output || "",
          body.order_index || 99
        ).run();

        return new Response(JSON.stringify({ success: true, message: "Playbook created", id }), {
          status: 201,
          headers: corsHeaders
        });
      }

      // 5. PUT /api/v1/playbooks/:id - Cập nhật Playbook (Admin)
      if (pathname.startsWith("/api/v1/playbooks/") && request.method === "PUT") {
        const id = pathname.replace("/api/v1/playbooks/", "");
        const body: any = await request.json();

        await env.DB.prepare(`
          UPDATE playbooks 
          SET title = ?, tier = ?, objective = ?, trigger_condition = ?, standard_time = ?, target_audience = ?, owner = ?, output = ?, updated_at = CURRENT_TIMESTAMP
          WHERE id = ?
        `).bind(
          body.title,
          body.tier,
          body.objective,
          body.trigger_condition,
          body.standard_time,
          body.target_audience,
          body.owner,
          body.output,
          id
        ).run();

        return new Response(JSON.stringify({ success: true, message: "Playbook updated" }), {
          headers: corsHeaders
        });
      }

      // 6. GET /api/v1/faqs - Lấy danh sách FAQs
      if (pathname === "/api/v1/faqs" && request.method === "GET") {
        const { results: faqs } = await env.DB.prepare(
          `SELECT * FROM faqs ORDER BY order_index ASC`
        ).all();
        return new Response(JSON.stringify({ success: true, data: faqs }), {
          headers: corsHeaders
        });
      }

      // 404 Route Not Found
      return new Response(JSON.stringify({ success: false, error: "Endpoint not found" }), {
        status: 404,
        headers: corsHeaders
      });

    } catch (err: any) {
      return new Response(JSON.stringify({ success: false, error: err.message }), {
        status: 500,
        headers: corsHeaders
      });
    }
  }
};
