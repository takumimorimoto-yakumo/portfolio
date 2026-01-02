"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui";
import {
  CountUp,
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/animations";

export default function Results() {
  const stats = [
    { number: 1000, suffix: "+", label: "導入企業数" },
    { number: 40, suffix: "%", label: "営業効率UP" },
    { number: 98, suffix: "%", label: "継続率" },
    { number: 24, suffix: "h", label: "サポート対応" },
  ];

  const logos = [
    "TechCorp",
    "InnovateCo",
    "GrowthLabs",
    "FutureTech",
    "SmartBiz",
    "NextGen",
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="多くの企業に選ばれています"
          subtitle="スタートアップから大企業まで幅広くご利用いただいています"
        />

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItemVariants}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                <CountUp end={stat.number} suffix={stat.suffix} duration={2} />
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm"
        >
          <p className="text-center text-gray-500 text-sm mb-8">導入企業様</p>
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                variants={staggerItemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center h-12 text-gray-400 font-semibold"
              >
                {logo}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
