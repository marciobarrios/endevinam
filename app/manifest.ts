import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Endevina’m",
    short_name: "Endevina’m",
    description: "Un joc d’endevinalles amb sons i mímica per a tota la família.",
    start_url: "/",
    display: "standalone",
    background_color: "#17305c",
    theme_color: "#17305c",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
