import { Cormorant_Garamond, Inter } from "next/font/google";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Huz Point Tours & Travels | Heaven on Earth",
  description: "Explore Kashmir's Valleys • Journey to Mecca • Ziyarat to Karbala",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} bg-surface text-on-surface font-sans selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col`}>
        <TopNavBar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
