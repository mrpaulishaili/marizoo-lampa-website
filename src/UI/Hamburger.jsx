import React from "react";

// Using the term 'Styled' right behind the Component name enables to understand that it is the Style of that component that is being imorted and not another Component within the Component.

import { StyledHamburger } from "./Styles/Hamburger.style";

/*
    const Name = ({ ...destructured params... }) {}
        ***is same as***
    function Name ({ ...destructured params... }) {}
*/

// 'export default' can be declared right behind the Component to b e exported, if its only one component and it's the default component to be exported from the file.

export default function Hamburger({ toggleMenu, setToggleMenu }) {
  return (
    <StyledHamburger onClick={() => setToggleMenu(!toggleMenu)}>
      <span className={toggleMenu ? "line1 active" : "line1"}></span>
      <span className={toggleMenu ? "line2 active" : "line2"}></span>
      <span className={toggleMenu ? "line3 active" : "line3"}></span>
    </StyledHamburger>
  );
}
