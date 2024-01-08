import { Figtree, } from 'next/font/google'
import './globals.css'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['600', '800']
})

export const metadata = {
  title: 'Blog Preview Card',
  description: 'This is the blog card for Frontend mentor challenge',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.png" />
      </head>
      <body className={figtree.className}>{children}</body>
    </html>
  )
}
