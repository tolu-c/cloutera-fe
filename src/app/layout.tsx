import type { Metadata } from "next";
import { ReactNode } from "react";

import "./globals.css";
import { montserrat } from "@/app/fonts";
import { AppProvider } from "@/components/provider";

export const metadata: Metadata = {
  title: "Cloutera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <AppProvider>
          <div id="modal"></div>
          <div id="filter-modal"></div>
          <div id="sidebar"></div>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
