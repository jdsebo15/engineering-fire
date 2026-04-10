import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Engineering Fire',
  description: 'A technical blog exploring software engineering, systems thinking, and building robust, scalable systems.',
  keywords: ['engineering', 'software', 'development', 'technology', 'blog', 'system design'],
  authors: [{ name: 'Engineering Fire' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://engineering-fire.blog',
    title: 'Engineering Fire',
    description: 'A technical blog exploring software engineering, systems thinking, and building robust, scalable systems.',
    siteName: 'Engineering Fire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Fire',
    description: 'A technical blog exploring software engineering, systems thinking, and building robust, scalable systems.',
    creator: '@engineeringfire',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
            <Header />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}