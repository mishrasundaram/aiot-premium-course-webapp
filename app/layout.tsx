import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuanVerse AIoT Mastery",
  description:
    "Premium AIoT learning experience covering IoT architecture, sensor data engineering, machine learning, Edge AI, TinyML, and intelligent connected systems."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
