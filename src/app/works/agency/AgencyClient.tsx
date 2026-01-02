"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  { num: "01", title: "Brand Strategy", desc: "ブランドの核となるアイデンティティを構築" },
  { num: "02", title: "Digital Design", desc: "UI/UXからモーションまで、デジタル体験を設計" },
  { num: "03", title: "Development", desc: "最新技術で、アイデアを形にする" },
  { num: "04", title: "Marketing", desc: "データドリブンな成長戦略を実行" },
];

const works = [
  { title: "NEXUS", category: "Brand Identity", color: "from-rose-500 to-orange-500" },
  { title: "AURORA", category: "Web Design", color: "from-violet-500 to-purple-500" },
  { title: "SYNC", category: "Mobile App", color: "from-cyan-500 to-blue-500" },
  { title: "FLOW", category: "E-Commerce", color: "from-emerald-500 to-teal-500" },
];

const clients = ["Google", "Apple", "Meta", "Amazon", "Netflix", "Spotify"];

export default function AgencyClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-xl font-bold tracking-tight">
              AGENCY©
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {["Work", "Services", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm hover:opacity-60 transition-opacity"
                >
                  {item}
                </a>
              ))}
            </nav>
            <button className="md:hidden">
              <div className="w-6 h-0.5 bg-white mb-1.5" />
              <div className="w-6 h-0.5 bg-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, #1a1a2e 0%, #000 70%)",
                "radial-gradient(circle at 80% 50%, #1a1a2e 0%, #000 70%)",
                "radial-gradient(circle at 50% 80%, #1a1a2e 0%, #000 70%)",
                "radial-gradient(circle at 20% 50%, #1a1a2e 0%, #000 70%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[12vw] md:text-[10vw] font-bold leading-[0.9] tracking-tighter"
            >
              WE CREATE
            </motion.h1>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-[12vw] md:text-[10vw] font-bold leading-[0.9] tracking-tighter"
              style={{
                WebkitTextStroke: "1px white",
                WebkitTextFillColor: "transparent",
              }}
            >
              BOLD IDEAS
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 text-gray-400 max-w-md mx-auto"
          >
            ブランド戦略からデジタルプロダクトまで。
            <br />
            大胆なアイデアで、ビジネスを次のステージへ。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-4 text-sm group"
            >
              <span className="px-6 py-3 border border-white/30 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300">
                Start a Project
              </span>
              <span className="w-12 h-12 flex items-center justify-center border border-white/30 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300">
                →
              </span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee */}
      <section className="py-8 border-y border-white/10 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-4xl font-bold text-white/10">
              CREATIVE • DIGITAL • STRATEGY • DESIGN • DEVELOPMENT •
            </span>
          ))}
        </motion.div>
      </section>

      {/* Works */}
      <section id="work" className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-16"
          >
            <div>
              <p className="text-sm text-gray-500 mb-2">Selected Work</p>
              <h2 className="text-4xl md:text-5xl font-bold">Our Projects</h2>
            </div>
            <a href="#" className="hidden md:block text-sm hover:underline">
              View All →
            </a>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {works.map((work, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 0.98 }}
                className="group cursor-pointer"
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${work.color} rounded-2xl mb-4 overflow-hidden relative`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium"
                    >
                      View Project
                    </motion.span>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold">{work.title}</h3>
                    <p className="text-gray-500">{work.category}</p>
                  </div>
                  <span className="text-gray-500">0{i + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm text-gray-500 mb-2">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold">Services</h2>
          </motion.div>

          <div className="space-y-0">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group py-8 border-b border-black/10 flex items-center justify-between cursor-pointer hover:pl-4 transition-all"
              >
                <div className="flex items-center gap-8">
                  <span className="text-sm text-gray-400">{service.num}</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-gray-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 mt-1">{service.desc}</p>
                  </div>
                </div>
                <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 mb-12"
          >
            Trusted by industry leaders
          </motion.p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-16">
            {clients.map((client, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                whileHover={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-2xl md:text-3xl font-bold transition-opacity cursor-default"
              >
                {client}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <motion.div
          style={{ y: y2 }}
          className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-violet-500/20 to-transparent rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              Let&apos;s create
              <br />
              <span style={{
                WebkitTextStroke: "1px white",
                WebkitTextFillColor: "transparent",
              }}>
                something great
              </span>
            </h2>
            <p className="text-gray-400 mb-12 max-w-md mx-auto">
              新しいプロジェクトについて話しましょう。
              <br />
              お問い合わせをお待ちしています。
            </p>
            <a
              href="mailto:hello@agency.com"
              className="inline-block px-12 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
            >
              hello@agency.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-xl font-bold">AGENCY©</span>
            <div className="flex gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            <span className="text-sm text-gray-500">© 2024 All rights reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
