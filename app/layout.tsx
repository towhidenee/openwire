import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://openwire.today"),
  title: {
    default: "OpenWire.today | Independent News for a Moving World",
    template: "%s | OpenWire"
  },
  description: "OpenWire.today is a modern independent news platform covering world, politics, business, technology, culture, sport, video, lifestyle, and the environment.",
  openGraph: {
    siteName: "OpenWire",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    creator: "@openwiretoday"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {gaId ? (
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <Script id="ga">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        ) : null}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
