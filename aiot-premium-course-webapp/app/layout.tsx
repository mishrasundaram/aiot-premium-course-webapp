import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIoT: Edge AI, TinyML & Smart Systems",
  description:
    "A premium AIoT course landing page for Artificial Intelligence of Things, Edge AI, TinyML, IoT data engineering, and smart systems.",
  keywords: [
    "AIoT",
    "Artificial Intelligence of Things",
    "Edge AI",
    "TinyML",
    "IoT",
    "Smart Systems",
    "Machine Learning for IoT"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
