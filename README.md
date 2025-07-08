# MCP Example TypeScript

このプロジェクトは「[MCPで始めるAIエージェント構築 基本ガイド](https://akiyamas.booth.pm/items/6938747)」のサンプルコードをTypeScriptで実装したものです。MCP（Model Context Protocol）の基本概念を理解し、実際に動作するサンプルコードを通じて学習できるように構成されています。

## 概要

MCP（Model Context Protocol）は、AIエージェントが外部のデータソースやツールと安全かつ効率的に連携するためのプロトコルです。このプロジェクトでは、MCPサーバーの実装例を通じて、以下の機能を提供します：

- 東京の気温取得ツール
- PCバッテリー残量取得ツール

## 技術スタック

- **Runtime**: Node.js
- **言語**: TypeScript
- **主要な依存関係**:
  - `@modelcontextprotocol/sdk`: MCP SDKの公式ライブラリ
  - `axios`: HTTP通信ライブラリ
  - `systeminformation`: システム情報取得ライブラリ
  - `zod`: スキーマ検証ライブラリ
- **開発ツール**:
  - `typescript`: TypeScriptコンパイラ
  - `vitest`: テストフレームワーク
  - `eslint`: リンター
  - `prettier`: コードフォーマッター

## 参考書籍

このプロジェクトは以下の書籍を参考にしています：

**「MCPで始めるAIエージェント構築 基本ガイド」**
- 著者: akiyamas
- 販売サイト: https://akiyamas.booth.pm/items/6938747
- 内容: MCPの基本概念から実装まで、AIエージェント構築の入門書

## 実装済み機能

### 1. 東京の気温取得ツール (`get_tokyo_temperature`)
- Open-Meteo APIを使用して東京の現在の気温を取得
- 摂氏温度での表示
- 日本語での結果出力

### 2. PCバッテリー残量取得ツール (`get_battery_status`)
- `systeminformation`ライブラリを使用してバッテリー情報を取得
- バッテリー残量（%）の表示
- 充電状態の判定（充電中/AC電源接続中/バッテリー駆動中）
- 日本語での結果出力
- エラーハンドリング

## インストール方法

1. リポジトリをクローン：
```bash
git clone https://github.com/Msksgm/mcp-example-ts.git
cd mcp-example-ts
```

2. 依存関係をインストール：
```bash
npm install
```

3. TypeScriptをコンパイル：
```bash
npm run build
```

## 使用方法

### 1. MCPサーバーの起動

```bash
npm start
```

### 2. MCP Inspectorを使用した動作確認

```bash
npm run inspector
```

このコマンドを実行すると、MCP Inspectorが起動し、ブラウザでツールの動作を確認できます。通常は `http://localhost:6274` でアクセス可能です。

### 3. 利用可能なツール

#### 東京の気温取得
- ツール名: `get_tokyo_temperature`
- 説明: 東京の現在の気温を取得します
- 入力パラメータ: なし

#### PCバッテリー残量取得
- ツール名: `get_battery_status`
- 説明: PCのバッテリー残量を取得します
- 入力パラメータ: なし

## 開発環境のセットアップ

### 必要な環境
- Node.js 18.0.0以上
- npm 8.0.0以上

### 開発用スクリプト

```bash
# TypeScriptコンパイル
npm run build

# テスト実行
npm test

# テスト実行（監視モード）
npm run test:run

# MCP Inspector起動
npm run inspector
```

### プロジェクト構成

```
mcp-example-ts/
├── src/
│   └── mcp_server.ts          # MCPサーバーのメイン実装
├── dist/                      # コンパイル済みのJavaScriptファイル
├── package.json               # プロジェクト設定と依存関係
├── tsconfig.json              # TypeScript設定
└── README.md                  # このファイル
```

## ライセンス

ISC

## 貢献

プルリクエストや課題報告は歓迎します。開発に参加する際は、以下の点にご注意ください：

1. コードは TypeScript で記述してください
2. 新しい機能を追加する場合は、適切なテストを含めてください
3. コミットメッセージは Conventional Commits の形式に従ってください
4. コードフォーマットは Prettier を使用してください

## 参考リンク

- [Model Context Protocol 公式ドキュメント](https://modelcontextprotocol.io/)
- [MCP SDK GitHub リポジトリ](https://github.com/modelcontextprotocol/sdk)
- [参考書籍: MCPで始めるAIエージェント構築 基本ガイド](https://akiyamas.booth.pm/items/6938747)