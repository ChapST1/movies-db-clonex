import type {Metadata} from "next";

import "./globals.css";

import {Poppins} from "next/font/google";

import {Navbar} from "@/components/navbar/navbar";
import {Sidebar} from "@/components/sidebar";
import {Toaster} from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "movies-app",
  description: "Generated by appncy",
};

const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  display: "swap",
  weight: ["300", "400", "500", "200"],
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className={poppins.className} lang="en">
      <body className="w-full overflow-x-hidden bg-background">
        <Navbar />
        <main className="grid w-full grid-cols-1 md:grid-cols-[200px,1fr]">
          <Sidebar className="hidden md:flex" />
          <section className=" relative min-w-full  px-3  md:p-0 md:pr-2">{children}</section>
        </main>

        <Toaster />
      </body>
    </html>
  );
}
