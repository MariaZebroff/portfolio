import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marian — Front-end developer & web designer | Vernon, BC",
  description:
    "Personal portfolio of Marian, a freelance front-end developer and web designer based in Vernon, BC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full font-sans text-ink">{children}</body>
    </html>
  );
}
