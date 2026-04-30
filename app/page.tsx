export default async function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary-100 to-amber-100 dark:from-primary-900/30 dark:to-amber-900/30 flex items-center justify-center mb-8">
          <span className="text-8xl">⚗️</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h1>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="p-6 mb-8 bg-gradient-to-r from-primary-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-primary-200 dark:border-gray-700">
          <p className="text-lg italic text-gray-700 dark:text-gray-300">
            "I'm a 29-year-old chemical engineer applying a systems approach to everything outside the plant:
            pursuing financial independence and engineering a life I actually designed."
          </p>
        </div>

        <p>
          This blog is the log — the analytical, unfiltered record of what's working, what isn't, and why.
        </p>

        <p>
          No name. No brand. Just the work.
        </p>

        <h2>The Systems Approach</h2>
        <p>
          Chemical engineering taught me to see the world as interconnected systems — inputs, outputs,
          feedback loops, and optimization. I apply that same analytical framework to personal finance,
          career development, and life design.
        </p>

        <h2>Financial Independence as an Engineering Problem</h2>
        <p>
          FIRE isn't about early retirement in the traditional sense. It's about designing a system
          where your assets generate enough passive income to cover your expenses, giving you the
          freedom to choose what you work on.
        </p>

        <p>
          As an engineer, I approach this with:
        </p>

        <ul>
          <li><strong>Mass & Energy Balances</strong>: Tracking income, expenses, savings rates</li>
          <li><strong>Process Optimization</strong>: Maximizing efficiency in spending and investing</li>
          <li><strong>Control Systems</strong>: Building feedback loops to stay on track</li>
          <li><strong>Risk Analysis</strong>: Evaluating investment strategies and career moves</li>
          <li><strong>Scale-up Principles</strong>: Growing side projects into sustainable income streams</li>
        </ul>

        <h2>What You'll Find Here</h2>
        <p>
          Raw data, experiments, failures, and occasional successes. This isn't financial advice —
          it's a process engineer's notebook documenting the attempt to design a better life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">⚗️ Engineering Mindset</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Applying chemical engineering principles to personal finance, career growth,
              and life optimization. Process flows, material balances, and system design.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">📊 Data-Driven Decisions</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Tracking everything. Analyzing what moves the needle. Abandoning what doesn't.
              No guru advice — just experiments and results.
            </p>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-r from-primary-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-primary-200 dark:border-gray-700 mt-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Interested in FIRE, engineering, or building things?
            I'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-amber-600 hover:from-primary-700 hover:to-amber-700 text-white font-medium rounded-lg transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}
