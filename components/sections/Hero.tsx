"use client"

import { useEffect, useState } from "react"
import { motion, stagger, useAnimate } from "motion/react"
import Floating, { FloatingElement } from "../fancy/components/blocks/parallax-floating"
import { useLenis } from "../provider/LenisWrapper"
import SayScrollBlock from "../ui/SayScrollBlock"

const Hero = () => {
  const [scope, animate] = useAnimate()
  const { lenis } = useLenis()
  const [showScrollBlock, setShowScrollBlock] = useState(false) // ✅ Track when to show it

  useEffect(() => {
    // Run the animation
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
    animate("img", { filter: "blur(8px)" }, { duration: 0.8, delay: 1.2 })

    // Lock scroll using Lenis
    lenis?.stop()

    // Re-enable scroll after 3s
    const timeout = setTimeout(() => {

      setShowScrollBlock(true) // ✅ show component after intro
      // lenis?.start()

      setTimeout(() => {
        lenis?.start()
      }, 800)

    }, 3000)

    return () => {
      clearTimeout(timeout)
      lenis?.start()
    }

  }, [animate, lenis])

  return (
    <div
      className="flex w-dvw h-dvh justify-center items-center bg-black overflow-hidden"
      ref={scope}
    >
      {/* Text Section */}
      <motion.div
        className="z-30 text-center space-y-4 items-center flex flex-col"
        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <h1 className="sm:text-8xl text-6xl md:text-9xl font-semibold text-white font-syne">HAGAR</h1>
        <p className="text-white font-semibold font-syne">Fine Arts Student.</p>
      </motion.div>

      {/* Floating Images */}
      <Floating sensitivity={1} className="overflow-hidden">
        <FloatingElement depth={0.5} className="md:top-[40%] top-[20%] left-[3%]">
          <motion.img
            initial={{ opacity: 0, filter: "blur(0px)" }}
            animate={{ opacity: 1, filter: "blur(8px)" }}
            whileHover={{ scale: 1.05, filter: "blur(0px)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            src="/images/hagar.png"
            alt="Hagar image"
            loading="lazy"
            className="aspect-auto md:w-52 w-32 object-cover cursor-pointer transition-transform md:rounded-2xl rounded-lg"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="md:top-[-10%] top-[40%] md:left-[30%] left-[-10%]">
          <motion.img
            initial={{ opacity: 0, filter: "blur(0px)" }}
            animate={{ opacity: 1, filter: "blur(8px)" }}
            whileHover={{ scale: 1.05, filter: "blur(0px)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            src="/images/fine-arts.jpg"
            alt="fine-arts image"
            loading="lazy"
            className="md:w-72 w-40 object-cover cursor-pointer transition-transform backdrop-blur-3xl hover:backdrop-blur-none md:rounded-2xl rounded-lg"
          />
        </FloatingElement>

        <FloatingElement depth={2} className="md:bottom-[-10%] left-[53%]">
          <motion.img
            initial={{ opacity: 0, filter: "blur(0px)" }}
            animate={{ opacity: 1, filter: "blur(8px)" }}
            whileHover={{ scale: 1.05, filter: "blur(0px)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            src="/images/1-the-band.jpg"
            alt="band image"
            loading="lazy"
            className="aspect-auto md:w-64 w-36 object-cover cursor-pointer transition-transform backdrop-blur-3xl hover:backdrop-blur-none md:rounded-2xl rounded-lg"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[30%] right-[5%]">
          <motion.img
            initial={{ opacity: 0, filter: "blur(0px)" }}
            animate={{ opacity: 1, filter: "blur(8px)" }}
            whileHover={{ scale: 1.05, filter: "blur(0px)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            src="/images/girl-age-progress.jpg"
            alt="girl-age-progress image"
            loading="lazy"
            className="aspect-auto md:h-24 h-10 object-cover cursor-pointer transition-transform backdrop-blur-3xl hover:backdrop-blur-none md:rounded-2xl rounded-lg"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="md:bottom-[0%] bottom-[10%] left-[2%]">
          <motion.img
            initial={{ opacity: 0, filter: "blur(0px)" }}
            animate={{ opacity: 1, filter: "blur(8px)" }}
            whileHover={{ scale: 1.05, filter: "blur(0px)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            src="/images/background-finale.png"
            alt="background-finale image"
            loading="lazy"
            className="aspect-auto md:h-52 h-32 object-cover cursor-pointer transition-transform backdrop-blur-3xl hover:backdrop-blur-none md:rounded-2xl rounded-lg"
          />
        </FloatingElement>

        <FloatingElement depth={2} className="top-[70%] left-[77%]">
          <motion.img
            initial={{ opacity: 0, filter: "blur(0px)" }}
            animate={{ opacity: 1, filter: "blur(8px)" }}
            whileHover={{ scale: 1.05, filter: "blur(0px)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            src="/placeholder.svg"
            alt="band image"
            loading="lazy"
            className="w-28 h-28 md:w-36 md:h-48 object-cover cursor-pointer transition-transform backdrop-blur-3xl hover:backdrop-blur-none md:rounded-2xl rounded-lg"
          />
        </FloatingElement>
      </Floating>

      <div className="pointer-events-none absolute bottom-0 w-full bg-gradient-to-t from-black h-1/4"></div>
      {/* 👇 Scroll Block shown after intro */}
      {showScrollBlock && (
        <div className="absolute bottom-6 w-full flex justify-center z-50">
          <SayScrollBlock />
        </div>
      )}
    </div>
  )
}

export default Hero
