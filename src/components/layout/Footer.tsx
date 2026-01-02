export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-bold text-white">
              SalesFlow
            </a>
            <p className="mt-4 text-gray-400 max-w-md">
              AIを活用した次世代の営業・マーケティング支援ツール。
              顧客管理から営業予測まで、すべてを一元管理。
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">プロダクト</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  特徴
                </a>
              </li>
              <li>
                <a href="#functions" className="hover:text-white transition-colors">
                  機能
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  料金
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  導入事例
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">サポート</h3>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  よくある質問
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ヘルプセンター
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API ドキュメント
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 SalesFlow Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              プライバシーポリシー
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              利用規約
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              特定商取引法に基づく表記
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
