import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Engineering Fire',
  description: 'An engineer\'s journey to Financial Independence, Retire Early (FIRE). Practical strategies for building wealth through tech careers, smart investing, and intentional living.',
  keywords: ['FIRE', 'financial independence', 'retire early', 'engineering', 'software engineering', 'investing', 'personal finance', 'wealth building', 'tech careers', 'side hustles'],
  authors: [{ name: 'Engineering Fire' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://engineeringfire.blog',
    title: 'Engineering Fire',
    description: 'An engineer\'s journey to Financial Independence, Retire Early (FIRE). Practical strategies for building wealth through tech careers, smart investing, and intentional living.',
    siteName: 'Engineering Fire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Fire',
    description: 'An engineer\'s journey to Financial Independence, Retire Early (FIRE). Practical strategies for building wealth through tech careers, smart investing, and intentional living.',
    creator: '@engineeringfireblog',
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