import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIoT Professional Program | QuanVerse AIoT Mastery",
  description:
    "A premium AIoT professional program. Learn IoT architecture, sensor data engineering, MQTT, MongoDB, machine learning, deep learning, Edge AI, TinyML, and portfolio-ready smart systems.",
  keywords: [
    "AIoT course",
    "Artificial Intelligence of Things",
    "Edge AI",
    "TinyML",
    "IoT data engineering",
    "MQTT",
    "MongoDB IoT",
    "predictive maintenance",
    "anomaly detection",
    "smart systems"
  ]
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
