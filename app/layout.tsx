import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/header";
import { QueryProvider } from "@/provider/query-provider";

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
          <QueryProvider>
            <Header />
            <main>{children}</main>
          </QueryProvider>
      </body>
    </html>
  );
}
