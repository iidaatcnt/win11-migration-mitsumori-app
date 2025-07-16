import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PCセットアップ見積もりシステム",
  description: "Windows10サポート終了で困っている中小企業様向け",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
