"use client"

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Hand,
  PersonStanding,
  RotateCcw,
  Shuffle,
  Sparkles,
  Volume2,
} from "lucide-react"
import { useEffect, useState } from "react"

import { OfflineStatus } from "@/components/offline-status"
import { Button } from "@/components/ui/button"
import { cards, deckDetails, type DeckKind, type GameCard, ROUND_LENGTH } from "@/lib/cards"
import { cn } from "@/lib/utils"

type Screen = "home" | "playing" | "finished"

const modeIcon = {
  sound: Volume2,
  mime: PersonStanding,
  mixed: Shuffle,
} as const

const modeArt = {
  sound: "🦁",
  mime: "📷",
  mixed: "🦁 📷",
} as const

function shuffle<T>(items: readonly T[]) {
  const shuffled = [...items]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]]
  }

  return shuffled
}

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn("brand-mark", compact && "brand-mark--compact")}>
      <span className="brand-mark__spark" aria-hidden="true">
        ✦
      </span>
      <span>Endevina’m</span>
    </div>
  )
}

function DeckButton({
  kind,
  onSelect,
  disabled,
}: {
  kind: DeckKind
  onSelect: (kind: DeckKind) => void
  disabled: boolean
}) {
  const details = deckDetails[kind]
  const Icon = modeIcon[kind]

  return (
    <button
      type="button"
      className={cn("deck-choice", `deck-choice--${kind}`)}
      onClick={() => onSelect(kind)}
      disabled={disabled}
      aria-label={`Juga amb la ${details.eyebrow.toLowerCase()}: ${details.title}`}
    >
      <span className="deck-choice__layer" aria-hidden="true" />
      <span className="deck-choice__face">
        <span className="deck-choice__topline">
          <span className="deck-choice__eyebrow">{details.eyebrow}</span>
          <span className="deck-choice__icon" aria-hidden="true">
            <Icon strokeWidth={2.5} />
          </span>
        </span>
        <span
          className={cn("deck-choice__art", kind === "mixed" && "deck-choice__art--mixed")}
          aria-hidden="true"
        >
          {modeArt[kind]}
        </span>
        <span className="deck-choice__copy">
          <strong>{details.title}</strong>
          <span>{details.description}</span>
        </span>
        <span className="deck-choice__action" aria-hidden="true">
          <span className="deck-choice__action-label--long">Tria aquesta baralla</span>
          <span className="deck-choice__action-label--short">Tria-la</span>
          <ArrowRight />
        </span>
      </span>
    </button>
  )
}

function HomeScreen({ onStart, ready }: { onStart: (kind: DeckKind) => void; ready: boolean }) {
  return (
    <div className="home-screen screen-enter">
      <header className="home-header">
        <BrandMark />
        <span className="round-pill">8 cartes · 1 ronda esbojarrada</span>
      </header>

      <div className="home-intro">
        <p className="kicker">Un joc d’endevinalles per a tota la família</p>
        <h1>
          Endevina-ho. <span>No ho diguis.</span>
        </h1>
        <p className="home-intro__copy">
          Tria una baralla, passa el mòbil a qui interpreta i que comencin les rialles.
        </p>
      </div>

      <section className="deck-section" aria-labelledby="deck-heading">
        <div className="section-heading">
          <h2 id="deck-heading">Tria el teu repte</h2>
          <span>Qui comença?</span>
        </div>
        <div className="deck-grid">
          <DeckButton kind="sound" onSelect={onStart} disabled={!ready} />
          <DeckButton kind="mime" onSelect={onStart} disabled={!ready} />
          <DeckButton kind="mixed" onSelect={onStart} disabled={!ready} />
        </div>
      </section>

      <ol className="how-to-play" aria-label="Com s’hi juga">
        <li>
          <span>1</span> Tria una baralla
        </li>
        <li>
          <span>2</span> Interpreta la carta
        </li>
        <li>
          <span>3</span> Tothom endevina
        </li>
      </ol>

      <footer className="home-footer">
        <p className="privacy-note">Sense comptes · Sense anuncis · Només jugar</p>
        <OfflineStatus />
      </footer>
    </div>
  )
}

type PlayScreenProps = {
  card: GameCard
  cardIndex: number
  score: number
  onExit: () => void
  onAnswer: (guessed: boolean) => void
}

function PlayScreen({ card, cardIndex, score, onExit, onAnswer }: PlayScreenProps) {
  const details = deckDetails[card.deck]
  const Icon = modeIcon[card.deck]
  const progress = ((cardIndex + 1) / ROUND_LENGTH) * 100

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.repeat || event.metaKey || event.ctrlKey || event.altKey) return
      if (event.key.toLowerCase() === "e") onAnswer(true)
      if (event.key.toLowerCase() === "p") onAnswer(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onAnswer])

  return (
    <div className="play-screen screen-enter">
      <header className="play-header">
        <button type="button" className="text-button" onClick={onExit}>
          <ArrowLeft aria-hidden="true" />
          Baralles
        </button>
        <BrandMark compact />
        <div
          className="score-pill"
          role="status"
          aria-live="polite"
          aria-label={`${score} respostes correctes`}
        >
          <Sparkles aria-hidden="true" />
          <span>{score}</span>
        </div>
      </header>

      <div className="progress-block">
        <div className="progress-block__labels">
          <span>
            Carta {cardIndex + 1} de {ROUND_LENGTH}
          </span>
          <span>{details.eyebrow}</span>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-valuemin={1}
          aria-valuemax={ROUND_LENGTH}
          aria-valuenow={cardIndex + 1}
          aria-label="Progrés de la ronda"
        >
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>

      <section key={card.id} className={cn("play-card", `play-card--${card.deck}`)}>
        <div className="play-card__inner">
          <div className="play-card__topline">
            <span>{details.instruction}</span>
            <span className="play-card__icon" aria-hidden="true">
              <Icon strokeWidth={2.4} />
            </span>
          </div>
          <div className="play-card__art" role="img" aria-label={card.label}>
            <span aria-hidden="true">{card.emoji}</span>
          </div>
          <div className="play-card__caption">
            <h1>{card.label}</h1>
            <p>{details.reminder}</p>
          </div>
        </div>
      </section>

      <div className="answer-actions">
        <Button
          type="button"
          variant="outline"
          className="game-button game-button--skip"
          onClick={() => onAnswer(false)}
        >
          Passo
          <span className="keyboard-hint" aria-hidden="true">
            P
          </span>
        </Button>
        <Button
          type="button"
          className="game-button game-button--correct"
          onClick={() => onAnswer(true)}
        >
          <Check aria-hidden="true" />
          Ho han endevinat!
          <span className="keyboard-hint" aria-hidden="true">
            E
          </span>
        </Button>
      </div>
    </div>
  )
}

type FinishScreenProps = {
  score: number
  kind: DeckKind
  onReplay: () => void
  onExit: () => void
}

function FinishScreen({ score, kind, onReplay, onExit }: FinishScreenProps) {
  const message =
    score >= 6 ? "Quin equipàs!" : score >= 3 ? "Molt ben jugat!" : "Això era l’escalfament!"

  return (
    <div className="finish-screen screen-enter">
      <BrandMark />
      <div className="celebration" aria-hidden="true">
        <span>✦</span>
        <span>●</span>
        <span>▲</span>
        <span>★</span>
        <span>●</span>
      </div>
      <div className="finish-card">
        <span className="finish-card__icon" aria-hidden="true">
          <Hand />
        </span>
        <p>Ronda acabada</p>
        <h1>{message}</h1>
        <div className="final-score" aria-label={`${score} de ${ROUND_LENGTH} cartes endevinades`}>
          <strong>{score}</strong>
          <span>/ {ROUND_LENGTH}</span>
        </div>
        <p className="finish-card__copy">
          cartes endevinades amb la {deckDetails[kind].eyebrow.toLowerCase()}
        </p>
      </div>
      <div className="finish-actions">
        <Button type="button" className="game-button game-button--correct" onClick={onReplay}>
          <RotateCcw aria-hidden="true" />
          Torna-hi amb aquesta baralla
        </Button>
        <Button type="button" variant="outline" className="game-button" onClick={onExit}>
          Tria una altra baralla
        </Button>
      </div>
    </div>
  )
}

export function Game() {
  const [ready, setReady] = useState(false)
  const [screen, setScreen] = useState<Screen>("home")
  const [kind, setKind] = useState<DeckKind>("sound")
  const [round, setRound] = useState<GameCard[]>([])
  const [cardIndex, setCardIndex] = useState(0)
  const [score, setScore] = useState(0)

  useEffect(() => {
    setReady(true)
  }, [])

  function startRound(selectedKind: DeckKind) {
    setKind(selectedKind)
    setRound(createRound(selectedKind))
    setCardIndex(0)
    setScore(0)
    setScreen("playing")
  }

  function answer(guessed: boolean) {
    if (guessed) setScore((currentScore) => currentScore + 1)

    if (cardIndex === ROUND_LENGTH - 1) {
      setScreen("finished")
      return
    }

    setCardIndex((currentIndex) => currentIndex + 1)
  }

  function exitRound() {
    setScreen("home")
  }

  return (
    <main className="game-shell" data-ready={ready}>
      <div className="tabletop-pattern" aria-hidden="true" />
      <div className="game-container">
        {screen === "home" ? <HomeScreen onStart={startRound} ready={ready} /> : null}
        {screen === "playing" && round[cardIndex] ? (
          <PlayScreen
            card={round[cardIndex]}
            cardIndex={cardIndex}
            score={score}
            onExit={exitRound}
            onAnswer={answer}
          />
        ) : null}
        {screen === "finished" ? (
          <FinishScreen
            score={score}
            kind={kind}
            onReplay={() => startRound(kind)}
            onExit={exitRound}
          />
        ) : null}
      </div>
    </main>
  )
}

function createRound(kind: DeckKind) {
  if (kind !== "mixed") return shuffle(cards[kind]).slice(0, ROUND_LENGTH)

  const soundCards = shuffle(cards.sound).slice(0, Math.ceil(ROUND_LENGTH / 2))
  const mimeCards = shuffle(cards.mime).slice(0, Math.floor(ROUND_LENGTH / 2))

  return shuffle([...soundCards, ...mimeCards])
}
