'use client'
import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '@/hooks/useTheme'

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className={`p-3 rounded-full ${
        darkMode ? 
        'bg-racing-primary text-racing-yellow' : 
        'bg-racing-yellow text-racing-primary'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Cambiar a modo ${darkMode ? 'claro' : 'oscuro'}`}
    >
      {darkMode ? <FiMoon className="text-xl" /> : <FiSun className="text-xl" />}
    </motion.button>
  )
}