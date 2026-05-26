import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { fetchCV } from "@/lib/cv";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchCV();
  return {
    title: data.basics.name,
    description: data.basics.label,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
