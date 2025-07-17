"use client"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

// SOLUTION 1: Wrapper approach - Most recommended
export default function MovingImage() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["100vw", "-50vw"])

  return (
    <div className="relative">
      <div className="w-full overflow-x-hidden absolute -bottom-1">
        <section
          ref={containerRef}
          className="w-full h-auto bg-black"
        >
          <motion.img
            src="/images/moving.png"
            alt="Moving image"
            style={{ x }}
            transition={{ ease: "easeOut" }}
            className="md:w-100 w-50 h-auto object-cover pointer-events-none overflow-visible"
          />
        </section>
      </div>
    </div>

  )
}