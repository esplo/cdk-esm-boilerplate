export const handler = async (event: any): Promise<any> => {
  console.log("EVENT: \n" + JSON.stringify(event, null, 2));
  const result = {
    statusCode: 200,
  };
  console.log("result:", result);

  return result;
};
