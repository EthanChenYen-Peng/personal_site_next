import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  toggleMenu: () => void
  isOpen: boolean
}

const Line = (props: any) => (
  <motion.line
    strokeWidth="3"
    strokeLinecap="round"
    transition={{ duration: 0.3 }}
    {...props}
  />
)
const MobileMenuBtn = React.forwardRef<HTMLButtonElement, Props>(
  (props, ref) => {
    return (
      <button
        className="z-10 h-[40px] w-[40px] lg:hidden"
        onClick={props.toggleMenu}
        ref={ref}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-primary stroke-secondary"
        >
          <Line
            animate={props.isOpen ? 'open' : 'closed'}
            x1="4.8"
            y1="7.9"
            x2="27.2"
            y2="7.9"
            variants={{
              closed: {
                rotate: '0deg',
                originX: 0,
              },
              open: {
                rotate: '45deg',
              },
            }}
          />
          <Line
            animate={props.isOpen ? 'open' : 'closed'}
            x1="27.2"
            y1="23.4"
            x2="4.8"
            y2="23.4"
            variants={{
              closed: {
                rotate: '0deg',
                originX: 0,
              },
              open: {
                rotate: '-45deg',
              },
            }}
          />
        </svg>
      </button>
    )
  }
)

MobileMenuBtn.displayName = 'MobileMenuBtn'
export default MobileMenuBtn
