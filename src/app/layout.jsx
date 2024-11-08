import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'

import '@/styles/tailwind.css'
import '@/styles/global.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: '会员计划 | 动手实践人工智能 - aibydoing.com',
  description:
    '一本将机器学习原理和实践相结合的书籍，通过动手实践的方式，让你更好地理解人工智能。购买会员计划，让你学懂、吃透人工智能。',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
      )}
    >
      <head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700&display=swap"
        />
      </head>
      <body className="flex min-h-full flex-col">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  )
}
