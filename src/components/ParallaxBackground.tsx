'use client'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll()
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3])
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <motion.div
      style={{ 
        scale, 
        opacity,
        y: backgroundY,
      }}
      className="fixed inset-0 -z-10 bg-gradient-to-br from-racing-primary to-racing-dark"
    />
  )
}