import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "sapiens",
  description:
    "A curated collection of unique individuals across the internet, giving everyone a chance to be seen, appreciated, and connected.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.style.fontFamily}>{children}</body>
    </html>
  );
}
