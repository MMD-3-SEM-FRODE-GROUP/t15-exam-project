import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Tilføj framer-motion
import { AnimatePresence } from "framer-motion";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Foo Fest",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.48/build/spline-viewer.js" strategy="beforeInteractive" />
        <Nav />
        <AnimatePresence mode="wait">
          <main>{children}</main>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
