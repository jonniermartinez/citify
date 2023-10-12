import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/nav'
import Script from 'next/script'
import { useLocale, NextIntlClientProvider } from "next-intl"
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Citify',
  description: 'Generador de citas APA',
}

interface Props {
  params: { locale: string },
  children: React.ReactNode,
}

export default async function RootLayout({ children, params }: Props) {

  // Translation 
  const locale = useLocale();
  if (params.locale !== locale) {
    notFound();
  }
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Script async id='googleAnalitics' src="https://www.googletagmanager.com/gtag/js?id=G-49CWPRN0GK" />
        <Script id='googleAnaliticsScript'>
          {
            `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-49CWPRN0GK');`
          }
        </Script>
        <div className='flex flex-col justify-between'>
          <NextIntlClientProvider
            locale={locale}
            messages={messages}
          >
            <Nav></Nav>
            <main className='pattern-boxes pattern-gray-300 pattern-bg-white pattern-size-8 pattern-opacity-10 w-full mb-40'>
              {children}
            </main>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  )
}
