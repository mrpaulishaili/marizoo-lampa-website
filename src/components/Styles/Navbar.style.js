import styled from "styled-components";
import { laptop, mobileMd, tablet, tabletMd } from "../../Global.Style";

export const StyledNavbar = styled.div`
  width: 100vw;
  max-width: 1200px;
  cursor: pointer;
  position: relative;

  .navbar__container {
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    font-family: var(--font-family-narrow);
    background: var(--color-brand-alt);
    color: var(--color-text);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    z-index: 12;
  }

  .navbar__logo {
    display: flex;
    position: fixed;
    top: 0;
    left: 10%;
  }

  .navbar__logo-img:hover {
    background: var(--color-brand);
  }

  .navbar__logo-img {
    width: 50px;
    height: 60px;
    background: var(--color-bg-dark);
    color: var(--color-bg-dark-text);
    display: flex;
    align-items: flex-end;
    font-size: var(--fz-largest);
    padding-left: 0.85rem;
    font-size: 3rem;
    transition: 0.3s ease;
  }

  .navbar__logo-text {
    margin-left: rem;
    color: var(--color-black);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-left: 1rem;
    margin-top: 2rem;
    font-family: var(--font-family-alt);
    font-size: 1.5rem;
  }
  .navbar__logo-text1 {
  }
  .navbar__logo-text2 {
  }

  /* THE SHOW-MENU ON MOBILE */
  .navbar__links {
    width: 100%;
    max-width: 1200px;
    height: 100vh;
    position: fixed;
    top: 0;
    /* right: 0; */
    right: -100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--color-bg-dark);
    color: var(--color-bg-dark-text);
    padding-top: 40%;
    line-height: 400%;
    transition: 0.4s ease;
    font-family: var(--font-family-alt);
    z-index: 10;
    /* 576 */
    ${mobileMd({ paddingTop: "30%", lineHeight: "450%" })}
    /* 768 */
        ${tablet({ paddingTop: "20%", lineHeight: "500%" })}
        /* 992 */
        ${tabletMd({
      flexDirection: "row",
      height: "6rem",
      left: "0",
      background: "transparent",
      color: "var(--color-black)",
      paddingTop: "0",
      zIndex: "12",
      justifyContent: "end",
    })}
  }

  .navbar__active {
    right: 0;
  }

  .navbar__links-ul {
    text-align: center;
    /* 992 */
    ${tabletMd({ display: "flex", marginRight: "6rem" })}
    /* 1200 */
        ${laptop({ marginRight: "8rem" })}
  }

  .navbar__links-li {
    font-weight: var(--fw-medium);
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease;
    /* 992 */
    ${tabletMd({ marginRight: "2rem" })}
    /* 1200 */
        ${laptop({ marginRight: "4rem" })}

        &:hover {
      color: var(--color-brand);
    }
  }
`;

// How to use media queries
/* /420 */
// ${mobile({})}
/* 576 */
// ${mobileMd({})}
/* 768 */
// ${tablet({})}
/* 992 */
// ${tabletMd({})}
/* 1050 */
// ${tabletLg({})}
/* 1200 */
// ${laptop({})}
