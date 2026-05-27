import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Satvik Sharma | AI & Software Engineer",
  description: "Aspiring Software and AI Engineer focused on full-stack development, edge AI systems, and performance-oriented applications.",
  openGraph: {
    title: "Satvik Sharma | AI & Software Engineer",
    description: "Aspiring Software and AI Engineer focused on full-stack development, edge AI systems, and performance-oriented applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth selection:bg-accent/30 selection:text-white">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <ScrollProgress />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
