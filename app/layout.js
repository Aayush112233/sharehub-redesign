"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/SideBar";
import NavBar from "@/components/Navbar";
import PageWrapper from "@/components/LayoutWrappper/PageWrapper";
import MarginWidthWrapper from "@/components/LayoutWrappper/MarginWrapper";
import { useState } from "react";
import StockMarquee from "@/components/StockMarquee";
import Footer from "@/components/Footer";
import Theme from "@/reusables/Theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <html lang="en">
      <body className={`${inter.className} w-[100vw] overflow-x-hidden`}>
        <Theme>
          <div className="flex w-full">
            <Sidebar setIsExpanded={setIsExpanded} />
            <main className="flex-1 w-full">
              <MarginWidthWrapper isExpanded={isExpanded}>
                {" "}
                <NavBar />
                <PageWrapper> {children}</PageWrapper>
                <Footer />
              </MarginWidthWrapper>
            </main>
          </div>
        </Theme>
      </body>
    </html>
  );
}
