import type { Metadata } from "next";
import { Jersey_25 } from "next/font/google";
import "./globals.css";

const jersey = Jersey_25({
  subsets: ["latin"],
  weight: "400",
  display: 'swap',
  variable: '--font-jersey',
})

export const metadata: Metadata = {
  title: "Arcade Zone",
  description: "This is a game that you have to discover the round's random number",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={jersey.className}>{children}</body>
    </html>
  );
}
