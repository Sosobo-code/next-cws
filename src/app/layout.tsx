import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import NavBar from "@/components/NavBar";
import {ThemeProvider} from "next-themes";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <NavBar/>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
