"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const stats = [
  { number: "150+", label: "研究論文" },
  { number: "45", label: "特許取得" },
  { number: "200+", label: "導入企業" },
  { number: "99.7%", label: "精度達成" },
];

const services = [
  {
    icon: "🧠",
    title: "カスタムAI開発",
    description: "お客様の課題に最適化された独自のAIモデルを設計・開発。業界特化型のソリューションを提供します。",
  },
  {
    icon: "📊",
    title: "データ分析基盤",
    description: "大規模データの収集から分析、可視化までをワンストップで支援。意思決定を加速させます。",
  },
  {
    icon: "🔬",
    title: "R&Dパートナーシップ",
    description: "最先端の研究成果をビジネスに応用。共同研究から製品化まで、技術パートナーとして伴走します。",
  },
];

const techStack = [
  "PyTorch", "TensorFlow", "Transformers", "LangChain",
  "Kubernetes", "AWS", "GCP", "Azure",
];

const cases = [
  {
    company: "大手製造業A社",
    title: "製造ライン異常検知AI",
    result: "不良品率 70% 削減",
    description: "リアルタイム画像解析で製造ラインの異常を即座に検知。年間数億円のコスト削減を実現。",
  },
  {
    company: "金融機関B社",
    title: "不正検知システム",
    result: "検知精度 99.2%",
    description: "機械学習による不正取引の自動検知。従来システム比で誤検知を90%削減。",
  },
];

const team = [
  { name: "Dr. 田中 研一", role: "Chief Research Officer", bg: "元Google Brain研究員" },
  { name: "佐藤 美咲", role: "Lead ML Engineer", bg: "Ph.D. 東京大学" },
  { name: "山田 太郎", role: "Head of Engineering", bg: "元Amazon AI部門" },
];

export default function TechLabClient() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              TechLab
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</a>
            <a href="#cases" className="text-gray-400 hover:text-white transition-colors text-sm">Cases</a>
            <a href="#team" className="text-gray-400 hover:text-white transition-colors text-sm">Team</a>
            <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-purple-300">Now accepting new projects</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                AIで、未来を
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                エンジニアリングする
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-10 max-w-2xl">
              最先端の機械学習技術と、深い業界知見を組み合わせ、
              ビジネスを変革するAIソリューションを提供します。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                無料相談を予約
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 rounded-xl font-medium hover:bg-white/5 transition-colors"
              >
                サービスを見る
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative Grid */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 opacity-20 hidden lg:block">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              最先端のAI技術を、ビジネス価値に変換します
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/50 transition-colors group"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative z-10 py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="relative z-10 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cases</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              実際のプロジェクトで達成した成果
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/10 rounded-2xl"
              >
                <div className="text-sm text-purple-400 mb-2">{c.company}</div>
                <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm mb-4">
                  {c.result}
                </div>
                <p className="text-gray-400">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative z-10 py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              世界トップクラスの研究者・エンジニアが在籍
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full" />
                <h3 className="text-lg font-bold">{member.name}</h3>
                <div className="text-purple-400 text-sm mb-2">{member.role}</div>
                <div className="text-gray-500 text-sm">{member.bg}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative z-10 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 rounded-3xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AIで、次のステージへ
            </h2>
            <p className="text-gray-400 mb-8">
              まずは無料相談から。貴社の課題をお聞かせください。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
                資料請求
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-md" />
              <span className="text-sm text-gray-400">© 2024 TechLab Inc.</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
