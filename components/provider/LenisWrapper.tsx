// 'use client'

// import { useEffect } from 'react'
// import Lenis from '@studio-freight/lenis'

// export default function LenisWrapper({ children }: { children: React.ReactNode }) {
//     useEffect(() => {
//         const lenis = new Lenis()

//         function raf(time: number) {
//             lenis.raf(time)
//             requestAnimationFrame(raf)
//         }

//         requestAnimationFrame(raf)
//     }, [])

//     return <>{children}</>
// }


// 'use client'

// import { createContext, useContext, useEffect, useRef } from 'react'
// import Lenis from '@studio-freight/lenis'

// const LenisContext = createContext<{ lenis: Lenis | null }>({ lenis: null })

// export function useLenis() {
//   return useContext(LenisContext)
// }

// export default function LenisWrapper({ children }: { children: React.ReactNode }) {
//   const lenisRef = useRef<Lenis | null>(null)

//   useEffect(() => {
//     const lenis = new Lenis()
//     lenisRef.current = lenis

//     function raf(time: number) {
//       lenis.raf(time)
//       requestAnimationFrame(raf)
//     }

//     requestAnimationFrame(raf)

//     return () => lenis.destroy()
//   }, [])

//   return (
//     <LenisContext.Provider value={{ lenis: lenisRef.current }}>
//       {children}
//     </LenisContext.Provider>
//   )
// }

'use client'

import { createContext, useContext, useEffect, useRef, useState } from 'react'
import Lenis from '@studio-freight/lenis'

const LenisContext = createContext<{ lenis: Lenis | null }>({ lenis: null })

export function useLenis() {
  return useContext(LenisContext)
}

interface LenisWrapperProps {
  children: React.ReactNode
  className?: string
}

export default function LenisWrapper({ children, className }: LenisWrapperProps) {
  const lenisRef = useRef<Lenis | null>(null)
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis()
    lenisRef.current = lenis
    setLenisInstance(lenis)

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <LenisContext.Provider value={{ lenis: lenisInstance }}>
      <div className={className} data-lenis-root>
        {children}
      </div>
    </LenisContext.Provider>
  )
}


