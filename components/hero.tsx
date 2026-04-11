export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 via-primary-700 to-amber-600 p-8 md:p-12">
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Engineering Fire
        </h1>
        <p className="text-xl text-primary-100 mb-8 max-w-2xl">
          An engineer's journey to Financial Independence, Retire Early (FIRE). 
          Building wealth through tech careers, smart investing, and intentional living.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#subscribe"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-gray-100 transition-colors"
          >
            Get Early Access
          </a>
          <a
            href="#about"
            className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
          >
            Learn About FIRE
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-32 translate-x-32" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-full translate-y-48 -translate-x-48" />
      
      {/* FIRE concept badges */}
      <div className="mt-12 flex flex-wrap gap-3">
        {['Financial Independence', 'Retire Early', 'Tech Salaries', 'Investing', 'Side Hustles', 'Wealth Building', 'Career Growth', 'Intentional Living'].map((concept) => (
          <span
            key={concept}
            className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white border border-white/30"
          >
            {concept}
          </span>
        ))}
      </div>
    </div>
  )
}