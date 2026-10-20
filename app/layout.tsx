import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";

const inter = Inter({ subsets: ["latin"] });
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Yashasvi Shukla | Full-Stack Engineer",
  description:
    "Full-Stack Engineer focused on backend systems and applied AI. Portfolio and projects in React, Node.js, FastAPI and ML.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${plusJakarta.variable}`}>{children}</body>
    </html>
  );
}
