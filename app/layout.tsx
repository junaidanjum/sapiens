import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "sapiens",
  description:
    "A curated collection of unique individuals across the internet, giving everyone a chance to be seen, appreciated, and connected.",
  icons: {
    icon: "/favicon.ico", // Path inside 'public' folder
  },
  openGraph: {
    title: "sapiens",
    description:
      "A curated collection of unique individuals across the internet, giving everyone a chance to be seen, appreciated, and connected.",
    images: [
      {
        url: "/og.png", // Path inside 'public' folder
        width: 1200,
        height: 630,
        alt: "Sapiens Open Graph Image",
      },
    ],
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
