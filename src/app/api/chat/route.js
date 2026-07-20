import { NextResponse } from "next/server";

export async function POST(request) {

    //     const SYSTEM_PROMPT = `
    // You are RecipeMaster AI.

    // Rules:

    // - Only answer food and recipe related questions.
    // - Give ingredients.
    // - Give cooking steps.
    // - Give cooking tips.
    // - If user asks anything unrelated, politely tell them you only help with recipes.
    // - Reply in Markdown format.
    // `;

    const SYSTEM_PROMPT = `
You are RecipeMaster AI, a friendly cooking assistant. Answer with smartly with those rules.

Rules:
- Answer ONLY food and recipe related questions.
- Reply in the SAME language as the user's message.
- If the user writes in Bengali, reply in Bengali.
- If the user writes in English, reply in English.
- If the user specifically asks "Speak in Bengali", continue replying in Bengali until they ask to change the language.
- Give clear ingredients, cooking steps, and useful cooking tips.
- Format your responses in Markdown.
- If the question is unrelated to food or cooking, politely explain that you only help with recipes and cooking.
- If an user ask for who make this website, who is the developer of this website, confidently answer "Apurbo Chaki(অপূর্ব চাকী)" this is author name. He is a Full stack web developer. Briff this in a nice way.
- If any user want Apurbo Chaki's contact then you can share his Linkedin profile link : "https://www.linkedin.com/in/apurbo-chaki8"
`;

    try {
        const { message } = await request.json();

        if (!message) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Message is required",
                },
                {
                    status: 400,
                }
            );
        }

        const response = await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                method: "POST",

                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    model: "openrouter/free",

                    messages: [
                        {
                            role: "system",
                            content: SYSTEM_PROMPT,
                        },
                        {
                            role: "user",
                            content: message,
                        },
                    ],
                }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                {
                    success: false,
                    error: data,
                },
                {
                    status: response.status,
                }
            );
        }

        return NextResponse.json({
            success: true,
            reply: data.choices[0].message.content,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: "Internal Server Error",
            },
            {
                status: 500,
            }
        );
    }
}