export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Contact Me
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Let's talk about FIRE, engineering, or anything interesting
        </p>
      </div>

      <div className="mb-12">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
          <div className="text-4xl mb-4">📧</div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            For serious inquiries, collaborations, or detailed discussions
          </p>
          <a
            href="mailto:hello@engineeringfire.blog"
            className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
          >
            hello@engineeringfire.blog
          </a>
        </div>
      </div>

      <div className="p-8 bg-gradient-to-r from-primary-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-primary-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h2>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Select a topic</option>
              <option value="fire">FIRE / Financial Independence</option>
              <option value="engineering">Engineering / Tech</option>
              <option value="collaboration">Collaboration Opportunity</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="What would you like to discuss?"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-amber-600 hover:from-primary-700 hover:to-amber-700 text-white font-medium rounded-lg transition-all"
          >
            Send Message
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
          I typically respond within 24-48 hours. For urgent matters, please use email directly.
        </p>
      </div>

      <div className="mt-12 text-center text-gray-500 dark:text-gray-400">
        <p>Looking forward to connecting with you! 🔥</p>
      </div>
    </div>
  )
}
