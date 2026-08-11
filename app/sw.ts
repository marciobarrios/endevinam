/// <reference lib="webworker" />

import type { PrecacheEntry, SerwistGlobalConfig } from "serwist"
import { Serwist } from "serwist"

declare global {
  interface WorkerGlobalScope extends SerwistGlobalConfig {
    __SW_MANIFEST: (PrecacheEntry | string)[] | undefined
  }
}

declare const self: ServiceWorkerGlobalScope

const serwist = new Serwist({
  cacheId: "endevinam",
  clientsClaim: true,
  disableDevLogs: true,
  // oxlint-disable-next-line no-underscore-dangle -- Serwist replaces this build-time injection point.
  precacheEntries: self.__SW_MANIFEST,
  precacheOptions: {
    cleanupOutdatedCaches: true,
    navigateFallback: "/",
    navigateFallbackDenylist: [/^\/serwist\//],
  },
  skipWaiting: true,
})

serwist.addEventListeners()
