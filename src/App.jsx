import React, { useState } from "react";

/* =============== UI COMPONENTS =============== */
import Datas from "./components/datas/Datas";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Price from "./components/price/Price";
import Reviews from "./components/reviews/Reviews";
import Hamburger from "./UI/Hamburger";
import ToggleTheme from "./UI/ToggleTheme";

/* =============== STYLES =============== */
import styled from "styled-components";
import { GlobalStyles } from "./Global.Style";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function App() {
  /* =============== STATES =============== */
  const [mainCss, setMainCss] = useState("light");
  const toggleTheme = () => {
    setMainCss((currentCss) => (currentCss === "light" ? "dark" : "light"));
  };
  const [toggleMenu, setToggleMenu] = useState(false);

  /* =============== COMPONENT =============== */
  return (
    <>
      <GlobalStyles />
      <StyledApp className={`${mainCss}-theme`}>
        <ToggleTheme onToggleTheme={toggleTheme} mainCss={mainCss} />
        <Hamburger toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        <Navbar toggleMenu={toggleMenu} />
        <Hero />
        <Gallery />
        <Price />
        <Reviews />
        <Datas />
        <Footer />
      </StyledApp>
    </>
  );
}
