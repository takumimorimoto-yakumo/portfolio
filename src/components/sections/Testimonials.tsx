"use client";

import { motion } from "framer-motion";
import { SectionHeader, Card } from "@/components/ui";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/animations";

export default function Testimonials() {
  const testimonials = [
    {
      name: "田中 健太",
      role: "営業部長",
      company: "株式会社テックソリューションズ",
      content:
        "導入後3ヶ月で商談成約率が25%向上しました。AIによる予測機能が特に重宝しています。今まで使っていたツールの1/3のコストで、機能は十分以上です。",
      avatar: "TK",
    },
    {
      name: "山田 美咲",
      role: "マーケティング責任者",
      company: "グロースカンパニー株式会社",
      content:
        "UIが直感的で、チームメンバー全員がすぐに使いこなせるようになりました。サポートも手厚く、導入時の不安もすぐに解消されました。",
      avatar: "YM",
    },
    {
      name: "佐藤 大輝",
      role: "代表取締役",
      company: "スタートアップベンチャー株式会社",
      content:
        "スタートアップにとって価格は重要。SalesFlowは必要な機能を手頃な価格で提供してくれるので、成長フェーズでも無理なく使い続けられます。",
      avatar: "SD",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="お客様の声"
          subtitle="SalesFlowを導入いただいたお客様からの声をご紹介"
        />

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              variant="default"
              animationVariants={staggerItemVariants}
              className="shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg"
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
