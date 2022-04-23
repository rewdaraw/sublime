## prisma schemaの作成(初期化)

```
npx prisma init
```

## prisma schemaを修正したら

```
// prismaディレクトリにDATABASE_URLが記載された.envがある事を確認し、/appで以下を実行
npx prisma generate
```

```
npx prisma db push
```

```
npx prisma db seed --preview-feature
```

## prismaでのrelationデータの部分的取得

```
projectStatuses: {
  # relation先のデータ全取得 
  include: {
    progressStatus: true,
  },

  # relation先のデータ部分取得 
  include: {
    progressStatus: {
      select: {
        id: true,
        title: true
      }
    },
  },
},
```