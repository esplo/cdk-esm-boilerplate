import * as url from "node:url";

const main = async (
  event: any,
): Promise<{ exists: boolean; statusCode: number }> => {
  const fs = await import("fs");
  const result = {
    exists: fs.existsSync("/tmp/hoge"),
    statusCode: 200,
  };
  console.log("result:", result);
  return result;
};

export const handler = async (event: any): Promise<any> => {
  console.log("EVENT: \n" + JSON.stringify(event, null, 2));
  return await main(event);
};

if (import.meta.url.startsWith("file:")) {
  const modulePath = url.fileURLToPath(import.meta.url);
  if (process.argv[1] === modulePath) {
    await main({});
  }
}
