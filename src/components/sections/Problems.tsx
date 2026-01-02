"use client";

import { motion } from "framer-motion";
import { SectionHeader, Card } from "@/components/ui";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/animations";

export default function Problems() {
  const problems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "顧客情報がバラバラ",
      description:
        "Excelやスプレッドシートに散在した顧客データ。誰が最新版か分からず、チーム連携もうまくいかない。",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "営業進捗が見えない",
      description:
        "商談の進捗状況が把握できず、マネージャーはいつも「あの案件どうなった？」と聞くことに。",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "ツールが高額で複雑",
      description:
        "大手CRMは機能が多すぎて使いこなせない。価格も高く、中小企業には手が出しにくい。",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="こんなお悩みありませんか？"
          subtitle="多くの企業が抱える営業・マーケティングの課題"
        />

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {problems.map((problem, index) => (
            <Card
              key={index}
              variant="default"
              animationVariants={staggerItemVariants}
              className="shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
