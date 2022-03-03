import React from "react";

import Section from "../UI/Section";
import SectionTitle from "../UI/SectionTitle";
import { StyledReviews } from "./Styles/Review.style";

const Reviews = () => {
  return (
    <StyledReviews id="stories">
      <Section>
        <div className="reviews__container">
          <SectionTitle>Our Customers</SectionTitle>
          <div className="reviews__card-container">
            {/* Reviews Card 1 */}
            <div className="reviews__card-card">
              <div className="reviews__card-desc">
                Lorem ipsum, Libero maiores molestiae provident dolore at
                ducimus nobis? Consequatur nisi facilis ratione, adipisci
                deleniti, rem voluptas, corporis cupiditate illum provident
                earum veniam!
              </div>
              <div className="reviews__card-name">Bob Marley</div>
            </div>
            {/* Reviews Card 2 */}
            <div className="reviews__card-card">
              <div className="reviews__card-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur nisi facilis ratione, adipisci deleniti, rem
                voluptas, corporis cupiditate illum provident earum veniam!
              </div>
              <div className="reviews__card-name">Brandi Carlile</div>
            </div>
            {/* Reviews Card 3 */}
            <div className="reviews__card-card">
              <div className="reviews__card-desc">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
                maiores molestiae provident dolore at ducimus nobis rem
                voluptas, corporis cupiditate illum provident earum veniam!
              </div>
              <div className="reviews__card-name">Nicole Bus</div>
            </div>

            {/* Reviews Card end */}
          </div>
        </div>
      </Section>
    </StyledReviews>
  );
};

export default Reviews;
