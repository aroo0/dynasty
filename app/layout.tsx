import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { twMerge } from 'tailwind-merge'
import LoadingScreen from '@/components/LoadingScreen'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.example.com'),

  title: 'Dynasty | Łukasz Stokłosa',
  description: '',
  twitter: {
    title: "aroo.0_ Web Development and Service",
    description:
      "",
    images: ["/dynasty.jpg"],
  },
  openGraph: {
      type: "website",
      url: "https://www.example.com",
      title: "Dynasty | Łukasz Stokłosa",
      description: "",
      images: [{
        url: "/dynasty.jpg",
      }],
  }
  
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
