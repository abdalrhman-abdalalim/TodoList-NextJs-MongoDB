"use client";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import Nav from "@/components/Nav";
import { useErrorContext } from "../providers/error-provicer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isError = useErrorContext();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {!isError && <Nav />}
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
