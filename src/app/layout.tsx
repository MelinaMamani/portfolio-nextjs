import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import I18nProvider from "../lib/I18nProvider";
import { cookies } from "next/headers";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Melina Mamaní — Portfolio",
  description:
    "Portfolio personal: Frontend Engineer · Next.js, TypeScript, TailwindCSS",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  themeColor: "#0f172a",
  openGraph: {
    title: "Melina Mamaní — Portfolio",
    description:
      "Portfolio personal: Frontend Engineer · Next.js, TypeScript, TailwindCSS",
    url: "https://melinamamani.dev",
    siteName: "Melina Mamaní",
    images: [{ url: "/favicon.ico", alt: "Melina Mamaní" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melina Mamaní — Portfolio",
    description:
      "Portfolio personal: Frontend Engineer · Next.js, TypeScript, TailwindCSS",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const cookieLocale = (cookieStore.get("locale")?.value ?? "") as string;
  const defaultLocale = cookieLocale === "es" ? "es" : "en";

  return (
    <html lang={defaultLocale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider defaultLocale={defaultLocale}>
          <Header />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
