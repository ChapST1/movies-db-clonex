import type {Metadata} from "next";

import "./globals.css";

import {Poppins} from "next/font/google";

import {Navbar} from "@/components/navbar/navbar";
import {Sidebar} from "@/components/sidebar";

export const metadata: Metadata = {
  title: "movies-app",
  description: "Generated by appncy",
};

const poppins = Poppins({
  subsets: ["latin"],
  style: "normal",
  display: "swap",
  weight: ["300", "400", "500"],
});

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className={poppins.className} lang="en">
      <body className="w-full overflow-x-hidden bg-background">
        <Navbar />
        <main
          className={`*:transition-[margin_width] *:duration-500
        [&>*:nth-child(1)]:ml-[-100%]
         peer-checked:[&>*:nth-child(1)]:ml-[0%]
        
        peer-checked:[&>*:nth-child(2)]:ml-[250px]
        md:peer-checked:[&>*:nth-child(2)]:w-[calc(100vw-250px)]
        `}
        >
          <Sidebar />
          <section className="fixed top-16 h-[calc(100dvh-64px)] w-full overflow-auto px-2">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
