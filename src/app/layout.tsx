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
      <body className={`${inter.className} flex flex-col bg-green-300 min-h-screen`}>
        
        <Header/>
        
        <div className="flex px-8 py-12 items-center">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
          </div>
        
        
        </body>
    </html>
  );
}
