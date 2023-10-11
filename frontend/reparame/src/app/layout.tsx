import Header from '@/components/header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/utils/globalStates/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reparame',
  description: 'Reparame app, software de networking entre usuarios y prestadores de servicios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers >
          <Header />
          <main className='flex items-center justify-center'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
