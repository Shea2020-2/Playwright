import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://igi-uat.globalriskwire.com/workbench/dashboard");
  await page.locator("li").filter({ hasText: "New Submission" }).click();
  await page.getByText("Logged").click();
  await page.getByText("Insurance", { exact: true }).click();
  await page.getByPlaceholder("Type to search...").nth(1).click();
  await page.getByPlaceholder("Type to search...").nth(1).fill("AON");
  await page.getByText("AON ACCOUNTANCY LIMITED").click();
  await page.getByRole("button", { name: "Next" }).click();
  // await page
  //   .locator("app-predictive-insured-party")
  //   .getByPlaceholder("Type to search...")
  //   .click();
  // await page
  //   .locator("app-predictive-insured-party")
  //   .getByPlaceholder("Type to search...")
  //   .fill("RHR");
  // await page.getByText("REINS HUB REASURANS").click();
  // await page.getByRole("button", { name: "Next" }).click();
  // await page.getByLabel("Inception date").click();
  // await page.getByLabel("Inception date").fill("14/01/2023");
  // await page.getByLabel("13 Jan").press("Escape");
  // await page.getByLabel("Expiry date").click();
  // await page.getByRole("button", { name: "Finish" }).click();
});
