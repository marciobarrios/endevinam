import { expect, test } from "@playwright/test"

test("starts a sound round and keeps score", async ({ page }) => {
  await page.goto("/")

  await expect(page.getByRole("heading", { name: "Endevina-ho. No ho diguis." })).toBeVisible()
  await page.getByRole("button", { name: /Juga amb la baralla de sons/ }).click()

  await expect(page.getByText("Imita el seu so")).toBeVisible()
  await expect(page.getByRole("progressbar", { name: "Progrés de la ronda" })).toHaveAttribute(
    "aria-valuenow",
    "1",
  )

  await page.getByRole("button", { name: "Ho han endevinat!" }).click()

  await expect(page.getByRole("progressbar", { name: "Progrés de la ronda" })).toHaveAttribute(
    "aria-valuenow",
    "2",
  )
  await expect(page.getByLabel("1 respostes correctes")).toBeVisible()
})

test("starts a mime round with the correct rules", async ({ page }) => {
  await page.goto("/")
  await page.getByRole("button", { name: /Juga amb la baralla de mímica/ }).click()

  await expect(page.getByText("Fes mímica")).toBeVisible()
  await expect(page.getByText("Fes servir tot el cos — sense cap soroll.")).toBeVisible()
})

test("completes an eight-card round", async ({ page }) => {
  await page.goto("/")
  await page.getByRole("button", { name: /Juga amb la baralla de sons/ }).click()

  for (let card = 0; card < 8; card += 1) {
    await page.getByRole("button", { name: "Ho han endevinat!" }).click()
  }

  await expect(page.getByText("Ronda acabada")).toBeVisible()
  await expect(page.getByLabel("8 de 8 cartes endevinades")).toBeVisible()
  await expect(page.getByRole("button", { name: "Torna-hi amb aquesta baralla" })).toBeVisible()
})

test("loads and remains playable in a new page without a network", async ({ context, page }) => {
  await page.goto("/")
  await expect(page.locator('[data-offline-ready="true"]')).toContainText(
    "A punt per jugar sense connexió",
    { timeout: 30_000 },
  )

  await expect
    .poll(() => page.evaluate(() => Boolean(navigator.serviceWorker.controller)))
    .toBe(true)

  await page.close()
  await context.setOffline(true)

  const offlinePage = await context.newPage()
  const offlineResponse = await offlinePage.goto("/", { waitUntil: "domcontentloaded" })

  expect(offlineResponse?.fromServiceWorker()).toBe(true)

  await expect(
    offlinePage.getByRole("heading", { name: "Endevina-ho. No ho diguis." }),
  ).toBeVisible()
  await expect(offlinePage.locator('[data-offline-ready="true"]')).toBeVisible()

  await offlinePage.getByRole("button", { name: /Juga amb la baralla de sons/ }).click()
  await expect(offlinePage.getByText("Imita el seu so")).toBeVisible()
})
