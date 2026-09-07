# 映画アプリ

React、TypeScript、Viteで作成した映画一覧アプリです。映画のタイトル・画像・あらすじを表示します。

## 使用技術

- React
- TypeScript
- Vite
- CSS

## セットアップ

Node.jsを用意し、プロジェクトのフォルダで実行します。

```bash
npm install
```

## 開発サーバーの起動

```bash
npm run dev
```

表示されたURL（通常は `http://localhost:5173`）をブラウザで開いてください。

## その他のコマンド

```bash
npm run build    # TypeScriptのチェックと本番用ビルド
npm run lint     # ESLintによるコードチェック
npm run preview  # ビルドしたアプリを確認
```

## 主なファイル

- `src/App.tsx`：映画データと画面表示を定義するメインコンポーネント
- `src/App.css`：Appコンポーネント用のスタイル
- `src/index.css`：アプリ全体に適用するスタイル
- `src/main.tsx`：Reactアプリのエントリーポイント

## 映画データの追加

映画データは `src/App.tsx` の `defaultMovieList` 配列に定義しています。

```ts
{
  id: 5,
  name: "映画のタイトル",
  image: "画像のURL",
  overview: "映画のあらすじ",
}
```

画像は外部URLを使用しているため、表示にはインターネット接続が必要です。
