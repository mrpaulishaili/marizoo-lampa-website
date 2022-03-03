import styled from "styled-components";
import { laptop, tablet, tabletMd } from "../../Global.Style";

export const StyledToggleTheme = styled.div`
  cursor: pointer;
  font-size: 1.25rem;
  position: fixed;
  top: 4rem;
  right: 1.35rem;
  transition: all 0.3s ease;
  ${laptop({ fontSize: "25px" })};
  ${tablet({ fontSize: "18px" })};
  color: var(--color-gray);
  z-index: 13;
  /* 992 */
  ${tabletMd({ top: "2.2rem" })}
  /* 1200 */
  ${laptop({ right: "2.5rem" })}
`;
