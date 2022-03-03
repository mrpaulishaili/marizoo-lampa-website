import styled from "styled-components";
import { mobileMd, tablet } from "../../Styles/Global.Style";

/* 00.*/
export const StyledGallery = styled.div`
  width: 100vw;
  height: 100%;
  color: var(--color-text-1);
  background: var(--color-bg-2);
  max-width: 1200px;

  /* <Section> */

  .gallery__container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .gallery__datas {
    width: 100%;
    height: 100%;
  }

  /*  <SectionTitle> component*/

  .gallery__card-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 3rem;

    /* media 576 */
    ${mobileMd({ gap: "2rem" })}
    /* media 768 */
    ${tablet({ flexDirection: "row" })}
  }

  .gallery__card {
    width: 280px;
    height: auto;
    padding: 1.5rem;
    margin-bottom: 1rem;
    background: var(--color-bg-1);
  }

  .gallery__card-title {
    font-size: 1.7rem;
    margin-bottom: 1rem;
    width: 80%;
  }

  .gallery__card-desc {
    line-height: 130%;
    width: 100%;
    /* media 576 */
    ${mobileMd({ width: "80%" })}
  }

  .gallery__images {
    width: 100%;
    height: 100%;
  }

  .gallery__images-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
    justify-content: center;
    flex-wrap: wrap;
    /* media 768 */
    ${tablet({ flexDirection: "row", gap: "2rem" })}
  }

  .gallery__images-card {
    width: 280px;
    height: 500px;
    padding: 1.5rem;
    margin-bottom: 1rem;
    background: var(--color-bg-1);
    position: relative;
    margin: 0 0 2rem;
  }

  .gallery__images-card-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  .gallery__images-card-title {
    font-size: 1rem;

    color: black;
    position: absolute;
    top: 5%;
    left: 5%;
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
/* media 1200 */
/* ${laptop({})} */
