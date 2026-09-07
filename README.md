# 映画アプリ

React、TypeScript、Viteで作成した映画一覧アプリです。映画のタイトル・画像・あらすじを表示し、入力したキーワードで映画を絞り込めます。

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

## TMDB APIの設定

映画情報の取得にはTMDB APIを使用します。プロジェクト直下（`package.json` と同じ場所）に `.env` ファイルを作成し、アクセストークンを設定してください。

```env
VITE_TMDB_ACCESS_TOKEN=あなたのTMDBアクセストークン
```

`.env` は `.gitignore` に登録済みです。アクセストークンをGitHubなどに公開しないでください。

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

## 現在のAPI処理

`src/App.tsx` の `fetchMovieList` が、画面の初回表示時にTMDBの人気映画一覧を取得します。
取得結果は現在ブラウザの開発者ツールのコンソールに表示しています。画面には、確認用に定義した `defaultMovieList` を表示しています。

## 検索

検索欄に文字を入力すると、`defaultMovieList` の映画タイトルを対象に絞り込みます。

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
