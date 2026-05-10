export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { message, state } = req.body;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": Bearer ${process.env.GROQ_API_KEY},
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          {
            role: "system",
            content: "أنت مدرب محترف لخسارة الوزن والصيام المتقطع. قدم نصائح قصيرة وعملية بناءً على حالة المستخدم. أجب باللغة العربية دائماً.",
          },
          {
            role: "user",
            content: حالة المستخدم: الوزن=${state.weight}, الهدف=${state.goal}, السعرات=${state.calories}, ساعات الصيام=${state.fastingHours}, الماء=${state.water}. السؤال: ${message},
          },
        ],
      }),
    });

    const data = await response.json();
    res.status(200).json({ reply: data.choices?.[0]?.message?.content || "عذراً، لم أستطع الرد الآن." });
  } catch (err) {
    res.status(500).json({ error: "حدث خطأ في الخادم" });
  }
}
