'use client'
import { motion, Variants } from 'framer-motion'

const racingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

export const AnimatedText = ({ text, className }: { 
  text: string, 
  className?: string 
}) => {
  return (
    <motion.span 
      variants={racingVariants}
      initial="hidden"
      animate="visible"
      className={`inline-block ${className}`}
    >
      {text.split('').map((char, index) => (
        <motion.span 
          key={index} 
          variants={racingVariants}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}