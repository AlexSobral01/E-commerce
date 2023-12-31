import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

import NavBar from '@/components/NavBar'

const poppins = Poppins({ subsets: ['latin'], weight: ['200', '400', '500', '700'] })

export const metadata: Metadata = {
  title: 'E-commerce',
  description: 'My first E-commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
