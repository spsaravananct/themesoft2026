import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Themesoft - Artificial Intelligence & Technology Solutions",
  description: "Moving a Leap to the forefront of technological advancements. AI, Cybersecurity, Cloud Services, Software Consulting, and Workforce Solutions.",
  keywords: ["AI", "Artificial Intelligence", "Cybersecurity", "Cloud Services", "Software Consulting", "Workforce Solutions"],
  authors: [{ name: "Themesoft" }],
  openGraph: {
    title: "Themesoft - Artificial Intelligence & Technology Solutions",
    description: "Moving a Leap to the forefront of technological advancements.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
