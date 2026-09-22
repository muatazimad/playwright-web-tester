import { test, expect } from '@playwright/test';

test.describe('EPAM client work navigation', () => {
  test('navigates from Services to Client Work', async ({ page }) => {
    await page.goto('https://www.epam.com/');
