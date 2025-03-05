'use client'
import { useContext } from 'react'
import { ThemeContext } from '@/components/ThemeProvider' // Asegúrate de la ruta

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}