"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const works = [
  { id: 1, title: "Silent Morning", category: "Landscape", year: "2024" },
  { id: 2, title: "Urban Fragments", category: "Street", year: "2024" },
  { id: 3, title: "Mono", category: "Portrait", year: "2023" },
  { id: 4, title: "Between Lines", category: "Architecture", year: "2023" },
  { id: 5, title: "Fleeting", category: "Documentary", year: "2023" },
  { id: 6, title: "Still Life", category: "Commercial", year: "2022" },
];

const categories = ["All", "Landscape", "Street", "Portrait", "Architecture", "Documentary", "Commercial"];

export default function PhotographerClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);

  const filteredWorks = activeCategory === "All"
    ? works
    : works.filter(w => w.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-lg tracking-[0.2em] font-light"
            >
              YUKI TANAKA
            </motion.a>
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hidden md:flex items-center gap-8"
            >
              {["Works", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </motion.nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900"
        />

        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm tracking-[0.4em] text-white/40 mb-6"
          >
            PHOTOGRAPHER
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl md:text-8xl font-extralight tracking-tight mb-6"
          >
            光と影の間に、
            <br />
            <span className="italic font-light">物語を紡ぐ。</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-white/40 text-sm max-w-md mx-auto"
          >
            A moment captured is a moment preserved.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/30 tracking-wider">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-white/20"
          />
        </motion.div>
      </section>

      {/* Works */}
      <section id="works" className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 mb-16 justify-center"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "text-white border-b border-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Works Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredWorks.map((work, i) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setHoveredWork(work.id)}
                onMouseLeave={() => setHoveredWork(null)}
                className="relative aspect-[4/5] bg-zinc-900 overflow-hidden cursor-pointer group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-800 transition-transform duration-700 group-hover:scale-105" />

                {/* Overlay */}
                <motion.div
                  initial={false}
                  animate={{ opacity: hoveredWork === work.id ? 1 : 0 }}
                  className="absolute inset-0 bg-black/60 flex items-end p-6"
                >
                  <div>
                    <p className="text-xs text-white/60 tracking-wider mb-1">{work.category}</p>
                    <h3 className="text-xl font-light">{work.title}</h3>
                    <p className="text-sm text-white/40 mt-1">{work.year}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-square bg-zinc-900"
            />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm tracking-[0.3em] text-white/40 mb-4">ABOUT</p>
              <h2 className="text-3xl md:text-4xl font-extralight mb-8">田中 雪</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                東京を拠点に活動するフォトグラファー。
                光と影のコントラストを通じて、
                日常に潜む非日常を切り取ることを
                テーマに作品を制作しています。
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                広告、エディトリアル、アート作品まで、
                幅広い領域で活動中。
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-2xl font-light mb-1">10+</div>
                  <div className="text-sm text-white/40">Years</div>
                </div>
                <div>
                  <div className="text-2xl font-light mb-1">200+</div>
                  <div className="text-sm text-white/40">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-light mb-1">5</div>
                  <div className="text-sm text-white/40">Awards</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.3em] text-white/40 mb-4">CONTACT</p>
            <h2 className="text-3xl md:text-4xl font-extralight mb-8">
              お仕事のご依頼・
              <br />
              お問い合わせ
            </h2>
            <a
              href="mailto:hello@yukitanaka.photo"
              className="inline-block text-xl md:text-2xl font-light border-b border-white/20 pb-2 hover:border-white transition-colors cursor-pointer"
            >
              hello@yukitanaka.photo
            </a>
            <div className="flex justify-center gap-8 mt-12">
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer">Instagram</a>
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer">Twitter</a>
              <a href="#" className="text-sm text-white/40 hover:text-white transition-colors cursor-pointer">Behance</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-sm tracking-[0.2em] font-light">YUKI TANAKA</span>
            <span className="text-xs text-white/30">© 2024 All rights reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
