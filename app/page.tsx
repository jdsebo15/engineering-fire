import { Hero } from '@/components/hero'

export default async function Home() {
  return (
    <>
      <Hero />
      
      <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          About Engineering Fire
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Engineering Fire is an engineer's journey to Financial Independence, Retire Early (FIRE). 
          We explore practical strategies for building wealth through tech careers, smart investing, 
          side hustles, and intentional living.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">🚀 The FIRE Path for Engineers</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Leverage your engineering skills to accelerate wealth building. 
              From maximizing tech salaries to building profitable side projects, 
              we focus on strategies that work for technical professionals.
            </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">💰 Smart Investing for Tech Pros</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Data-driven investment strategies, stock options, RSUs, 401(k) optimization, 
              and building a portfolio that grows while you code.
            </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">💼 Career Acceleration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Negotiating tech salaries, climbing the engineering ladder, 
              remote work optimization, and building skills that pay dividends.
            </p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">⚡ Engineering Side Hustles</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Building profitable side projects, freelancing, consulting, 
              and creating multiple income streams using your technical skills.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Coming Soon: First Posts</h3>
          <p className="text-gray-600 dark:text-gray-300">
            The first articles on engineering your path to FIRE are in development. 
            Subscribe to get notified when we launch our content series.
          </p>
        </div>
      </div>
    </>
  )
}