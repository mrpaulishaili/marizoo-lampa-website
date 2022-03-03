import styled from "styled-components";

import { tablet, tabletLg, tabletMd } from "../../Global.Style";

export const StyledDatas = styled.div`
  width: 100vw;
  height: 100%;
  max-width: 1200px;
  color: var(--color-text-1);
  background: var(--color-bg-2);
  max-width: 1200px;

  .datas__container {
    width: 100%;
    height: 100%;
  }

  .datas__milestone-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1rem;
    margin-top: 1rem;
    /* 768 */
    ${tablet({ flexDirection: "row", gap: "2rem" })}
    /* 1050 */
        ${tabletLg({ marginTop: "2rem" })}
  }

  .datas__milestone-container-1 {
    width: 100%;
    height: 300px;
    flex: 1;
  }
  .datas__milestone-container-2 {
    width: 100%;
    height: 300px;
    flex: 1;
    display: flex;
    align-items: end;
  }
  .milestone__card-1 {
    width: 100%;
    height: 150px;
    /* 768 */
    ${tablet({
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    })}
  }
  .milestone__card-2 {
    width: 100%;
    height: 150px;
    /* 768 */
    ${tablet({
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    })}
  }
  .milestone__card-3 {
    width: 100%;
    height: 150px;
    /* 768 */
    ${tablet({
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    })}
  }

  .milestone__card-number {
    font-family: var(--font-family-alt);
    font-weight: var(--fw-bolder);
    font-size: 3rem;
    letter-spacing: -5px;
    /* 992 */
    ${tabletMd({ fontSize: "3.5rem" })}
    /* 1050 */
        ${tabletLg({ fontSize: "4rem" })}
  }
  .milestone__card-title {
    font-family: var(--font-family-alt);
    letter-spacing: 1px;
    /* 768 */
    ${tablet({ letterSpacing: "1px" })}
  }

  .datas__milestone-desc {
    width: 100%;
    height: 100%;
    flex: 1;
    height: 300px;
    line-height: 150%;
    /* 768 */
    ${tablet({ lineHeight: "120%" })}
  }
  .datas__milestone-desc-p:nth-child(1) {
    margin-bottom: 2.5rem;
  }
`;

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
