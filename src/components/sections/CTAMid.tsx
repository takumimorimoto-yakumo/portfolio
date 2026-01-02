export default function CTAMid() {
  return (
    <section className="py-12 md:py-16 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-blue-600 font-medium mb-2">まずは無料でお試し</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          14日間、すべての機能を無料で体験
        </h2>
        <p className="text-gray-600 mb-6">
          クレジットカード不要。3分で登録完了。
        </p>
        <a
          href="#cta"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
        >
          無料トライアルを始める
        </a>
      </div>
    </section>
  );
}
