import React from "react";

import Button from "../UI/Button";
import Section from "../UI/Section";

import { StyledHero } from "./Styles/Hero.style";

const Hero = () => {
  return (
    <StyledHero id="home">
      <Section>
        <div className="hero__datas">
          <img
            className="hero__image"
            src="https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="lampa"
          />
          <div className="hero__titles">
            <h1 className="hero__titles-1">We make</h1>
            <h1 className="hero__titles-2">Custom light</h1>
          </div>
          <div className="hero__subtitles">
            <h3 className="hero__subtitles-1">Environmentally friendly</h3>
            <h3 className="hero__subtitles-2">Made for your delight</h3>
          </div>
          <div className="hero__button">
            <Button>View More</Button>
          </div>
        </div>
      </Section>
    </StyledHero>
  );
};

export default Hero;
