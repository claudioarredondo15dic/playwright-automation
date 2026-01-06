import { test, expect } from '@playwright/test';

test('Validar título y tomar screenshot en example.com', async ({ page }) => {
  // Visitar el sitio
  await page.goto('https://example.com');

  // Verificar que el título contenga "Example"
  await expect(page).toHaveTitle(/Example/);

  // Tomar captura de pantalla
  await page.screenshot({ path: 'example.png' });
});
