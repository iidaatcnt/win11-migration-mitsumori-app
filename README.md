# Windows 11 移行支援 見積もりアプリ

## 概要

このアプリケーションは、Windows 11への移行を検討している企業向けに、PCのセットアップやデータ移行にかかる費用の概算を見積もるためのツールです。

## 主な機能

*   **PCセットアップ見積もり:**
    *   PCの台数に応じた基本料金の計算
    *   データ移行、パスワード管理ツール導入、Google Workspace設定、メモリ増設などのオプション選択
    *   選択したオプションに応じた追加料金の計算
    *   消費税を含めた合計金額の自動算出
*   **見積もり内容のPDF出力:**
    *   会社名、担当者名、連絡先を入力
    *   入力された情報と見積もり内容を記載したPDFを生成・ダウンロード

## 使用技術

*   **フレームワーク:** Next.js (React)
*   **UIライブラリ:** Tailwind CSS
*   **コンポーネント:**
    *   Swiper (画像スライダー)
    *   Lucide React (アイコン)
*   **PDF生成:**
    *   html2canvas
    *   jsPDF

## セットアップ手順

1.  **リポジトリのクローン:**
    ```bash
    git clone https://github.com/iidaatcnt/win11-migration-mitsumori-app.git
    ```
2.  **ディレクトリの移動:**
    ```bash
    cd win11-migration-mitsumori-app
    ```
3.  **依存関係のインストール:**
    ```bash
    npm install
    ```
4.  **開発サーバーの起動:**
    ```bash
    npm run dev
    ```
5.  ブラウザで `http://localhost:3000` を開きます。

## ディレクトリ構成

```
.
├── public/ # 静的ファイル (画像など)
├── src/
│   ├── app/ # Next.jsのApp Router
│   │   └── page.tsx # メインページ
│   ├── components/ # Reactコンポーネント
│   │   ├── PCSetupEstimator.tsx # 見積もり機能のメインコンポーネント
│   │   ├── SwiperSlider.tsx # 画像スライダー
│   │   ├── ... (その他UIコンポーネント)
│   └── types/ # 型定義
└── ... (設定ファイルなど)
```