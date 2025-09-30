import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import localFont from "next/font/local";
import Script from "next/script";

import "./globals.css";

const introRust = localFont({
  src: ".//fonts/IntroRust-Base.otf",
});

const instrumentSans = localFont({
  src: [
    {
      path: ".//fonts/InstrumentSans.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: ".//fonts/InstrumentSans.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: ".//fonts/InstrumentSans.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata = {
  title: "Premium Dog Grooming Chicago | Good Boys Dog Grooming",
  description:
    "Luxury dog grooming salon in Chicago servicing canines of all shapes and sizes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${introRust.variable} ${instrumentSans.variable}`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SG8GF3HFBL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SG8GF3HFBL');
          `}
        </Script>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
