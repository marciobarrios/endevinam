import { spawnSync } from "node:child_process"

import { createSerwistRoute } from "@serwist/turbopack"

function getBuildRevision() {
  const deploymentRevision = process.env.VERCEL_GIT_COMMIT_SHA
  if (deploymentRevision) return deploymentRevision

  const gitRevision = spawnSync("git", ["rev-parse", "HEAD"], {
    encoding: "utf8",
  }).stdout.trim()

  return gitRevision || process.env.npm_package_version || "local-build"
}

const revision = getBuildRevision()

export const { dynamic, dynamicParams, revalidate, generateStaticParams, GET } = createSerwistRoute(
  {
    additionalPrecacheEntries: [
      { url: "/", revision },
      { url: "/favicon.ico", revision },
      { url: "/manifest.webmanifest", revision },
    ],
    globPatterns: [".next/static/**/*", "public/**/*"],
    swSrc: "app/sw.ts",
    useNativeEsbuild: true,
  },
)
