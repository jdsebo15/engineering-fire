import { getPosts } from '@/lib/posts'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

export default async function BlogPage() {
  const posts = await getPosts()

  if (posts.length === 0) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Posts coming soon.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Posts on FIRE, engineering, and building a life intentionally.
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div className="flex items-center space-x-4 mb-2 md:mb-0">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar size={16} className="mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Clock size={16} className="mr-1" />
                  {post.readingTime || '3 min read'}
                </div>
              </div>
            </div>

            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                {post.title}
              </h2>
            </Link>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {post.description}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
            >
              Read post →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
