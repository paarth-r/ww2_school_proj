import type { Metadata } from "next";
import { Cinzel, Lora } from "next/font/google";
import "./globals.css";
import { museumTitle } from "@/data/exhibits";

const display = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: museumTitle,
  description:
    "A virtual museum exhibit on technological advances in World War II, with MLA-formatted sources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
