import "./globals.css";

import { Inter, Fira_Code } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${firaCode.variable} ${inter.variable}`}>
      <head />
      <body>{children}</body>
    </html>
  );
}
