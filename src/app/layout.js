import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Give Discount',
  description: 'Find a wide selection of discounted Amazon products on Give Discount. Explore great deals on electronics, fashion, home goods, and more. Click to buy and save money while shopping through our affiliate links!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f8f8f8" />
        <meta name="description" content="Find a wide selection of discounted Amazon products on Give Discount. Explore great deals on electronics, fashion, home goods, and more. Click to buy and save money while shopping through our affiliate links!" />
        <meta name="keywords" content="discount Amazon products, deals, savings, affordable shopping, Amazon discounts, online shopping, best deals, exclusive offers, budget shopping, Give Discount" />
        <link rel="canonical" href="https://givediscount.netlify.app/" />

        <meta property="og:title" content="Give Discount - Discounted Amazon Products, Deals, and Savings" />
        <meta property="og:description" content="Find a wide selection of discounted Amazon products on Give Discount. Explore great deals on electronics, fashion, home goods, and more. Click to buy and save money while shopping through our affiliate links!" />
        <meta property="og:image" content="../Images/" />
        <meta property="og:url" content="https://givediscount.netlify.app/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Give Discount | Discounted Products, Deals, and Savings" />
        <meta name="twitter:description" content="Find a wide selection of discounted Amazon products on Give Discount. Explore great deals on electronics, fashion, home goods, and more. Click to buy and save money while shopping through our affiliate links!" />
        <meta name="twitter:image" content="./Images/give discount.png" />

        <meta name="robots" content="index, follow" />

<Script async src="https://www.googletagmanager.com/gtag/js?id=G-DVHHPHBBFC"></Script>
<Script>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments); }
  gtag('js', new Date());

  gtag('config', 'G-DVHHPHBBFC'); `}
</Script>
      </Head>
      <body suppressHydrationWarning={true} className={inter.className}>{children}</body>
    </html>
  )
}
