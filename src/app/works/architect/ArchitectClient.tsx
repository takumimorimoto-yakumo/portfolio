"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    title: "Horizon House",
    location: "Kamakura, Japan",
    year: "2024",
    category: "Residential",
  },
  {
    id: "02",
    title: "The Void Gallery",
    location: "Tokyo, Japan",
    year: "2023",
    category: "Cultural",
  },
  {
    id: "03",
    title: "Monolith Office",
    location: "Osaka, Japan",
    year: "2023",
    category: "Commercial",
  },
  {
    id: "04",
    title: "Silent Chapel",
    location: "Kyoto, Japan",
    year: "2022",
    category: "Religious",
  },
];

const services = [
  { title: "建築設計", desc: "住宅から商業施設まで、あらゆる建築の設計を手がけます。" },
  { title: "インテリア", desc: "空間の本質を捉えた、機能美あふれるインテリアデザイン。" },
  { title: "都市計画", desc: "街の未来を描く、持続可能な都市計画を提案します。" },
];

export default function ArchitectClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div ref={containerRef} className="bg-white text-[#171717]" style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Josefin+Sans:wght@300;400;500;600&display=swap');
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="flex items-center justify-between h-24">
            <a href="#" className="text-white text-xl tracking-[0.3em]" style={{ fontFamily: "'Cinzel', serif" }}>
              NOIR
            </a>
            <nav className="hidden md:flex items-center gap-12">
              {["Projects", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white text-sm tracking-[0.2em] hover:opacity-60 transition-opacity"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#171717]" />

        <div className="relative z-10 text-center text-white px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm tracking-[0.4em] text-[#D4AF37] mb-8"
          >
            ARCHITECTURE STUDIO
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.1em] mb-8"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            空間を、
            <br />
            思想する。
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-sm md:text-base text-white/60 tracking-wider max-w-md mx-auto"
          >
            建築とは、空間に思想を刻むこと。
            <br />
            機能美と詩情の融合を追求します。
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-20 bg-white/30" />
        </motion.div>
      </motion.section>

      {/* Projects */}
      <section id="projects" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-sm tracking-[0.3em] text-[#D4AF37] mb-4">SELECTED WORKS</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide" style={{ fontFamily: "'Cinzel', serif" }}>
              Projects
            </h2>
          </motion.div>

          <div className="space-y-1">
            {projects.map((project, i) => (
              <motion.a
                key={project.id}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center justify-between py-8 border-b border-[#E5E5E5] cursor-pointer"
              >
                <div className="flex items-center gap-8 md:gap-16">
                  <span className="text-sm text-[#999] tracking-wider">{project.id}</span>
                  <div>
                    <h3
                      className="text-2xl md:text-3xl font-light tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#666] mt-1">{project.location}</p>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-12">
                  <span className="text-sm text-[#999]">{project.category}</span>
                  <span className="text-sm text-[#999]">{project.year}</span>
                  <svg
                    className="w-6 h-6 text-[#171717] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm tracking-[0.3em] text-[#D4AF37] mb-4">PHILOSOPHY</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-8" style={{ fontFamily: "'Cinzel', serif" }}>
                About
              </h2>
              <p className="text-[#666] leading-relaxed mb-6">
                NOIR Architectureは、2010年の設立以来、
                「空間に思想を刻む」という理念のもと、
                住宅、商業施設、公共建築など多岐にわたる
                プロジェクトを手がけてきました。
              </p>
              <p className="text-[#666] leading-relaxed mb-8">
                私たちは、クライアントの想いを丁寧に汲み取り、
                その土地の文脈を読み解きながら、
                機能美と詩情が融合した建築を創造します。
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-light mb-1" style={{ fontFamily: "'Cinzel', serif" }}>50+</div>
                  <div className="text-sm text-[#999]">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-light mb-1" style={{ fontFamily: "'Cinzel', serif" }}>14</div>
                  <div className="text-sm text-[#999]">Years</div>
                </div>
                <div>
                  <div className="text-3xl font-light mb-1" style={{ fontFamily: "'Cinzel', serif" }}>8</div>
                  <div className="text-sm text-[#999]">Awards</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-[3/4] bg-[#171717]"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 bg-[#171717] text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-sm tracking-[0.3em] text-[#D4AF37] mb-4">WHAT WE DO</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide" style={{ fontFamily: "'Cinzel', serif" }}>
              Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-t border-white/20 pt-8"
              >
                <span className="text-sm text-[#D4AF37] tracking-wider">0{i + 1}</span>
                <h3 className="text-2xl font-light mt-4 mb-4 tracking-wide" style={{ fontFamily: "'Cinzel', serif" }}>
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-8 md:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.3em] text-[#D4AF37] mb-4">GET IN TOUCH</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-8" style={{ fontFamily: "'Cinzel', serif" }}>
              Contact
            </h2>
            <p className="text-[#666] mb-12 max-w-md mx-auto">
              新しいプロジェクトについてのご相談、
              <br />
              お気軽にお問い合わせください。
            </p>
            <a
              href="mailto:info@noir-architecture.com"
              className="inline-block px-12 py-4 border border-[#171717] text-sm tracking-[0.2em] hover:bg-[#171717] hover:text-white transition-all duration-300 cursor-pointer"
            >
              CONTACT US
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#171717] text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <span className="text-xl tracking-[0.3em]" style={{ fontFamily: "'Cinzel', serif" }}>NOIR</span>
              <p className="text-sm text-white/40 mt-2">Architecture Studio</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-white/40">
                東京都渋谷区神宮前1-1-1
                <br />
                info@noir-architecture.com
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-xs text-white/30">© 2024 NOIR Architecture. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
