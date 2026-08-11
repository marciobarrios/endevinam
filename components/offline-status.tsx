"use client"

import { useEffect, useState } from "react"

type CacheStatus = "preparing" | "ready" | "error" | "unsupported"

export function OfflineStatus() {
  const [cacheStatus, setCacheStatus] = useState<CacheStatus>("preparing")
  const [online, setOnline] = useState(true)

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return

    setOnline(navigator.onLine)

    if (!("serviceWorker" in navigator)) {
      setCacheStatus("unsupported")
      return
    }

    let active = true
    const updateConnection = () => setOnline(navigator.onLine)
    const markReady = () => setCacheStatus("ready")

    window.addEventListener("online", updateConnection)
    window.addEventListener("offline", updateConnection)
    navigator.serviceWorker.addEventListener("controllerchange", markReady)

    void navigator.serviceWorker.ready.then(
      () => {
        if (active) markReady()
      },
      () => {
        if (active) setCacheStatus("error")
      },
    )

    return () => {
      active = false
      window.removeEventListener("online", updateConnection)
      window.removeEventListener("offline", updateConnection)
      navigator.serviceWorker.removeEventListener("controllerchange", markReady)
    }
  }, [])

  if (process.env.NODE_ENV !== "production") return null

  const label =
    cacheStatus === "ready"
      ? online
        ? "A punt per jugar sense connexió"
        : "Jugant sense connexió"
      : cacheStatus === "preparing"
        ? "Preparant el joc sense connexió…"
        : cacheStatus === "unsupported"
          ? "Mode sense connexió no compatible"
          : "No s’ha pogut preparar el mode sense connexió"

  return (
    <p
      className={`offline-status offline-status--${cacheStatus}`}
      role="status"
      aria-live="polite"
      data-offline-ready={cacheStatus === "ready"}
    >
      <span className="offline-status__dot" aria-hidden="true" />
      {label}
    </p>
  )
}
