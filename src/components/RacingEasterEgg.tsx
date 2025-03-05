// components/RacingEasterEgg.tsx
'use client'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function RacingEasterEgg() {
  const [clicks, setClicks] = useState(0)
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [showEasterEgg, setShowEasterEgg] = useState(false)


  const handleClick = () => {
    if (!playing) {
      setClicks((prevClicks) => {
        if (prevClicks < 3) {
          setPlaying(true)
          audioRef.current = new Audio('/sounds/click.mp3')
          audioRef.current.play().then(() => setPlaying(false))
          return prevClicks + 1
        } else {
          setPlaying(true)
          audioRef.current = new Audio('/sounds/gol.mp3')
          audioRef.current.play().then(() => setPlaying(false))
          setShowEasterEgg(true)
          setTimeout(() => setShowEasterEgg(false), 5000) // Ocultar el easter egg después de 2 segundos
          return 0
        }
      })
    }
  }

  return (
    <motion.div
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      className={`fixed bottom-4 left-4 cursor-pointer ${showEasterEgg ? 'fixed inset-0 bg-black flex justify-center items-center' : ''}`}
    >
    <Image 
        src="/images/pelota.png" 
        alt="Logo Racing"
        width={120}
        height={120}
        className="w-12 h-12"
      />
      {showEasterEgg && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed inset-0 bg-black flex justify-center items-center"
          >
          <Image
        src="/images/racing-club-avellaneda.png" 
        alt="Logo Racing"
        width={120} 
        height={120}
        className="w-48 h-48"
      />
        </motion.div>
      )}
    </motion.div>
  )
}
