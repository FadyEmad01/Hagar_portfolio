"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { getStaticImagePlaceholder, getColoredBlurPlaceholder } from "@/lib/plaiceholder"

interface BlurImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  sizes?: string
  priority?: boolean
  isStatic?: boolean
  onClick?: () => void
  blurColor?: "blue" | "green" | "orange" | "pink" | "yellow"
}

export default function BlurImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  sizes,
  priority = false,
  isStatic = false,
  onClick,
  blurColor = "blue",
}: BlurImageProps) {
  // Initialize with a default blur immediately
  const [blurDataURL, setBlurDataURL] = useState<string>(getStaticImagePlaceholder().blurDataURL)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Use simple static blur placeholders
    if (isStatic || src.includes("/placeholder.svg")) {
      const { blurDataURL } = getStaticImagePlaceholder()
      setBlurDataURL(blurDataURL)
    } else {
      // Use colored blur based on image or preference
      const { blurDataURL } = getColoredBlurPlaceholder(blurColor)
      setBlurDataURL(blurDataURL)
    }
    setIsLoading(false)
  }, [src, isStatic, blurColor])

  const imageProps = {
    src,
    alt,
    className: `${className} transition-opacity duration-300`,
    sizes,
    priority,
    placeholder: "blur" as const,
    blurDataURL, // This is now always guaranteed to have a value
    onClick,
    onLoad: () => setIsLoading(false),
  }

  if (fill) {
    return <Image {...imageProps} fill alt="Description of the image" />
  }

  return <Image {...imageProps} width={width} height={height} alt="Description of the image" />
}
