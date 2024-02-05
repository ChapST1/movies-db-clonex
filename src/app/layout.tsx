import type {Metadata} from "next";

import {ThemeProvider} from "@/components/theme-provider";
import "./globals.css";
import {Navbar} from "@/components/navbar";

export const metadata: Metadata = {
  title: "movies-app",
  description: "Generated by appncy",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
