import { expect, test } from "@playwright/test"

import { cards } from "../lib/cards"

test("provides valid and unique emoji cards in each deck", () => {
  const allCards = [...cards.sound, ...cards.mime]

  expect(cards.sound).toHaveLength(151)
  expect(cards.mime).toHaveLength(150)
  expect(new Set(allCards.map((card) => card.id)).size).toBe(allCards.length)

  for (const [kind, deck] of Object.entries(cards)) {
    expect(new Set(deck.map((card) => card.label)).size).toBe(deck.length)

    for (const card of deck) {
      expect(card.id).toMatch(new RegExp(`^${kind}-`))
      expect(card.deck).toBe(kind)
      expect(card.label).toBe(card.label.trim())
      expect(card.emoji).toMatch(/\p{Extended_Pictographic}/u)
    }
  }
})
