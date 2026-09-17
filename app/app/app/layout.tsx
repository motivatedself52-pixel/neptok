import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NepTok",
  description: "NepTok - Short videos and creator earnings"
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
