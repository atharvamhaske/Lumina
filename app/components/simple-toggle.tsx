"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function SimpleToggle() {
  const { setTheme, resolvedTheme } = useTheme()

  const handleToggle = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light")
  }

  return (
    <button
      onClick={handleToggle}
      className="fixed top-6 right-6 bg-background text-foreground hover:text-primary p-3 rounded-lg"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  )
} 