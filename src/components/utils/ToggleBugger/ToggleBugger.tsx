import { Wrapper } from "./ToggleBugger.styled";

interface Props {
  open: boolean;
  onClick: Function;
}
function ToggleBugger({ open, onClick }: Props) {
  return (
    <Wrapper open={open} onClick={() => onClick()}>
      <span></span>
      <span></span>
      <span></span>
    </Wrapper>
  );
}

export default ToggleBugger;
