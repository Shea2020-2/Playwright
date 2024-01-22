import { test, expect } from "@playwright/test";

test("Vs Code Live Stream", async ({ page }) => {
  await page.goto("https://code.visualstudio.com/");
  await page.getByPlaceholder("Search Docs").click();
  await page.getByPlaceholder("Search Docs").click();
  await page.getByPlaceholder("Search Docs").fill("live stream");
  await page.getByPlaceholder("Search Docs").press("Enter");
  await page.getByRole("link", { name: "VS Code livestream - Visual" }).click();
});

test("Code Live Stream", async ({ page }) => {
  await page.goto("https://code.visualstudio.com/");
  await page.getByPlaceholder("Search Docs").click();
  await page.getByPlaceholder("Search Docs").click();
  await page.getByPlaceholder("Search Docs").fill("live stream");
  await page.getByPlaceholder("Search Docs").press("Enter");
  await page.getByRole("link", { name: "VS Code livestream - Visual" }).click();
});
