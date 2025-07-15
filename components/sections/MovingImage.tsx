"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function MovingImage() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // triggers between scroll range
  })

  const x = useTransform(scrollYProgress, [0, 1], ["100vw", "0vw"]) // right to left

  return (
    <div ref={containerRef} className="bg-gray-100 relative">
      <motion.img
        src="/images/hagar.png"
        alt="Moving image"
        style={{ x }}
        transition={{ ease: "easeOut" }}
        className=" w-50 h-auto object-cover rounded-xl shadow-lg absolute bottom-0"
      />
    </div>
  )
}
