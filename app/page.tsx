import { getPosts } from '@/lib/posts'
import { PostCard } from '@/components/post-card'
import { Hero } from '@/components/hero'

export default async function Home() {
  const posts = await getPosts()

  return (
    <>
      <Hero />
      
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Latest Posts
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 6).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        {posts.length > 6 && (
          <div className="mt-12 text-center">
            <a
              href="/blog"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 transition-colors"
            >
              View All Posts
            </a>
          </div>
        )}
      </div>

      <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          About Engineering Fire
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          This blog explores the intersection of software engineering, system design, and scalable architecture. 
          From deep technical dives to practical guides on building robust systems, we cover the art and science 
          of engineering in the modern world.
        </p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">100+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Articles</div>
          </div>
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">10K+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Readers</div>
          </div>
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">5+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Years</div>
          </div>
          <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">50+</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Projects</div>
          </div>
        </div>
      </div>
    </>
  )
}