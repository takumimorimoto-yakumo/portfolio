"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-4 left-4 right-4 z-50 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/50 shadow-lg shadow-gray-900/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-14">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-blue-600 cursor-pointer">
              SalesFlow
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              特徴
            </a>
            <a href="#functions" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              機能
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              料金
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              ログイン
            </a>
            <a
              href="#cta"
              className="bg-orange-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors cursor-pointer shadow-md shadow-orange-500/25"
            >
              無料で試す
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200/50"
          >
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                特徴
              </a>
              <a href="#functions" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                機能
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                料金
              </a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                FAQ
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 cursor-pointer">
                ログイン
              </a>
              <a
                href="#cta"
                className="bg-orange-500 text-white px-5 py-2 rounded-lg font-medium text-center cursor-pointer hover:bg-orange-600 transition-colors"
              >
                無料で試す
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
