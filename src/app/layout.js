import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import localFont from "next/font/local";

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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
