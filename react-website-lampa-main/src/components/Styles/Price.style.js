import styled from "styled-components";
import { tablet, tabletLg } from "../../Styles/Global.Style";

export const StyledPrice = styled.div`
  width: 100vw;
  height: 100%;
  color: var(--color-text-1);
  background: var(--color-bg-2);
  max-width: 1200px;

  .price__container {
    width: 100%;
    height: 100%;
  }

  .price__card-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2rem;

    /* media 768 */
    ${tablet({ flexDirection: "row", columnGap: "4.5rem", marginTop: "2rem" })}

    /* media 1050 */
        ${tabletLg({ alignItems: "baseline" })}
  }

  .price__card {
    margin-top: 1rem;
    border-bottom: 1px solid var(--color-text-1);
    border-top: 1px solid var(--color-text-1);
    margin-bottom: 3rem;
    background: var(--color-bg-2);
    width: 280px;
  }

  .price__card-title {
    font-size: 1.7rem;
    margin: 0.75rem 0 2rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--color-text-1);
    font-family: var(--font-family-alt);
  }

  .price__card-desc {
    padding: 0 1rem;
  }

  .price__card-desc-ul {
    list-style: square;
  }

  .price__card-desc-li {
    margin-bottom: 0.7rem;
  }

  .price__card-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
  }

  .price__card-number {
    font-size: 1.4rem;
    font-weight: var(--fw-bolder);
    font-family: var(--font-family-alt);
  }
`;

/* MEDIA QUERIES --------------  */
/* media 420 */
/* ${mobile({})} */
/* media 576 */
/* ${mobileMd({})} */
/* media 768 */
/* ${tablet({})} */
/* media 992 */
/* ${tabletMd({})} */
/* media 1050px */
/* ${tabletLg({})} */
/* media 1200 */
/* ${laptop({})} */
