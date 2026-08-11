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

test("plays a mixed round with sound and mime cards", async ({ page }) => {
  await page.goto("/")
  await page.getByRole("button", { name: /Juga amb la baralla mixta/ }).click()

  const cardTypes = new Set<string>()

  for (let card = 0; card < 8; card += 1) {
    const type = await page.locator(".progress-block__labels span").nth(1).textContent()
    if (type) cardTypes.add(type)

    if (card < 7) await page.getByRole("button", { name: "Passo" }).click()
  }

  expect(cardTypes).toEqual(new Set(["Baralla de sons", "Baralla de mímica"]))
})

test("keeps the mixed deck title on one line on narrow screens", async ({ page }) => {
  await page.setViewportSize({ width: 361, height: 800 })
  await page.goto("/")

  const title = page.locator(".deck-choice--mixed .deck-choice__copy strong")
  const lineCount = await title.evaluate((element) => {
    const range = document.createRange()
    range.selectNodeContents(element)
    return range.getClientRects().length
  })

  expect(lineCount).toBe(1)
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
