"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "無料トライアル期間はどのくらいですか？",
      answer:
        "すべてのプランで14日間の無料トライアルをご利用いただけます。クレジットカードの登録は不要で、期間終了後に自動課金されることはありません。",
    },
    {
      question: "いつでも解約できますか？",
      answer:
        "はい、いつでも解約可能です。解約手続きは管理画面から簡単に行えます。解約後も契約期間終了まではサービスをご利用いただけます。",
    },
    {
      question: "既存のデータを移行できますか？",
      answer:
        "はい、CSVファイルでのインポートに対応しています。また、スタンダードプラン以上では、専任スタッフがデータ移行をサポートいたします。",
    },
    {
      question: "セキュリティ対策は万全ですか？",
      answer:
        "はい、すべてのデータは暗号化されて保存され、SSL/TLS通信で保護されています。また、SOC2 Type IIの認証を取得しており、エンタープライズレベルのセキュリティを提供しています。",
    },
    {
      question: "導入サポートはありますか？",
      answer:
        "すべてのプランで導入時のオンラインサポートを提供しています。プロプランでは専任の担当者がつき、オンボーディングから運用まで一貫してサポートいたします。",
    },
    {
      question: "他のツールとの連携は可能ですか？",
      answer:
        "Gmail、Outlook、Slack、Zoom、Google Calendarなど、主要なビジネスツールとの連携に対応しています。また、APIを使用したカスタム連携も可能です。",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            よくある質問
          </h2>
          <p className="text-gray-600 text-lg">
            ご不明な点がございましたらお気軽にお問い合わせください
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
