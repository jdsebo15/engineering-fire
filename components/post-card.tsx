import Link from 'next/link'
import { Calendar, Clock, Tag } from 'lucide-react'
import { Post } from '@/lib/posts'
import { format } from 'date-fns'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group relative bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Calendar size={16} className="mr-1" />
              {format(new Date(post.date), 'MMM dd, yyyy')}
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <Clock size={16} className="mr-1" />
              {post.readingTime || '5 min read'}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {post.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {post.description}
          </p>
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                >
                  <Tag size={12} className="mr-1" />
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  +{post.tags.length - 3} more
                </span>
              )}
            </div>
          )}
          
          <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:underline">
              Read article →
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}