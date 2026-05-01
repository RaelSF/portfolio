import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'sonner';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rafael S. Figueiredo — Desenvolvedor Full-Stack",
  description: "Portfólio de Rafael S. Figueiredo. Desenvolvedor Full-Stack especializado em React, Node.js e soluções digitais de alta performance.",
  keywords: ["desenvolvedor", "full-stack", "react", "node.js", "portfólio", "rafael figueiredo"],
  authors: [{ name: "Rafael S. Figueiredo" }],
  openGraph: {
    title: "Rafael S. Figueiredo — Desenvolvedor Full-Stack",
    description: "Portfólio de Rafael S. Figueiredo. Desenvolvedor Full-Stack especializado em React, Node.js e soluções digitais de alta performance.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael S. Figueiredo — Desenvolvedor Full-Stack",
    description: "Portfólio de Rafael S. Figueiredo. Desenvolvedor Full-Stack especializado em React, Node.js e soluções digitais de alta performance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased noise-overlay`}
      >
        {children}
        <Toaster position="top-right" richColors theme="dark" />
      </body>
    </html>
  );
}
