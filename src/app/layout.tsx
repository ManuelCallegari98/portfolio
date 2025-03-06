import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider' // Importación default
import SmoothScroll from '@/components/SmoothScroll'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Manuel Callegari | Portfolio',
  description: 'Portfolio personal de Manuel Callegari - Desarrollador Full Stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} transition-colors duration-300`}>
      <ThemeProvider>
        <SmoothScroll />
          {children}
          <Analytics />
       </ThemeProvider>
      </body>
    </html>
  )
}