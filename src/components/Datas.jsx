import React from "react";

import Section from "../UI/Section";
import SectionTitle from "../UI/SectionTitle";

import { StyledDatas } from "./Styles/Data.style";

const Datas = () => {
  return (
    <StyledDatas id="milestones">
      <Section>
        <div className="datas__container">
          <SectionTitle>Our Datas</SectionTitle>
          <div className="datas__milestone-container">
            <div className="datas__milestone-container-1">
              <div className="milestone__card-1">
                <span className="milestone__card-number">154</span>
                <p className="milestone__card-title">Different designs</p>
              </div>
              <div className="milestone__card-2">
                <span className="milestone__card-number">99</span>
                <p className="milestone__card-title">Patented Inventions</p>
              </div>
            </div>
            <div className="datas__milestone-container-2">
              <div className="milestone__card-3">
                <span className="milestone__card-number">467</span>
                <p className="milestone__card-title">Lorem ipsumlor</p>
              </div>
            </div>
            <div className="datas__milestone-desc">
              <p className="datas__milestone-desc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                dolorem ea earum error soluta sit ullam, quo optio illum
                assumenda! A quo quibusdam excepturi, provident corrupti at
                autem doloribus nesciunt.
              </p>
              <p className="datas__milestone-desc-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                commodi vero repellendus id, dolore saepe.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </StyledDatas>
  );
};

export default Datas;
