import { getPostBySlug, getAllPostSlugs } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { Calendar, Clock, Tag } from 'lucide-react'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs()
  return posts
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto">
      <div className="mb-8">
        <Link 
          href="/blog"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-6"
        >
          ← Back to all posts
        </Link>
      </div>
      
      <header className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
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
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300"
              >
                <Tag size={12} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {post.title}
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {post.description}
        </p>
      </header>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="p-6 mb-8 bg-gradient-to-r from-primary-50 to-amber-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-primary-200 dark:border-gray-700">
          <p className="text-lg text-gray-700 dark:text-gray-300 italic">
            This is the first post on Engineering Fire. It's an honest introduction to why this blog exists and who it's for.
          </p>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-800 dark:text-gray-200">
          <div className="whitespace-pre-line">
            {post.content}
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-between items-center">
            <Link 
              href="/blog"
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
            >
              ← Back to all posts
            </Link>
            
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Questions or thoughts? <a 
                href="/contact" 
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}