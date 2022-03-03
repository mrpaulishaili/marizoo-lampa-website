import styled from "styled-components";
import { tablet } from "../../Global.Style";

export const StyledFooter = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  position: relative;
  background: var(--color-bg-dark-1);

  .footer__container {
    width: 100%;
    height: 100%;
    font-family: var(--font-family-narrow);
    color: var(--color-bg-dark-text);
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 150%;
    /* 768 */
    ${tablet({ flexDirection: "row" })}
  }

  /* navbar-logo */
  .navbar__logo {
    display: flex;
    position: absolute;
    top: 0;
    left: 10%;
    z-index: 9;
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
    transition: 0.3s ease;
    padding-bottom: 1rem;
    font-size: 3rem;
  }

  .navbar__logo-text {
    margin-left: rem;
    color: var(--color-black);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-left: 1rem;
    margin-top: 2rem;
    font-family: var(--font-family-alt);
    color: var(--color-bg-dark-text);
    font-size: 1.5rem;
  }

  /* Footer Social Media */
  .footer__socialMedia {
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4rem 0 2rem;
    gap: 2rem;
    font-size: 1.1rem;
  }

  .footer__socialMedia-logo {
    transition: 0.4s ease;
    cursor: pointer;
    height: 100%;
    width: 2rem;
  }

  .footer__socialMedia-logo:hover {
    color: var(--color-brand);
    font-size: 1.3rem;
  }

  /* Footer Address */
  .footer__address {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    /* 768 */
    ${tablet({ lineHeight: "130%" })}
  }
  .footer__address-1 {
  }
  .footer__address-2 {
  }
  .footer__address-3 {
  }

  /* Footer Copyright */
  .footer__copyright {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    font-size: 0.8rem;
    line-height: 140%;
    margin: 2rem 0;
  }
  .footer__copyright-text-1 {
  }
  .footer__copyright-text-2 {
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
