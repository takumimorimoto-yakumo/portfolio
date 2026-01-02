"use client";

import { motion } from "framer-motion";
import { SectionHeader, Button } from "@/components/ui";
import {
  staggerContainerVariants,
  staggerItemVariants,
} from "@/components/animations";

export default function Pricing() {
  const plans = [
    {
      name: "スターター",
      price: "2,980",
      description: "小規模チーム向け",
      features: [
        "ユーザー3名まで",
        "顧客管理（1,000件）",
        "商談管理",
        "基本レポート",
        "メールサポート",
      ],
      cta: "無料で試す",
      popular: false,
    },
    {
      name: "スタンダード",
      price: "5,980",
      description: "成長中のチーム向け",
      features: [
        "ユーザー10名まで",
        "顧客管理（10,000件）",
        "商談管理 + パイプライン",
        "AI予測機能",
        "詳細レポート",
        "API連携",
        "チャットサポート",
      ],
      cta: "無料で試す",
      popular: true,
    },
    {
      name: "プロ",
      price: "14,980",
      description: "大規模チーム向け",
      features: [
        "ユーザー無制限",
        "顧客管理（無制限）",
        "商談管理 + パイプライン",
        "AI予測機能（高精度）",
        "カスタムレポート",
        "全API連携",
        "専任サポート",
        "オンボーディング支援",
      ],
      cta: "お問い合わせ",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="シンプルな料金プラン"
          subtitle="初期費用0円。すべてのプランで14日間の無料トライアル付き"
        />

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={staggerItemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`bg-white rounded-2xl p-8 ${
                plan.popular
                  ? "ring-2 ring-blue-600 shadow-xl scale-105"
                  : "border border-gray-200 shadow-sm"
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4"
                >
                  人気
                </motion.div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  ¥{plan.price}
                </span>
                <span className="text-gray-500">/月（税抜）</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * featureIndex }}
                    className="flex items-start gap-3"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <Button
                href="#cta"
                variant={plan.popular ? "primary" : "outline"}
                fullWidth
                className={!plan.popular ? "bg-gray-100 hover:bg-gray-200" : ""}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 text-sm mt-8"
        >
          ※ すべてのプランでクレジットカード不要で無料トライアルを開始できます
        </motion.p>
      </div>
    </section>
  );
}
