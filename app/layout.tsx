import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { twMerge } from 'tailwind-merge'
import LoadingScreen from '@/components/LoadingScreen'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dynasty | Łukasz Stokłosa',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={twMerge(dmSans.className, 'bg-background ')}>

{children}  </body>
    </html>
  )
}
