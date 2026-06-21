import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuanVerse AIoT Mastery | Edge AI, TinyML & Smart Systems",
  description:
    "A premium AIoT course landing page for Artificial Intelligence of Things, Edge AI, TinyML, IoT data engineering, machine learning, and smart systems."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
