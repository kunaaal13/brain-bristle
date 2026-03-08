import type { Metadata } from "next";
import { Josefin_Sans, Inter_Tight } from "next/font/google";
import "./globals.css";
import { siteMetadata } from "../content/data";
import Header from "../components/Header";
import Footer from "../components/Footer";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} ${interTight.variable} font-sans antialiased bg-off-white text-navy min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
