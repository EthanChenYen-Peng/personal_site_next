import { X } from 'react-feather'
import type { INavLink } from './Header'
import Link from 'next/link'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import { AnimatePresence, motion } from 'framer-motion'
interface Props {
  isOpen: boolean
  closeMenu: () => void
  navLinks: INavLink[]
}

const MotionDialogContent = motion(DialogContent)

function NavLinkItem({
  path,
  title,
  index,
  closeMenu,
}: {
  path: string
  title: string
  index: number
  closeMenu: () => void
}) {
  return (
    <motion.li
      custom={index}
      animate="visible"
      initial="hidden"
      variants={{
        visible: (index) => ({
          translateX: '0px',
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: index * 0.3,
          },
        }),
        hidden: {
          translateX: '50px',
          opacity: 0,
        },
      }}
      key={title}
      onClick={closeMenu}
      className="relative  before:absolute before:left-0 before:-bottom-1 before:h-[3px] before:w-0 before:bg-secondary before:transition-all before:duration-200 before:content-[''] hover:before:w-full"
    >
      <Link href={path}>{title}</Link>
    </motion.li>
  )
}
export default function MobileMenu({ isOpen, closeMenu, navLinks }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <DialogOverlay className="fixed inset-0 bg-black/30">
          <DialogContent className="fixed inset-0 flex justify-end">
            <MotionDialogContent
              initial={{ translateX: '100%' }}
              animate={{ translateX: '0px' }}
              exit={{ translateX: '100%' }}
              transition={{
                ease: 'easeOut',
                duration: 0.3,
                when: 'beforeChildren',
                staggerChildren: 0.3,
              }}
              className="flex h-full w-3/5 flex-col justify-center bg-primary text-secondary"
            >
              <ul className="flex flex-col items-start gap-12 pl-10 text-2xl">
                {navLinks.map(({ path, title }, i) => (
                  <NavLinkItem
                    key={title}
                    path={path}
                    title={title}
                    index={i}
                    closeMenu={closeMenu}
                  />
                ))}
              </ul>
            </MotionDialogContent>
          </DialogContent>
        </DialogOverlay>
      )}
    </AnimatePresence>
  )
}
