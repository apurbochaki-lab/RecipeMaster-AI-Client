'use client';

import { motion } from "framer-motion";

// ─── Reusable Animation Variants ────────────────────────────────────────────
const sectionFadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Newsletter() {
  return (
    <section className="py-16 md:py-24 bg-neutral-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          className="bg-primary text-white rounded-3xl p-8 md:p-16 text-center max-w-5xl mx-auto shadow-2xl shadow-primary/20 overflow-hidden relative"
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Inner decoration */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-black/10 rounded-full blur-2xl"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Deliciousness to your inbox</h2>
            <p className="text-white/80 text-lg mb-10">
              Subscribe to our newsletter and get weekly recipe inspiration, cooking tips, and exclusive nutrition insights directly in your email.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-grow px-6 py-4 rounded-full text-primary-text bg-white border-2 border-transparent focus:border-white focus:outline-none focus:ring-4 focus:ring-white/20 transition-all placeholder:text-gray-400"
              />
              <motion.button
                type="submit"
                className="px-8 py-4 bg-primary-text text-white font-bold rounded-full hover:bg-black transition-colors shadow-lg whitespace-nowrap cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                Subscribe
              </motion.button>
            </form>
            <p className="text-white/60 text-sm mt-4">We care about your data. Read our <a href="#" className="underline hover:text-white">Privacy Policy</a>.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
