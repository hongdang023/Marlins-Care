-- ==============================================================================
-- MARLINS CARE KNOWLEDGE HUB — CLOUDFLARE D1 DATABASE SCHEMA
-- ==============================================================================

-- 1. Modules / Navigations Table
CREATE TABLE IF NOT EXISTS modules (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    order_index INTEGER DEFAULT 0
);

-- 2. Playbooks Table
CREATE TABLE IF NOT EXISTS playbooks (
    id TEXT PRIMARY KEY,
    module_id TEXT NOT NULL,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    tier TEXT CHECK(tier IN ('Tier 1', 'Tier 2', 'Tier 3')),
    touchpoints TEXT,
    objective TEXT,
    trigger_condition TEXT,
    standard_time TEXT,
    target_audience TEXT,
    owner TEXT,
    output TEXT,
    order_index INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (module_id) REFERENCES modules(id)
);

-- 3. Playbook Sub-Sections Table
CREATE TABLE IF NOT EXISTS playbook_sections (
    id TEXT PRIMARY KEY,
    playbook_id TEXT NOT NULL,
    section_key TEXT NOT NULL, -- overview, stakeholder-mapping, session-agenda, sop-steps, dos-donts, assessment-rubrics, decision-logs, faq
    title TEXT NOT NULL,
    content_html TEXT NOT NULL,
    order_index INTEGER DEFAULT 0,
    FOREIGN KEY (playbook_id) REFERENCES playbooks(id)
);

-- 4. FAQs Table
CREATE TABLE IF NOT EXISTS faqs (
    id TEXT PRIMARY KEY,
    playbook_id TEXT NOT NULL,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    order_index INTEGER DEFAULT 0,
    FOREIGN KEY (playbook_id) REFERENCES playbooks(id)
);

-- ==============================================================================
-- INITIAL SEED DATA
-- ==============================================================================
INSERT OR IGNORE INTO modules (id, title, slug, order_index) VALUES
('overview', 'Overview', '/overview', 1),
('journey', 'Parent Journey', '/journey', 2),
('playbooks', 'Operational Playbooks', '/playbooks', 3),
('requirements', 'Requirements & Standards', '/requirements', 4);

INSERT OR IGNORE INTO playbooks (id, module_id, title, slug, tier, touchpoints, objective, trigger_condition, standard_time, target_audience, owner, output, order_index) VALUES
('community', 'playbooks', 'Community & Social', '/playbooks/community', 'Tier 3', 'COM', 'Vận hành hệ thống nhóm Zalo tương tác và kênh mạng xã hội gắn kết.', 'Hàng ngày theo khung giờ vàng', '15 phút/ngày', 'Toàn bộ phụ huynh', 'Community Specialist / Mentor', 'Tương tác thảo luận và thông báo', 1),
('marlins-workshop', 'playbooks', 'Marlins Workshop', '/playbooks/marlins-workshop', 'Tier 1', 'WS', 'Tổ chức Live Workshop trực tuyến tối Thứ 5 và giải đáp sư phạm.', 'Tối Thứ 5 hàng tuần', '60 phút', 'Phụ huynh quan tâm', 'Host / Key Mentor', 'Bản ghi hình và tài liệu tóm tắt', 2),
('marlins-day', 'playbooks', 'Marlins Day', '/playbooks/marlins-day', 'Tier 1', 'T3', 'Đối thoại trực tiếp chiều Chủ Nhật tại không gian khách sạn.', 'Chiều Chủ Nhật tuần 3', '120 phút', 'Gia đình học sinh', 'Care Lead / Mentor', 'Biên bản Family Insights', 3),
('trial-class', 'playbooks', 'Trial Class', '/playbooks/trial-class', 'Tier 2', 'T1, T2, T4', 'Quy trình học thử 2 buổi và tham vấn độ phù hợp dựa trên bằng chứng dữ liệu.', 'Sau khi đăng ký trải nghiệm', '2 buổi × 90 phút', 'Học sinh & Phụ huynh trải nghiệm', 'Trial Mentor', 'Báo cáo năng lực học thử Dory Notes', 4),
('live-class', 'playbooks', 'Live Class', '/playbooks/live-class', 'Tier 2', 'T5, T6, T7, T8, T9, T13', 'Vận hành 12 buổi học chính thức, báo cáo tuần và ấn phẩm Growth Story 5 phần.', 'Lịch học chính thức hàng tuần', '12 buổi', 'Học sinh chính thức', 'Primary Mentor', 'Growth Story & Báo cáo tiến độ tuần', 5),
('family-meeting', 'playbooks', 'Family Meeting', '/playbooks/family-meeting', 'Tier 1', 'T10', 'Gặp gỡ trực tiếp gia đình theo khoảnh khắc ý nghĩa (Family Tour).', 'Sau buổi học thứ 6 hoặc khi có rủi ro', '45 phút', 'Bố mẹ và học sinh', 'Mentor & Care Lead', 'Family Notes 6 trục', 6),
('referrals', 'playbooks', 'Referrals Program', '/playbooks/referrals', 'Tier 3', 'REF', 'Chính sách tri ân song phương 15% - 15% Tuition Credit cho phụ huynh.', 'Phụ huynh giới thiệu bạn bè', 'Tức thì', 'Phụ huynh giới thiệu & Bạn bè', 'System / Care Lead', 'Mã ưu đãi & Ghi nhận học phí', 7);
