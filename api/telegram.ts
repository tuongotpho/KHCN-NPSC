export default async function handler(req: any, res: any) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
        console.warn("Telegram credentials not configured on server.");
        return res.status(200).json({ ok: false, reason: 'Telegram not configured' });
    }

    try {
        const { data } = req.body;

        const authors = Array.isArray(data.authors) ? data.authors.join(", ") : data.authors;
        const unit = Array.isArray(data.unit) ? data.unit.join(", ") : data.unit;

        const message = `
🚀 <b>CÓ SÁNG KIẾN MỚI!</b>

📌 <b>Tiêu đề:</b> ${(data.title || '').toUpperCase()}
👤 <b>Tác giả:</b> ${authors}
🏢 <b>Đơn vị:</b> ${unit}
📅 <b>Năm:</b> ${data.year}

📝 <b>Nội dung tóm tắt:</b>
${(data.content || '').substring(0, 200)}...

🔗 <a href="${data.driveLink || '#'}">Xem tài liệu đính kèm</a>
    `.trim();

        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML',
                disable_web_page_preview: true
            })
        });

        const result = await response.json();
        return res.status(200).json({ ok: result.ok });

    } catch (error: any) {
        console.error("Telegram API Error:", error);
        return res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}
