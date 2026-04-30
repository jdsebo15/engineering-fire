export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Engineering Fire. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
              Built with Next.js, Tailwind CSS, and ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
