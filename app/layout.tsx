import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { db } from "@/lib/db";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth App",
  description: "App to create roles and authentications",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //const user = await db.user.fin
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
