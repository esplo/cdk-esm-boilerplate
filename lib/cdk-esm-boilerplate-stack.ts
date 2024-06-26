import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as path from "path";

export class CdkEsmBoilerplateStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new cdk.aws_s3.Bucket(this, "hoge", {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    new cdk.aws_lambda_nodejs.NodejsFunction(this, "testLambda", {
      entry: path.join(import.meta.dirname, "../lambda/index.ts"),
      runtime: cdk.aws_lambda.Runtime.NODEJS_LATEST,
      bundling: {
        format: cdk.aws_lambda_nodejs.OutputFormat.ESM,
        mainFields: ["module", "main"],
        banner:
          "const require = (await import('node:module')).createRequire(import.meta.url);const __filename = (await import('node:url')).fileURLToPath(import.meta.url);const __dirname = (await import('node:path')).dirname(__filename);",
      },
    });
  }
}
