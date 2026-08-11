export type DeckKind = "sound" | "mime"

export type GameCard = {
  id: string
  label: string
  emoji: string
  deck: DeckKind
}

export const ROUND_LENGTH = 8

export const cards: Record<DeckKind, readonly GameCard[]> = {
  sound: [
    { id: "sound-lion", label: "Lleó", emoji: "🦁", deck: "sound" },
    { id: "sound-train", label: "Train", emoji: "🚂", deck: "sound" },
    { id: "sound-bee", label: "Abella", emoji: "🐝", deck: "sound" },
    { id: "sound-cow", label: "Vaca", emoji: "🐄", deck: "sound" },
    { id: "sound-rain", label: "Pluja", emoji: "🌧️", deck: "sound" },
    { id: "sound-robot", label: "Robot", emoji: "🤖", deck: "sound" },
    { id: "sound-car", label: "Cotxe de curses", emoji: "🏎️", deck: "sound" },
    { id: "sound-baby", label: "Bebè", emoji: "👶", deck: "sound" },
    { id: "sound-clock", label: "Rellotge", emoji: "⏰", deck: "sound" },
    { id: "sound-horse", label: "Cavall", emoji: "🐴", deck: "sound" },
    { id: "sound-snake", label: "Serp", emoji: "🐍", deck: "sound" },
    { id: "sound-dog", label: "Gos", emoji: "🐕", deck: "sound" },
  ],
  mime: [
    { id: "mime-camera", label: "Càmera", emoji: "📷", deck: "mime" },
    { id: "mime-astronaut", label: "Astronauta", emoji: "🧑‍🚀", deck: "mime" },
    { id: "mime-elephant", label: "Elefant", emoji: "🐘", deck: "mime" },
    { id: "mime-toothbrush", label: "Rentar-se les dents", emoji: "🪥", deck: "mime" },
    { id: "mime-swimmer", label: "Nedar", emoji: "🏊", deck: "mime" },
    { id: "mime-penguin", label: "Pingüí", emoji: "🐧", deck: "mime" },
    { id: "mime-superhero", label: "Superheroi o superheroïna", emoji: "🦸", deck: "mime" },
    { id: "mime-chef", label: "Cuiner o cuinera", emoji: "🧑‍🍳", deck: "mime" },
    { id: "mime-sleepy", label: "Adormir-se", emoji: "🥱", deck: "mime" },
    { id: "mime-guitar", label: "Tocar la guitarra", emoji: "🎸", deck: "mime" },
    { id: "mime-monkey", label: "Mico", emoji: "🐒", deck: "mime" },
    { id: "mime-tree", label: "Arbre al vent", emoji: "🌳", deck: "mime" },
  ],
}

export const deckDetails = {
  sound: {
    eyebrow: "Baralla de sons",
    title: "Fes un soroll",
    description: "Rugeix, brunzeix i retruny. No valen paraules!",
    instruction: "Imita el seu so",
    reminder: "Només sorolls — no diguis la paraula.",
  },
  mime: {
    eyebrow: "Baralla de mímica",
    title: "Fes mímica",
    description: "Gestos, postures i teatre. Sense fer cap soroll!",
    instruction: "Fes mímica",
    reminder: "Fes servir tot el cos — sense cap soroll.",
  },
} as const satisfies Record<
  DeckKind,
  {
    eyebrow: string
    title: string
    description: string
    instruction: string
    reminder: string
  }
>
