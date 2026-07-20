"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  { name: "Breakfast", desc: "Start your day right", icon: "🍳" },
  { name: "Lunch", desc: "Power through your day", icon: "🥗" },
  { name: "Dinner", desc: "End with a feast", icon: "🍝" },
  { name: "Dessert", desc: "Sweet treats for you", icon: "🍰" },
  { name: "Fast Food", desc: "Quick and delicious", icon: "🍔" },
  { name: "Healthy", desc: "Nutritious and fresh", icon: "🥑" },
];

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
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PopularCategories() {
  return (

// /recipes?category=Fast+Food

    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          variants={sectionFadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">Popular Categories</h2>
          <p className="text-secondary-text text-lg">Explore a wide variety of recipes tailored to your cravings and dietary needs.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((cat, i) => (
            <motion.div key={i} variants={cardFadeUp}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href={`/recipes?category=${cat.name.replace(' ', '+')}`}
                  className="group p-6 bg-neutral-bg border border-border-light rounded-2xl hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-text mb-1 group-hover:text-primary transition-colors">{cat.name}</h3>
                    <p className="text-secondary-text text-sm">{cat.desc}</p>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
