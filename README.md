# Next.js で S3 バケットへ画像をアップロードする

* 他の プロジェクトで使うための事前検証なので、このプロジェクトでも下記の前提としています。
    - Amplify Hosting でデプロイする
        - Amplify Hosting でデプロイ時に IAM ロールで S3 バケットへのアクセス権限を付与する
            - このとき、サービスロールではなく **コンピューティングロール** にロールを設定する
    - Amplify Hosting 以外の Amplify の機能は使わない
    - TypeScript は使わない

* 参考 URL (下記のブログのコードを参考にさせていただきました。)
  - https://zenn.dev/ncdc/articles/267dc71da14c66

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

```bash
npx create-next-app next-s3-uploadFile

cd next-s3-uploadFile

npm install @aws-sdk/client-s3
```

* .env.development に 保存先の S3 バケット名、パス、AWS リージョンを指定

```bash
PORT=8080 npm run dev
# of

npm run dev
]
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
