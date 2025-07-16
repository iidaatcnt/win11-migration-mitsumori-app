import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "PCセットアップ見積もりシステム | 業者の半額で、プロの品質を。",
  description: "Windows10サポート終了で困っている中小企業様向け。地元千葉県のIT企業が、対面サポートで安心のPCセットアップを提供します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
