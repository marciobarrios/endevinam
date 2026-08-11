import { SerwistProvider } from "@serwist/turbopack/react"
import type { Metadata, Viewport } from "next"
import "@fontsource-variable/fredoka"
import "@fontsource-variable/nunito"

import "./globals.css"

export const metadata: Metadata = {
  title: "Endevina’m — Un joc d’endevinalles en família",
  description: "Tria una carta, fes un soroll o mímica i deixa que la família endevini.",
  applicationName: "Endevina’m",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Endevina’m",
  },
  icons: {
    icon: [
      {
        url: "/icons/app-icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: "#17305c",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ca">
      <body>
        <SerwistProvider
          swUrl="/serwist/sw.js"
          disable={process.env.NODE_ENV !== "production"}
          cacheOnNavigation={false}
          reloadOnOnline={false}
          options={{ updateViaCache: "none" }}
        >
          {children}
        </SerwistProvider>
      </body>
    </html>
  )
}
