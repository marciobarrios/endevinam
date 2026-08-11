import { expect, test } from "@playwright/test"

import { cards } from "../lib/cards"

test("provides 50 unique emoji cards in each deck", () => {
  const allCards = [...cards.sound, ...cards.mime]

  expect(cards.sound).toHaveLength(50)
  expect(cards.mime).toHaveLength(50)
  expect(new Set(allCards.map((card) => card.id)).size).toBe(allCards.length)

  for (const card of allCards) {
    expect(card.emoji).toMatch(/\p{Extended_Pictographic}/u)
  }
})
