import { Wrapper, Overlay } from './MobileNav.styled'
interface Props {
  open: boolean
  children: any
}
function MobileNav({ open, children }: Props) {
  return (
    <Overlay open={open}>
      <Wrapper open={open}>{children}</Wrapper>
    </Overlay>
  )
}

export default MobileNav
