
const math = require('../src/math');
const { test, expect } = require('@playwright/test');
const {qase} = require('playwright-qase-reporter')
 
test('Google page loads and screenshot is taken', async ({ page }) => {
  await page.goto('https://www.google.com');

  // Accept cookies if the prompt appears (for EU regions)
  const acceptButton = page.locator('button', { hasText: /Accept/i });
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
  }

  // Take a full-page screenshot
  await page.screenshot({ path: 'screenshots/google-home.png', fullPage: true });

  // Simple assertion to make sure "Google Search" input is visible
  await expect(page.locator('input[name="q"]')).toBeVisible();
});

test.describe('Math module', () => {
  test('should correctly add two numbers', () => {
   qase.id(9)
    expect(math.add(2, 3)).toBe(5);
  });

  test('should correctly subtract two numbers', () => {
    expect(math.subtract(5, 3)).toBe(2);
  });
  test('[Failed Step Demo]Addition with steps', async () => {
    await test.step('Start by Adding Number 1', async () => {
      expect(true).toBe(true);
    });
    await test.step('Add another Number 2', async () => {
      expect(true).toBe(true);
    });
    await test.step('Resulting Number should be 3', async () => {
      expect(math.add(1,2)).toBe(3);
    });
    expect(true).toBe(true);
  });

});
