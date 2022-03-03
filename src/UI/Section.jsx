import React from "react";

/* =============== STYLES =============== */
import { StyledSection, StyledSectionTitle } from "./Styles/Section.style";

/* =============== COMPONENT =============== */
export default function Section({ children }) {
  return <StyledSection>{children}</StyledSection>;
}
