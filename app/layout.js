import './globals.css'
import { CITY_DISPLAY, SITE_URL } from '../lib/config'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

export const metadata = {
  metadataBase: new URL(SITE_URL || 'https://rohanVillamentshennurroad.co.in'),
  title: 'Rohan Villaments Hennur | 4 BHK Luxury Villaments Hennur Road Bangalore',
  description: 'Rohan Villaments Hennur Road by Rohan Builders offers exclusive 4 BHK luxury Villaments in the heart of Hennur Road, North Bangalore with 20+ modern lifestyle amenities. Pre-Launch.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Rohan Villaments Hennur | 4 BHK Luxury Villaments Hennur Road Bangalore',
    description: 'Rohan Villaments Hennur Road by Rohan Builders offers exclusive 4 BHK luxury Villaments in the heart of Hennur Road, North Bangalore with 20+ modern lifestyle amenities. Pre-Launch.',
    url: SITE_URL || 'https://rohanVillamentshennurroad.co.in',
    siteName: 'Rohan Villaments Hennur',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rohan Villaments Hennur | 4 BHK Luxury Villaments Hennur Road Bangalore',
    description: 'Rohan Villaments Hennur Road by Rohan Builders offers exclusive 4 BHK luxury Villaments in the heart of Hennur Road, North Bangalore with 20+ modern lifestyle amenities. Pre-Launch.',
  },
  icons: {
    icon: '/favicon/favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Open+Sans:wght@400;600&family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className="font-sans text-dark antialiased">
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  )
}
