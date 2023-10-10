import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/nav'
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Citify',
  description: 'Generador de citas APA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Script async id='googleAnalitics' src="https://www.googletagmanager.com/gtag/js?id=G-49CWPRN0GK" />
        <Script id='googleAnaliticsScript'>
          {
            `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-49CWPRN0GK');`
          }
        </Script>
        <div className='flex flex-col justify-between'>

          <Nav></Nav>
          <main className='pattern-boxes pattern-gray-300 pattern-bg-white 
  pattern-size-8 pattern-opacity-10 w-full mb-40'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
