import React from "react";

import Button from "../../UI/Button";
import Section from "../../UI/Section";
import SectionTitle from "../../UI/SectionTitle";

import { StyledPrice } from "./Styles/Price.style";

const Price = () => {
  return (
    <StyledPrice id="price">
      <Section>
        <div className="price__container">
          <SectionTitle>Price</SectionTitle>
          <div className="price__card-container">
            {/* Price Card 1 */}
            <div className="price__card">
              <div className="price__card-title">Lampa</div>
              <div className="price__card-desc">
                <ul className="price__card-desc-ul">
                  <li className="price__card-desc-li">
                    Lorem ipsum dolor sit amet consectetur ex dignissimos minus.
                  </li>
                  <li className="price__card-desc-li">
                    Reiciendis ex dignissimos.
                  </li>
                  <li className="price__card-desc-li">
                    Reiciendis ex dignissimos amet consectetur.
                  </li>
                </ul>
              </div>
              <div className="price__card-price">
                <p className="price__card-number">$99</p>
                <Button>Purchase</Button>
              </div>
            </div>
            {/* Price Card 2 */}
            <div className="price__card">
              <div className="price__card-title">Lampa</div>
              <div className="price__card-desc">
                <ul className="price__card-desc-ul">
                  <li className="price__card-desc-li">
                    Lorem ipsum dolor sit amet consectetur ex dignissimos minus.
                  </li>
                  <li className="price__card-desc-li">
                    Reiciendis ex dignissimos.
                  </li>
                  <li className="price__card-desc-li">
                    Reiciendis ex dignissimos amet consectetur.
                  </li>
                </ul>
              </div>
              <div className="price__card-price">
                <p className="price__card-number">$119</p>
                <Button>Purchase</Button>
              </div>
            </div>
            {/* Price Card 3 */}
            <div className="price__card">
              <div className="price__card-title">Lampa</div>
              <div className="price__card-desc">
                <ul className="price__card-desc-ul">
                  <li className="price__card-desc-li">
                    Lorem ipsum dolor sit amet consectetur ex dignissimos minus.
                  </li>
                  <li className="price__card-desc-li">
                    Reiciendis ex dignissimos.
                  </li>
                  <li className="price__card-desc-li">
                    Reiciendis ex dignissimos amet consectetur.
                  </li>
                  <li className="price__card-desc-li">
                    Reiciendis ex blabla bla dignissimos amet consectetur.
                  </li>
                </ul>
              </div>
              <div className="price__card-price">
                <p className="price__card-number">$79</p>
                <Button>Purchase</Button>
              </div>
            </div>
            {/* Price Card end */}
          </div>
        </div>
      </Section>
    </StyledPrice>
  );
};

export default Price;
