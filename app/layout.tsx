import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LogUI",
  description: "UI bits from https://humanlog.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
