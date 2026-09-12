# 映画アプリ

TMDB API から映画情報を取得して表示する、React・TypeScript・Vite 製の映画検索アプリです。人気映画の一覧、タイトル検索、映画詳細の表示に対応しています。

## 主な機能

- 人気映画の一覧表示
- 映画タイトルによる検索
- 映画の詳細表示（あらすじ、ジャンル、上映時間、評価、監督、出演者）

## 使用技術

- React
- TypeScript
- Vite
- React Router
- TMDB API
- CSS

## セットアップ

Node.js を用意したうえで、プロジェクトのフォルダで依存関係をインストールします。

```bash
npm install
```

## TMDB API の設定

映画情報の取得には [TMDB API](https://www.themoviedb.org/documentation/api) を使用します。プロジェクト直下に `.env` ファイルを作成し、TMDB で発行した API Read Access Token を設定してください。

```env
VITE_TMDB_ACCESS_TOKEN=あなたのTMDBアクセストークン
```

`.env` は Git 管理の対象外です。アクセストークンを GitHub などへ公開しないでください。値を変更した場合は、開発サーバーを再起動する必要があります。

## 開発サーバーの起動

```bash
npm run dev
```

表示された URL（通常は `http://localhost:5173`）をブラウザで開いてください。

映画データとポスター画像は TMDB から取得するため、利用にはインターネット接続が必要です。

## その他のコマンド

```bash
npm run build    # TypeScript のチェックと本番用ビルド
npm run lint     # ESLint によるコードチェック
npm run preview  # ビルドしたアプリを確認
```

## 主なファイル

- `src/App.tsx`：映画一覧と検索画面
- `src/MovieCard.tsx`：映画カード
- `src/MovieDetail.tsx`：映画詳細画面
- `src/main.tsx`：ルーティングとアプリのエントリーポイント
