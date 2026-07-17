"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Is RecipeMaster AI completely free to use?",
    answer: "Yes! The core features of RecipeMaster AI are completely free, including access to thousands of recipes, basic nutrition insights, and community features."
  },
  {
    question: "How does the AI recommendation work?",
    answer: "Our AI analyzes your dietary preferences, past liked recipes, and cooking habits to suggest meals that you are highly likely to enjoy and fit your nutritional goals."
  },
  {
    question: "Can I submit my own recipes?",
    answer: "Absolutely! We encourage users to share their culinary creations. You can easily upload recipes, add photos, and share them with the community."
  },
  {
    question: "Are the nutrition facts accurate?",
    answer: "Our nutrition insights are calculated using verified food databases. While highly accurate, they should be used as a general guide rather than medical advice."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">Frequently Asked Questions</h2>
          <p className="text-secondary-text text-lg">Everything you need to know about RecipeMaster AI.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'border-primary/50 bg-neutral-bg shadow-sm' : 'border-border-light hover:border-gray-300'}`}
            >
              <button 
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              >
                <span className="font-bold text-primary-text text-lg">{faq.question}</span>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </span>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-secondary-text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
