import { test, expect } from '@playwright/test';

test('Buscar test runner en Playwright y validar URL', async ({ page }) => {

  // Ir a Playwright
  await page.goto('https://playwright.dev');

  // Localizadores
  const searchButton = page.getByRole('button', { name: 'Search' });
  const searchInput = page.locator('input[placeholder="Search docs"]');

  // Usamos Promise.all para acciones paralelas
  await Promise.all([
    searchButton.click(),
    searchInput.fill('test runner')
  ]);

  // Esperar resultados y hacer clic en el primer enlace
  const firstResult = page.locator('.DocSearch-Hit-title').first();
  await firstResult.click();

  // Verificar que la URL contenga la palabra "test"
  await expect(page).toHaveURL(/test/);
});
