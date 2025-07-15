'use client'

import { Mouse } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'

export default function SayScrollBlock() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.88, }}
        >
            <div className="flex items-center space-x-2">
                {/* Animated Mouse Icon */}
                <motion.div
                    // initial={{ opacity: 0, y: 0 }}
                    animate={{ y: [0, -4, 0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                >
                    <Mouse className="size-4 md:size-6 text-white " />
                </motion.div>

                {/* Scroll Down Text */}
                <motion.p
                    className="text-white text-sm font-light md:font-medium tracking-widest uppercase"
                    // initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                >
                    Scroll Down
                </motion.p>
            </div>
        </motion.div>

    )
}


// 'use client'

// import { motion } from 'framer-motion'
// import { MoveDown } from 'lucide-react'
// import { SpinningText } from './spinning-text'

// export default function SayScrollBlock() {
//   return (
//     <div className="relative w-48 h-48">
//       {/* Spinning Circular Text */}
//       <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
//         <SpinningText
//           radius={5.1}
//           fontSize={1}
//           className="font-light text-white leading-none"
//         >
//           {`s c r o ll d o w n • s c r o ll d o w n •  `}
//         </SpinningText>
//       </div>

//       {/* Center Bouncing Icon */}
//       <motion.div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//         animate={{ y: [0, 8, 0] }}
//         transition={{ duration: 1.5, repeat: Infinity }}
//       >
//         <MoveDown className="size-5 text-white" />
//       </motion.div>
//     </div>
//   )
// }
