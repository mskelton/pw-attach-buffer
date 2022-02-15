import { expect, test } from "@playwright/test";

test.describe("New Todo", () => {
  test("should allow me to add todo items", async ({}, testInfo) => {
    await testInfo.attach("report.json", {
      body: Buffer.from('{"test": "test"}', "utf-8"),
      contentType: "application/json",
    });

    expect(true).toBe(false);
  });
});
