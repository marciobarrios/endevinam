import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Endevina’m",
    short_name: "Endevina’m",
    description: "Un joc d’endevinalles amb sons i mímica per a tota la família.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#17305c",
    theme_color: "#17305c",
    icons: [
      {
        src: "/icons/app-icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/app-icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/app-icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
