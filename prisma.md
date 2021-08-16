## prisma schemaを修正したら

```
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