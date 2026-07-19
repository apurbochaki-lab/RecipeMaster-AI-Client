"use client";

import { useState } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content:
                "👋 Hello! I'm RecipeMaster AI. Ask me anything about recipes or cooking.",
        },
    ]);

    const sendMessage = async () => {
        if (!message.trim() || loading) return;

        const userMessage = {
            role: "user",
            content: message,
        };

        setMessages((prev) => [...prev, userMessage]);

        const currentMessage = message;

        setMessage("");
        setLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: currentMessage,
                }),
            });

            const data = await res.json();

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content:
                        data.reply || "Sorry! Something went wrong. Please try again.",
                },
            ]);
        } catch (error) {
            console.error(error);

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Something went wrong. Please try again.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition hover:scale-105"
            >
                <MessageCircle size={26} />
            </button>

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 z-50 h-screen w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b p-4">
                    <h2 className="text-lg font-bold">🤖 RecipeMaster AI</h2>

                    <button onClick={() => setOpen(false)}>
                        <X />
                    </button>
                </div>

                {/* Messages */}
                <div className="h-[calc(100vh-140px)] overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
                                }`}
                        >
                            <div
                                className={`max-w-[80%] rounded-xl px-4 py-2 whitespace-pre-wrap ${msg.role === "user"
                                    ? "bg-green-600 text-white"
                                    : "bg-gray-100 text-black"
                                    }`}
                            >
                                {msg.content}
                            </div>
                        </div>
                    ))}

                    {loading && (
                        <div className="flex items-center gap-2 text-gray-500">
                            <Loader2 className="animate-spin" size={18} />
                            🧑‍🍳RecipeMaster AI is typing...
                        </div>
                    )}
                </div>

                {/* Input */}
                <div className="border-t p-4">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Ask a recipe..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    sendMessage();
                                }
                            }}
                            className="flex-1 rounded-lg border px-3 py-2 outline-none focus:border-green-500"
                        />

                        <button
                            onClick={sendMessage}
                            disabled={loading}
                            className="rounded-lg bg-green-600 px-4 text-white hover:bg-green-700 disabled:opacity-50"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}