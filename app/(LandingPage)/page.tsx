import ScrollVelocity from '@/components/animations/ScrollVelocity/ScrollVelocity'
import Footer from '@/components/layout/Footer'
import { TextReveal } from '@/components/magicui/text-reveal'
import Hero from '@/components/sections/Hero'
import MovingImage from '@/components/sections/MovingImage'
import MyWork from '@/components/sections/MyWork2'
import React from 'react'

export default function LandingPage() {
  return (
    <>
      <Hero />

      <div className='w-full h-auto bg-black sticky'>
        <TextReveal className=''>hellooz I'm Hagar Elshafye I study at Fine Arts Animation Department</TextReveal>
      </div>

      <MovingImage />

      <ScrollVelocity
        texts={['Be ✦ Creative ✦ With ✦ Hagar ✦ Elshafy ✦']}
        velocity={200}
        className="bg-black text-white border-y-4 font-syne"
        direction={-1}
      />
      
      <MyWork />


      <Footer />
    </>
  )
}
