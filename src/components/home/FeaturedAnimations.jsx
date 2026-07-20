"use client";

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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Animated header (title + "View All" button) for FeaturedRecipes.
 */
export function FeaturedHeader() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-between items-end mb-10 gap-4"
      variants={sectionFadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">Featured Recipes</h2>
        <p className="text-secondary-text text-lg">Hand-picked recipes created and reviewed by our top chefs and community members.</p>
      </div>
      <motion.button
        className="text-primary font-medium hover:text-orange-600 transition-colors whitespace-nowrap flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
      >
        View All Recipes
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
      </motion.button>
    </motion.div>
  );
}

/**
 * Animated stagger grid that wraps recipe cards for FeaturedRecipes.
 */
export function FeaturedGrid({ children }) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Animated wrapper for each individual recipe card.
 */
export function FeaturedCardWrapper({ children }) {
  return (
    <motion.div variants={cardFadeUp}>
      {children}
    </motion.div>
  );
}
