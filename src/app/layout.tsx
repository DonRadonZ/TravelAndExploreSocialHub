import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./ui/Heading/Header";
import "./globals.css"
import Sidebar from "./ui/Sidebar/sidebar";


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
      <body className={`${inter.className} flex flex-col bg-green-300 h-[100dvh]`}>
        <div className="border border-red-700">
        <Header/>
        
        <main className="flex-1">{children}</main>
        
        </div>
        </body>
    </html>
  );
}
