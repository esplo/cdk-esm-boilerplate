test("lamda", async () => {
  const hander = (await import("../lambda/index")).handler;
  const result = await hander(null);
  console.log(result);
  expect(result.statusCode).toBe(200);
});
