import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import Navigation from "@/components/navigation";
import InvestButton from "@/components/invest-button";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Project Kankroli - Digital Transformation for India\'s Next Billion',
  description: 'Join us in transforming India\'s tier-4 cities through digital innovation and sustainable growth.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <InvestButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
