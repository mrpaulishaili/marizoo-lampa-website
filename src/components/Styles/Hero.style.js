import styled from "styled-components";

export const StyledHero = styled.div`
    width: 100vw;
    height: calc(100vh - 6rem);
    max-width: 1200px;
    display: flex;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    color: var(--color-text-1);
    position: relative;
    

    &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    }

    .hero__datas{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        z-index: 2;
    }

    .hero__image{
        position: absolute;
        /* top: 0; */
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
    }

    .hero__titles{
        color: var(--color-black);
    }
    .hero__titles-1{
        font-family: var(--font-family-alt);
        
    }

    .hero__titles-2{
        font-family: var(--font-family-alt);

    }

    .hero__subtitles{
        margin-top: 2rem;
        color: var(--color-black);
    }
    .hero__subtitles-1{
        margin-bottom: .4rem;
    }
    .hero__subtitles-2{}

    .hero__button{
        margin-top: 2rem;
        width: 50%;
    }

`;
