import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FSM",
  description: "v1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ height: "100vh", padding: '50px', backgroundColor: 'white' }}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
