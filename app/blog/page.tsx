export default async function BlogPage() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Engineering Your FIRE Journey
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Practical guides, strategies, and insights for engineers pursuing Financial Independence, Retire Early.
        </p>
      </div>

      <div className="text-center py-16">
        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-100 to-amber-100 dark:from-primary-900/30 dark:to-amber-900/30 rounded-full flex items-center justify-center mb-8">
          <span className="text-6xl">🔥</span>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Building the Foundation
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          We're engineering the ultimate FIRE resource for tech professionals. 
          The first articles on maximizing tech income, smart investing, and 
          building wealth through engineering are coming soon.
        </p>
        
        <div className="max-w-md mx-auto p-8 bg-gradient-to-r from-primary-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-primary-200 dark:border-gray-700">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Get Early Access
          </h4>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Be the first to know when we launch our FIRE content series.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-primary-600 to-amber-600 hover:from-primary-700 hover:to-amber-700 text-white font-medium rounded-lg transition-all"
            >
              Notify Me at Launch
            </button>
          </form>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="text-3xl mb-4">💼</div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Career & Income</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Maximizing tech salaries, negotiating offers, career progression
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="text-3xl mb-4">📈</div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Investing & Wealth</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Stock options, RSUs, 401(k), index funds, real estate
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="text-3xl mb-4">⚡</div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Side Hustles</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Building profitable projects, freelancing, consulting
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}