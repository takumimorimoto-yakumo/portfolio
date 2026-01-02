import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yakumo.dev"),
  title: "Yakumo Showcase | Portfolio",
  description:
    "LP・ウェブサイト・ウェブアプリの制作実績をご紹介。モダンなデザインと高品質な開発をお届けします。",
  keywords: [
    "ポートフォリオ",
    "LP制作",
    "ウェブサイト",
    "ウェブアプリ",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Yakumo" }],
  openGraph: {
    title: "Yakumo Showcase | Portfolio",
    description: "LP・ウェブサイト・ウェブアプリの制作実績",
    url: "https://yakumo.dev",
    siteName: "Yakumo Showcase",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yakumo Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yakumo Showcase | Portfolio",
    description: "LP・ウェブサイト・ウェブアプリの制作実績",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
