import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "The Trail Makers - Explore new routes in the Himalayas",
  description: "Join for unforgettable journeys with The Trail Makers, your ultimate destination for immersive trekking and hiking experiences. Discover breathtaking landscapes, explore challenging trails, and forge lasting memories in the great outdoors.",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
