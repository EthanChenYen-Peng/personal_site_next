import { Wrapper } from "./MobileNav.styled";
interface Props {
  open: Boolean;
  children: any;
}
function MobileNav({ open, children }: Props) {
  return <Wrapper open={open}>{children}</Wrapper>;
}

export default MobileNav;
