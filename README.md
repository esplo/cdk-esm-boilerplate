# CDK ESM Boilerplate

## prerequisite

- Install `pnpm`
- `pnpm i`

## test

`pnpm run test`

## deploy

`pnpx cdk deploy`

## replace project name (Mac)

```bash
RESOURCE_NAME="RepoName"
FILE_NAME="repo-name"

sed -i '' -E "s/CdkEsmBoilerplate/${RESOURCE_NAME}/g" **/*.ts *.json
sed -i '' -E "s/cdk-esm-boilerplate/${FILE_NAME}/g" **/*.ts *.json
mv bin/cdk-esm-boilerplate.ts bin/${FILE_NAME}.ts
mv lib/cdk-esm-boilerplate-stack.ts lib/${FILE_NAME}-stack.ts
```
