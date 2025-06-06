import "@/styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lfairporttransfers.co.uk"),
  title: {
    default: "LF Airport Transfers | Executive Chauffeur Service in London",
    template: "%s | LF Airport Transfers",
  },
  description:
    "Premium chauffeur and airport transfer service in London. Ride in luxury, arrive in style. Book Mercedes EQS, V-Class or E-Class 24/7.",
  keywords: [
    "airport transfers",
    "London chauffeur",
    "executive chauffeur",
    "Mercedes EQS hire",
    "luxury transport UK",
    "V-Class airport taxi",
    "private driver London",
    "chauffeur to Heathrow",
    "chauffeur to Gatwick",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://lfairporttransfers.co.uk",
    title: "LF Airport Transfers | Executive Chauffeur Service in London",
    description: "Book your luxury Mercedes with professional chauffeurs in London.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LF Airport Transfers - Luxury Chauffeur",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                const setVh = () => {
                  const vh = window.innerHeight * 0.01;
                  document.documentElement.style.setProperty('--vh', \`\${vh}px\`);
                };
                window.addEventListener('resize', setVh);
                setVh();
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white`}
        style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
