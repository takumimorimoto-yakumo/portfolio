"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const menuItems = [
  { name: "Espresso", price: "¥400", description: "濃厚なクレマと深い味わい" },
  { name: "Cappuccino", price: "¥550", description: "シルキーなフォームミルク" },
  { name: "Pour Over", price: "¥600", description: "丁寧なハンドドリップ" },
  { name: "Latte", price: "¥500", description: "なめらかなミルクとのハーモニー" },
];

const beans = [
  { origin: "Ethiopia Yirgacheffe", flavor: "フローラル・柑橘系", roast: "浅煎り" },
  { origin: "Guatemala Antigua", flavor: "チョコレート・ナッツ", roast: "中煎り" },
  { origin: "Brazil Santos", flavor: "キャラメル・まろやか", roast: "中深煎り" },
];

const hours = [
  { day: "平日", time: "8:00 - 20:00" },
  { day: "土曜", time: "9:00 - 21:00" },
  { day: "日祝", time: "9:00 - 18:00" },
];

export default function CafeClient() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C]" style={{ fontFamily: "'Cormorant Garamond', 'Noto Serif JP', serif" }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-2xl tracking-[0.3em] font-light">
              MINIMAL
            </a>
            <nav className="hidden md:flex items-center gap-12">
              {["Menu", "Beans", "About", "Access"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm tracking-[0.2em] text-[#666] hover:text-[#2C2C2C] transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8E4DF] to-[#FAF9F6]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-6"
        >
          <p className="text-sm tracking-[0.4em] text-[#8B7355] mb-6">SPECIALTY COFFEE</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8 tracking-wide">
            静かな時間を、
            <br />
            <span className="italic">一杯のコーヒーと</span>
          </h1>
          <p className="text-[#666] max-w-md mx-auto mb-12 leading-relaxed">
            厳選された豆と、丁寧なハンドドリップ。
            <br />
            都会の喧騒を忘れる、特別な空間を。
          </p>
          <a
            href="#menu"
            className="inline-block px-12 py-4 border border-[#2C2C2C] text-sm tracking-[0.2em] hover:bg-[#2C2C2C] hover:text-white transition-all duration-300"
          >
            VIEW MENU
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-[#2C2C2C]/20" />
        </motion.div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-sm tracking-[0.4em] text-[#8B7355] mb-4">OUR SELECTION</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">Menu</h2>
          </motion.div>

          <div className="space-y-8">
            {menuItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-baseline justify-between py-6 border-b border-[#E8E4DF]"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-light mb-1">{item.name}</h3>
                  <p className="text-sm text-[#666]">{item.description}</p>
                </div>
                <span className="text-lg text-[#8B7355] font-light">{item.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beans Section */}
      <section id="beans" className="py-32 bg-[#F5F3EF]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-sm tracking-[0.4em] text-[#8B7355] mb-4">SINGLE ORIGIN</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">Coffee Beans</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {beans.map((bean, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#8B7355] to-[#5C4033]" />
                <h3 className="text-lg font-light mb-2">{bean.origin}</h3>
                <p className="text-sm text-[#666] mb-4">{bean.flavor}</p>
                <span className="inline-block px-4 py-1 text-xs tracking-[0.2em] border border-[#8B7355] text-[#8B7355]">
                  {bean.roast}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-[#E8E4DF] to-[#D4CFC7]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm tracking-[0.4em] text-[#8B7355] mb-4">OUR PHILOSOPHY</p>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-8">
                一杯に込める、
                <br />
                こだわり
              </h2>
              <p className="text-[#666] leading-relaxed mb-6">
                私たちは、コーヒーを「飲む」という行為を、
                日常の中の特別な時間へと昇華させることを目指しています。
              </p>
              <p className="text-[#666] leading-relaxed mb-6">
                世界各地から厳選した豆を、最適な焙煎度合いで仕上げ、
                一杯一杯丁寧にハンドドリップでお淹れします。
              </p>
              <p className="text-[#666] leading-relaxed">
                静寂と、豆の香りと、ゆっくりと流れる時間。
                <br />
                そんな空間をお届けします。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-32 bg-[#2C2C2C] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-sm tracking-[0.4em] text-[#8B7355] mb-4">VISIT US</p>
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">Access</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-light mb-6 tracking-wide">Location</h3>
              <p className="text-[#999] leading-relaxed mb-6">
                〒150-0001
                <br />
                東京都渋谷区神宮前3-1-1
                <br />
                Minimal Building 1F
              </p>
              <p className="text-[#999]">
                表参道駅 A2出口より徒歩5分
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-light mb-6 tracking-wide">Hours</h3>
              <div className="space-y-3">
                {hours.map((h, i) => (
                  <div key={i} className="flex justify-between text-[#999]">
                    <span>{h.day}</span>
                    <span>{h.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#2C2C2C] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-xl tracking-[0.3em] font-light text-white">MINIMAL</span>
            <p className="text-sm text-[#666]">© 2024 Cafe Minimal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
