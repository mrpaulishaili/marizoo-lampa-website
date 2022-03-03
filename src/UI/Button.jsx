import React from "react";

import { StyledButton } from "./Styles/Button.style";

export default function Button({ outline, children, onClick, type }) {
  return (
    <StyledButton outline={outline} onClick={onClick} type={type || "button"}>
      {children}
    </StyledButton>
  );
}

// HOW TO USE:
// <Button>just button</Button>
//<Button outline> outline button</Button>
