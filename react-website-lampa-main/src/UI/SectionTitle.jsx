import React from "react";

/* =============== STYLES =============== */
import { StyledSectionTitle } from "./Styles/Section.style";

/* =============== COMPONENT =============== */
export default function SectionTitle({ children }) {
  return (
    <StyledSectionTitle>
      <div className="section__title-line"></div>
      <div className="section__title-text">{children}</div>
    </StyledSectionTitle>
  );
}
