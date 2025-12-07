import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import I18nProvider from "@/lib/I18nProvider";
import { cookies } from "next/headers";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport = {
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://melina-mamani.netlify.app"),
  title: "Melina Mamaní — Portfolio",
  description:
    "Portfolio personal: Frontend Engineer · Next.js, TypeScript, TailwindCSS",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Melina Mamaní — Portfolio",
    description:
      "Portfolio personal: Frontend Engineer · Next.js, TypeScript, TailwindCSS",
    url: "/",
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
  const locale = cookieLocale === "es" ? "es" : "en";

  return (
    <html lang={locale} className={poppins.className}>
      <body className="antialiased">
        <I18nProvider locale={locale}>
          <Header />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
