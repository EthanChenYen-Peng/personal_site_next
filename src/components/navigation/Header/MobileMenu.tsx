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
      className="relative  before:absolute before:left-0 before:-bottom-1 before:h-[3px] before:w-0 before:bg-secondary before:transition-all before:duration-200 before:content-[''] hover:before:w-full focus:outline-none "
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
            aria-label="Mobie menu"
            className="fixed inset-y-0 right-0 flex  w-3/5 flex-col justify-center bg-primary text-secondary"
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
        </DialogOverlay>
      )}
    </AnimatePresence>
  )
}
