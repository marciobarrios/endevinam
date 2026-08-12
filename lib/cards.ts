export type CardKind = "sound" | "mime"
export type DeckKind = CardKind | "mixed"

export type GameCard = {
  id: string
  label: string
  emoji: string
  deck: CardKind
}

export const ROUND_LENGTH = 8

export const cards: Record<CardKind, readonly GameCard[]> = {
  sound: [
    { id: "sound-lion", label: "Lleó", emoji: "🦁", deck: "sound" },
    { id: "sound-train", label: "Tren", emoji: "🚂", deck: "sound" },
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
    { id: "sound-cat", label: "Gat", emoji: "🐈", deck: "sound" },
    { id: "sound-rooster", label: "Gall", emoji: "🐓", deck: "sound" },
    { id: "sound-duck", label: "Ànec", emoji: "🦆", deck: "sound" },
    { id: "sound-pig", label: "Porc", emoji: "🐖", deck: "sound" },
    { id: "sound-sheep", label: "Ovella", emoji: "🐑", deck: "sound" },
    { id: "sound-frog", label: "Granota", emoji: "🐸", deck: "sound" },
    { id: "sound-wolf", label: "Llop", emoji: "🐺", deck: "sound" },
    { id: "sound-monkey", label: "Mico", emoji: "🐒", deck: "sound" },
    { id: "sound-elephant", label: "Elefant", emoji: "🐘", deck: "sound" },
    { id: "sound-owl", label: "Mussol", emoji: "🦉", deck: "sound" },
    { id: "sound-dolphin", label: "Dofí", emoji: "🐬", deck: "sound" },
    { id: "sound-whale", label: "Balena", emoji: "🐋", deck: "sound" },
    { id: "sound-motorcycle", label: "Moto", emoji: "🏍️", deck: "sound" },
    { id: "sound-helicopter", label: "Helicòpter", emoji: "🚁", deck: "sound" },
    { id: "sound-airplane", label: "Avió", emoji: "✈️", deck: "sound" },
    { id: "sound-fire-engine", label: "Camió de bombers", emoji: "🚒", deck: "sound" },
    { id: "sound-ambulance", label: "Ambulància", emoji: "🚑", deck: "sound" },
    { id: "sound-police-car", label: "Cotxe de policia", emoji: "🚓", deck: "sound" },
    { id: "sound-ship", label: "Vaixell", emoji: "🚢", deck: "sound" },
    { id: "sound-tractor", label: "Tractor", emoji: "🚜", deck: "sound" },
    { id: "sound-bell", label: "Campana", emoji: "🔔", deck: "sound" },
    { id: "sound-telephone", label: "Telèfon", emoji: "☎️", deck: "sound" },
    { id: "sound-drum", label: "Tambor", emoji: "🥁", deck: "sound" },
    { id: "sound-trumpet", label: "Trompeta", emoji: "🎺", deck: "sound" },
    { id: "sound-guitar", label: "Guitarra", emoji: "🎸", deck: "sound" },
    { id: "sound-saxophone", label: "Saxòfon", emoji: "🎷", deck: "sound" },
    { id: "sound-violin", label: "Violí", emoji: "🎻", deck: "sound" },
    { id: "sound-flute", label: "Flauta", emoji: "🪈", deck: "sound" },
    { id: "sound-wind", label: "Vent", emoji: "🌬️", deck: "sound" },
    { id: "sound-thunderstorm", label: "Tempesta", emoji: "⛈️", deck: "sound" },
    { id: "sound-explosion", label: "Explosió", emoji: "💥", deck: "sound" },
    { id: "sound-fireworks", label: "Focs artificials", emoji: "🎆", deck: "sound" },
    { id: "sound-sneeze", label: "Esternut", emoji: "🤧", deck: "sound" },
    { id: "sound-laugh", label: "Rialla", emoji: "😂", deck: "sound" },
    { id: "sound-snore", label: "Ronc", emoji: "😴", deck: "sound" },
    { id: "sound-ghost", label: "Fantasma", emoji: "👻", deck: "sound" },
    { id: "sound-monster", label: "Monstre", emoji: "👹", deck: "sound" },
    { id: "sound-witch", label: "Bruixa", emoji: "🧙", deck: "sound" },
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
    { id: "mime-cycling", label: "Anar amb bicicleta", emoji: "🚴", deck: "mime" },
    { id: "mime-running", label: "Córrer", emoji: "🏃", deck: "mime" },
    { id: "mime-dancing", label: "Ballar", emoji: "💃", deck: "mime" },
    { id: "mime-skiing", label: "Esquiar", emoji: "⛷️", deck: "mime" },
    { id: "mime-surfing", label: "Fer surf", emoji: "🏄", deck: "mime" },
    { id: "mime-climbing", label: "Escalar", emoji: "🧗", deck: "mime" },
    { id: "mime-weightlifting", label: "Aixecar peses", emoji: "🏋️", deck: "mime" },
    { id: "mime-basketball", label: "Jugar a bàsquet", emoji: "⛹️", deck: "mime" },
    { id: "mime-football", label: "Jugar a futbol", emoji: "⚽", deck: "mime" },
    { id: "mime-tennis", label: "Jugar a tennis", emoji: "🎾", deck: "mime" },
    { id: "mime-boxing", label: "Fer boxa", emoji: "🥊", deck: "mime" },
    { id: "mime-ice-skating", label: "Patinar sobre gel", emoji: "⛸️", deck: "mime" },
    { id: "mime-doctor", label: "Metge o metgessa", emoji: "🧑‍⚕️", deck: "mime" },
    { id: "mime-firefighter", label: "Bomber o bombera", emoji: "🧑‍🚒", deck: "mime" },
    { id: "mime-police", label: "Policia", emoji: "👮", deck: "mime" },
    { id: "mime-detective", label: "Detectiu o detectiva", emoji: "🕵️", deck: "mime" },
    { id: "mime-pilot", label: "Pilot d'avió", emoji: "🧑‍✈️", deck: "mime" },
    { id: "mime-teacher", label: "Mestre o mestra", emoji: "🧑‍🏫", deck: "mime" },
    { id: "mime-farmer", label: "Pagès o pagesa", emoji: "🧑‍🌾", deck: "mime" },
    { id: "mime-mechanic", label: "Mecànic o mecànica", emoji: "🧑‍🔧", deck: "mime" },
    { id: "mime-painter", label: "Pintor o pintora", emoji: "🧑‍🎨", deck: "mime" },
    { id: "mime-scientist", label: "Científic o científica", emoji: "🧑‍🔬", deck: "mime" },
    { id: "mime-eating-pasta", label: "Menjar espaguetis", emoji: "🍝", deck: "mime" },
    { id: "mime-drinking", label: "Beure amb una palleta", emoji: "🥤", deck: "mime" },
    { id: "mime-umbrella", label: "Obrir un paraigua", emoji: "☂️", deck: "mime" },
    { id: "mime-reading", label: "Llegir un llibre", emoji: "📖", deck: "mime" },
    {
      id: "mime-typing",
      label: "Escriure a l'ordinador",
      emoji: "💻",
      deck: "mime",
    },
    { id: "mime-fishing", label: "Pescar", emoji: "🎣", deck: "mime" },
    { id: "mime-rowing", label: "Remar", emoji: "🚣", deck: "mime" },
    { id: "mime-shower", label: "Dutxar-se", emoji: "🚿", deck: "mime" },
    { id: "mime-washing-hands", label: "Rentar-se les mans", emoji: "🧼", deck: "mime" },
    { id: "mime-suitcase", label: "Arrossegar una maleta", emoji: "🧳", deck: "mime" },
    { id: "mime-balloon", label: "Inflar un globus", emoji: "🎈", deck: "mime" },
    {
      id: "mime-birthday-candles",
      label: "Bufar espelmes d'aniversari",
      emoji: "🎂",
      deck: "mime",
    },
    { id: "mime-kangaroo", label: "Saltar com un cangur", emoji: "🦘", deck: "mime" },
    { id: "mime-crab", label: "Caminar com un cranc", emoji: "🦀", deck: "mime" },
    {
      id: "mime-flamingo",
      label: "Aguantar-se com un flamenc",
      emoji: "🦩",
      deck: "mime",
    },
    { id: "mime-zombie", label: "Caminar com un zombi", emoji: "🧟", deck: "mime" },
  ],
}

export const deckDetails = {
  sound: {
    eyebrow: "Baralla de sons",
    title: "Fes un soroll",
    description: "Rugeix i retruny. No valen paraules!",
    instruction: "Imita el seu so",
    reminder: "Només sorolls — no diguis la paraula.",
  },
  mime: {
    eyebrow: "Baralla de mímica",
    title: "Fes mímica",
    description: "Gestos i teatre. Sense fer cap soroll!",
    instruction: "Fes mímica",
    reminder: "Fes servir tot el cos — sense cap soroll.",
  },
  mixed: {
    eyebrow: "Baralla mixta",
    title: "Barreja-ho tot",
    description: "Sons i mímica. Mira què toca!",
    instruction: "Segueix la carta",
    reminder: "Pot tocar fer un soroll o mímica — fixa-t’hi!",
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
