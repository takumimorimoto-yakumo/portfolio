"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full mb-6"
            >
              AI搭載の次世代CRM
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
            >
              営業の「勘」を
              <br />
              <span className="text-blue-600">データ</span>に変える
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              SalesFlowは、顧客管理・商談管理・営業予測を
              AIでサポートする次世代ツール。
              <br className="hidden md:block" />
              直感的な操作で、誰でもすぐに使い始められます。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#cta"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                今すぐ無料で始める
              </motion.a>
              <motion.a
                href="#functions"
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-center hover:bg-gray-50 transition-colors cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                機能を見る
              </motion.a>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm text-gray-500 mt-4"
            >
              クレジットカード不要・いつでもキャンセル可能
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-2 md:p-3 overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/hero-image.png"
                alt="SalesFlow CRMダッシュボード"
                width={1408}
                height={768}
                className="rounded-xl w-full h-auto"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium"
            >
              導入社数 1,000社+
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
