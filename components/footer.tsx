export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Engineering Fire. All rights reserved.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Built with Next.js, Tailwind CSS, and ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}
