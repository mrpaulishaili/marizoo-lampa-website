import styled from "styled-components";

import {
  laptop,
  laptopMd,
  mobile,
  mobileMd,
  tablet,
  tabletMd,
} from "../../Global.Style";

export const StyledSection = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  padding: 4.5rem 2rem;
  overflow: hidden;
  ${mobile({ padding: "4.75rem 2.5rem" })};
  ${mobileMd({ padding: "5rem 3rem" })};
  ${tablet({ padding: "5.25rem 3.5rem" })};
  ${tabletMd({ padding: "5.5rem 4rem" })};
  ${laptop({ padding: "6rem 6rem" })};
  ${laptopMd({})};
`;

export const StyledSectionTitle = styled.div`
  display: flex;
  align-items: center;

  .section__title-line {
    width: 6px;
    height: 3rem;
    background: var(--color-brand);
    margin-right: 0.5rem;
    margin-bottom: 2rem;
  }

  .section__title-text {
    font-size: 2.3rem;
    font-family: var(--font-family-narrow);
    font-weight: var(--fw-bold);
    text-transform: uppercase;
    letter-spacing: 150%;
    transition: 0.4s ease;
    margin-bottom: 1.5rem;
    display: inline-block;
    width: 100%;
    height: 100%;
    font-family: var(--font-family-alt);
  }

  /* /420 */
  ${mobile({})}
  /* 576 */
  ${mobileMd({})} /* 768 */ 
  /* 992 */
`;
