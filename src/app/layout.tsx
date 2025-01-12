import { ThemeProviderConfig } from "@/components/ThemeProviderConfig";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { MobileHeader } from "@/components/MobileHeader";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Huynh Dang Khoa",
  description: "Portfolio By NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-[300vh] bg-[#34353a] antialiased dark:bg-white`}
      >
        <ThemeProviderConfig
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MobileHeader />

          <main>{children}</main>

          <Toaster
            toastOptions={{
              // unstyled: true,
              classNames: {
                error: "bg-error-msg-bg border-error-msg-bg border text-white",
                success:
                  "bg-success-msg-bg border-success-msg-bg border text-white",
                warning:
                  " bg-warning-msg-bg border-warning-msg-bg border text-white",

                info: "bg-blue-400",
              },
            }}
          />
          <Footer />
        </ThemeProviderConfig>
      </body>
    </html>
  );
}
