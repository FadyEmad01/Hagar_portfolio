"use client"

import { useEffect, useState } from "react"

const screens = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}

export const useScreenSize = () => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth)
      window.addEventListener("resize", handleResize)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  const lessThan = (size: keyof typeof screens): boolean => {
    const screenSize = parseInt(screens[size], 10)
    return windowWidth < screenSize
  }

  const greaterThan = (size: keyof typeof screens): boolean => {
    const screenSize = parseInt(screens[size], 10)
    return windowWidth > screenSize
  }

  const between = (
    minSize: keyof typeof screens,
    maxSize: keyof typeof screens
  ): boolean => {
    const minScreenSize = parseInt(screens[minSize], 10)
    const maxScreenSize = parseInt(screens[maxSize], 10)
    return windowWidth > minScreenSize && windowWidth < maxScreenSize
  }

  return { width: windowWidth, lessThan, greaterThan, between }
}

