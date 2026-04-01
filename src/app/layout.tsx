import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jayant Chandra | Portfolio",
  description: "Professional portfolio of Jayant Chandra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col bg-background text-foreground selection:bg-zinc-200 dark:selection:bg-zinc-800 antialiased`}>
        <Providers>
          <Navigation />
          <main className="flex-1 max-w-4xl mx-auto px-4 py-16 w-full">
            {children}
          </main>
          <footer className="border-t border-zinc-100 dark:border-zinc-900 py-12">
            <div className="max-w-4xl mx-auto px-4 text-sm text-zinc-500 text-center">
              &copy; {new Date().getFullYear()} Jayant Chandra. All rights reserved.
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
