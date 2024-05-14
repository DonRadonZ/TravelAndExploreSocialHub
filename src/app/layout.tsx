import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Heading from "./ui/Heading/heading";
import "./globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel and Explore SocialHub",
  description: "Website for who want to travel and explore the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="border border-red-700">
        <header>Header</header>
        <main>{children}</main>
        <footer>Footer</footer>
        </div>
        </body>
    </html>
  );
}
