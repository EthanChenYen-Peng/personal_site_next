import { useState } from 'react'
import { Wrapper } from "./ToggleBugger.styled";
function ToggleBugger() {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <Wrapper open={open} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </Wrapper>
  );
}

export default ToggleBugger;
