"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// ─── Reusable Animation Variants ────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative bg-neutral-bg overflow-hidden py-24 md:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Text content */}
        <div className="flex-1 space-y-6 text-center md:text-left z-10">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text leading-tight"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Discover, Share &amp; <br className="hidden md:block" />
            <span className="text-primary">Master Recipes</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-secondary-text max-w-2xl mx-auto md:mx-0"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.12}
          >
            Join RecipeMaster AI to find personalized nutrition insights, top-rated meals, and smart recommendations tailored just for you.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mt-8"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.22}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/recipes"
                className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-medium rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2"
              >
                Explore Recipes
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/extras/about"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-primary-text border border-border-light font-medium rounded-full hover:bg-neutral-50 transition-colors text-center"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          className="flex-1 relative w-full max-w-lg mx-auto md:max-w-none"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop"
              alt="Delicious food bowl"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          {/* Decorative element */}
          <motion.div
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            </div>
            <div>
              <p className="text-sm font-bold text-primary-text">10k+</p>
              <p className="text-xs text-secondary-text">Healthy Recipes</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
