import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/common/Footer";
import ChatBot from "@/components/chatbot/ChatBot";

const outfitFont = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "RecipeMaster AI",
  description: "Discover, share, and manage recipes with nutrition insights.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfitFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[var(--font-outfit)]">
        <Navbar />
        {children}

        <ChatBot/>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}