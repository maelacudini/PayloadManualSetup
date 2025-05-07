import "./_style/globals.css";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/context/theme/ThemeContext";
import { BodyLayout } from "./_components/layouts/BodyLayout";
import { MainLayout } from "./_components/layouts/MainLayout";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js & Payload App Setup",
  description: "Next.js & Payload App Setup, with custom dark mode and next-intl.",
};

export default async function RootLayout({ children, }: Readonly<{
  children: ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <NextIntlClientProvider>
        <ThemeProvider>
          <BodyLayout suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
            <MainLayout>
              {children}
            </MainLayout>
          </BodyLayout>
        </ThemeProvider>
      </NextIntlClientProvider>
    </html>
  );
}
