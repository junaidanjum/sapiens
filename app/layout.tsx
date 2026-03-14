import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import SponsorBanner from "@/components/sponsor-banner";

export const metadata: Metadata = {
  metadataBase: new URL("https://sapiens.website"),
  title: "sapiens",
  description:
    "A curated collection of unique individuals across the internet, giving everyone a chance to be seen, appreciated, and connected.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "sapiens",
    description:
      "A curated collection of unique individuals across the internet, giving everyone a chance to be seen, appreciated, and connected.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sapiens Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "sapiens",
    description:
      "A curated collection of unique individuals across the internet, giving everyone a chance to be seen, appreciated, and connected.",
    images: ["/og.png"],
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SponsorBanner />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
