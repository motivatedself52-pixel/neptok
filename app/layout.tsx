import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NepTok",
  description: "Short video sharing and monetization platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
