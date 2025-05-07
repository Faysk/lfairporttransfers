import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://lfairporttransfers.co.uk"),
  title: "LF Airport Transfers | Executive Chauffeur Service in London",
  description:
    "Premium airport transfers and chauffeur service in London. Ride in luxury Mercedes V-Class, arrive in style. 24/7 service.",
  keywords: [
    "airport transfers",
    "London chauffeur",
    "executive cars",
    "luxury transport",
    "chauffeur London",
    "V-Class hire",
    "private airport taxi",
    "Gatwick transfer",
    "Heathrow chauffeur",
  ],
  icons: {
    icon: "/favicon.ico", // atualize quando tiver o real
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://lfairporttransfers.co.uk",
    title: "LF Airport Transfers | Executive Chauffeur Service in London",
    description:
      "Premium airport transfers and chauffeur service in London.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LF Airport Transfers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lf_transfers",
    creator: "@lf_transfers",
    title: "LF Airport Transfers",
    description: "Executive Chauffeur Service in London",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Viewport height fix para dispositivos móveis
              (function () {
                function setVh() {
                  const vh = window.innerHeight * 0.01;
                  document.documentElement.style.setProperty('--vh', vh + 'px');
                }
                setVh();
                window.addEventListener('resize', setVh);
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans bg-white text-gray-900 antialiased dark:bg-black dark:text-white`}
        style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
      >
        {children}
      </body>
    </html>
  )
}
