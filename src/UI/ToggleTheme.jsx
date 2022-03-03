import React from "react";

/* =============== ICONS =============== */
import { RiSunLine, RiMoonLine } from "react-icons/ri";

/* =============== STYLES =============== */
import { StyledToggleTheme } from "./Styles/ToggleTheme.style";

/* =============== COMPONENT =============== */
export default function ToggleTheme({ onToggleTheme, mainCss }) {
  return (
    <StyledToggleTheme onClick={onToggleTheme}>
      {mainCss === "light" ? <RiMoonLine /> : <RiSunLine />}
    </StyledToggleTheme>
  );
}
