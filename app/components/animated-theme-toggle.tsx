"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { shadowsIntoLight, bangers } from "@/app/fonts/fonts"

export function AnimatedThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [isAnimating, setIsAnimating] = React.useState(false)
  const [targetMode, setTargetMode] = React.useState<string>("")

  const handleToggle = () => {
    const newTheme = resolvedTheme === "light" ? "dark" : "light"
    setTargetMode(newTheme)
    setIsAnimating(true)
    
    // Change theme mid-animation
    setTimeout(() => {
      setTheme(newTheme)
    }, 500)
    
    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false)
      setTargetMode("")
    }, 1200)
  }

  return (
    <>
      {/* Animated Overlay - Shows Target Mode Colors */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ 
              clipPath: "circle(0px at calc(100% - 48px) 48px)" 
            }}
            animate={{ 
              clipPath: "circle(250vh at calc(100% - 48px) 48px)" 
            }}
            exit={{ 
              clipPath: "circle(0px at calc(100% - 48px) 48px)" 
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1]
            }}
            className={`fixed inset-0 z-40 flex items-center justify-center ${
              targetMode === "dark" 
                ? "bg-[#121212]"  // Dark mode background
                : "bg-[#fcfcfc]"  // Light mode background
            }`}
            style={{
              pointerEvents: "none"
            }}
          >
            {/* Page Content Preview with Target Theme */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                delay: 0.2,
                duration: 0.5,
                ease: "easeOut"
              }}
            >
              <h1 className={`${shadowsIntoLight.className} text-4xl ${
                targetMode === "dark" 
                  ? "text-[#e2e8f0]"  // Dark mode text color (white)
                  : "text-[#171717]"  // Light mode text color (black)
              }`}>
                The Home Page of <span className={`${bangers.className} text-4xl ${
                  targetMode === "dark" 
                    ? "text-[#e2e8f0]"  // Dark mode text color (white)
                    : "text-[#171717]"  // Light mode text color (black)
                }`}>Devsletter</span>
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme Toggle Button */}
      <motion.button
        onClick={handleToggle}
        className="fixed top-6 right-6 bg-background text-foreground hover:text-primary p-3 rounded-lg transition-all duration-200 z-50"
        aria-label="Toggle theme"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        disabled={isAnimating}
      >
        <motion.div
          initial={false}
          animate={{ 
            rotate: resolvedTheme === "dark" ? 180 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          {resolvedTheme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </motion.div>
        <span className="sr-only">Toggle theme</span>
      </motion.button>
    </>
  )
} 