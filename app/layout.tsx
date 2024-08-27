import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/header";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SDU Housing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={mulish.className + "dark:bg-dark-bg bg-light-bg"}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
