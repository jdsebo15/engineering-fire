export default async function Home() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary-100 to-amber-100 dark:from-primary-900/30 dark:to-amber-900/30 flex items-center justify-center mb-8">
          <span className="text-8xl">👨‍💻</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Engineer on the path to Financial Independence, Retire Early (FIRE)
        </p>
      </div>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          Hello! I'm an engineer passionate about building things—both in code and in life. 
          This site documents my journey toward Financial Independence, Retire Early (FIRE) 
          while working in the tech industry.
        </p>
        
        <h2>My Engineering Journey</h2>
        <p>
          With over a decade in software engineering, I've worked on everything from 
          startup MVPs to enterprise-scale systems. My expertise spans full-stack development, 
          system architecture, and team leadership.
        </p>
        
        <h2>The FIRE Path</h2>
        <p>
          Like many engineers, I discovered the FIRE movement and realized our skills 
          give us unique advantages in the pursuit of financial independence. High tech 
          salaries, stock options, remote work opportunities, and the ability to build 
          profitable side projects all accelerate the journey.
        </p>
        
        <h2>What I Write About</h2>
        <ul>
          <li><strong>Maximizing Tech Income</strong>: Salary negotiation, career progression, remote work optimization</li>
          <li><strong>Smart Investing for Engineers</strong>: Stock options, RSUs, 401(k) strategies, index funds</li>
          <li><strong>Engineering Side Hustles</strong>: Building profitable projects, freelancing, consulting</li>
          <li><strong>Wealth Building Strategies</strong>: FIRE calculations, savings rates, portfolio construction</li>
          <li><strong>Intentional Living</strong>: Designing a life that aligns with your values</li>
        </ul>
        
        <h2>Current Focus</h2>
        <p>
          I'm currently focused on building multiple income streams while optimizing 
          my investment portfolio. The goal is reaching financial independence within 
          the next 5-7 years while continuing to work on projects I'm passionate about.
        </p>
        
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