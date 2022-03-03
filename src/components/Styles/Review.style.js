import styled from "styled-components";
import { tablet, tabletLg } from "../../Global.Style";

export const StyledReviews = styled.div`
  width: 100vw;
  height: 100%;
  max-width: 1200px;
  background: var(--color-bg-dark-2);
  color: var(--color-bg-dark-text);

  /* <section> */

  .reviews__container {
    width: 100%;
    height: 100%;
  }

  .reviews__title {
    font-family: var(--font-family-alt);
    font-size: 1.7rem;
    font-weight: var(--fw-bolder);
  }

  .reviews__card-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    /* media 768 */
    ${tablet({ flexDirection: "row", gap: "3rem" })}

    /* media 1050 */
        ${tabletLg({ alignItems: "baseline", rowGap: "0" })}
  }

  /* reviews card */
  .reviews__card-card {
    width: 280px;
    height: 210px;
    margin: 2rem 0;
    padding: 1rem;
    background: var(--color-bg-dark-1);
    /* 768 */
    ${tablet({ margin: "2rem 0 0" })}
  }

  .reviews__card-desc {
    margin: 1rem 0;
    line-height: 130%;
  }

  .reviews__card-name {
    font-family: var(--font-family-alt);
    letter-spacing: 1px;
    font-weight: var(--fw-bold);
  }
`;
