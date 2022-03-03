import styled from "styled-components";
import { tabletMd } from "../../Global.Style";

export const StyledHamburger = styled.div`
  cursor: pointer;
  width: 24px;
  height: 18px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  position: fixed;
  top: 1.5rem;
  right: 1.2rem;
  z-index: 13;
  /* 992 */
  ${tabletMd({ display: "none" })}

  .line1 {
    width: 100%;
    height: 1.5px;
    background: var(--color-black);
    transition: all 1s ease;
    transform-origin: left;
    &.active {
      transform: rotate(45deg);
    }
  }

  .line2 {
    width: 100%;
    height: 1.5px;
    background-color: var(--color-black);
    transition: all 1s ease;

    &.active {
      opacity: 0;
    }
  }

  .line3 {
    width: 100%;
    height: 1.5px;
    background-color: var(--color-black);
    transition: all 1s ease;
    transform-origin: left;

    &.active {
      transform: rotate(-45deg);
    }
  }
`;
