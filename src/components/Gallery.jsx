import React from "react";

import Section from "../../UI/Section";
import SectionTitle from "../../UI/SectionTitle";

import { StyledGallery } from "./Styles/Gallery.style";

const Gallery = () => {
  return (
    <StyledGallery id="gallery">
      <Section>
        <div className="gallery__container">
          <div className="gallery__datas">
            <SectionTitle>Gallery</SectionTitle>
            <div className="gallery__card-container">
              {/* gallery card 1*/}
              <div className="gallery__card">
                <div className="gallery__card-title">Pretty Little Lamp</div>
                <div className="gallery__card-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  dolorum quaerat ex quos, distinctio molestias necessitatibus
                  blanditiis.
                </div>
              </div>
              {/* gallery card 2*/}
              <div className="gallery__card">
                <div className="gallery__card-title">Creative Design</div>
                <div className="gallery__card-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  dolorum quaerat ex quos, distinctio molestias necessitatibus
                  blanditiis.
                </div>
              </div>
              {/* gallery card 3*/}
              <div className="gallery__card">
                <div className="gallery__card-title">
                  Environmentally Friendly
                </div>
                <div className="gallery__card-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  dolorum quaerat ex quos, distinctio molestias necessitatibus
                  blanditiis.
                </div>
              </div>
              {/* gallery card end*/}
            </div>
          </div>

          <div className="gallery__images">
            <div className="gallery__images-container">
              {/* images card 1 */}
              <div className="gallery__images-card">
                {/* <div className="gallery__images-card-img"></div> */}
                <img
                  className="gallery__images-card-img"
                  src="https://images.pexels.com/photos/973506/pexels-photo-973506.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="nice lamp"
                />
                {/* <div className="gallery__images-card-title">
                                    Ceiling Lamp
                                </div> */}
              </div>
              {/* images card 2 */}
              <div className="gallery__images-card">
                {/* <div className="gallery__images-card-img"></div> */}
                <img
                  className="gallery__images-card-img"
                  src="https://images.pexels.com/photos/1129413/pexels-photo-1129413.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="pretty lamp"
                />
                {/* <div className="gallery__images-card-title">
                                    Floor Lamp
                                </div> */}
              </div>
              {/* images card 3 */}
              <div className="gallery__images-card">
                {/* <div className="gallery__images-card-img"></div> */}
                <img
                  className="gallery__images-card-img"
                  src="https://images.pexels.com/photos/266688/pexels-photo-266688.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="cool lamp"
                />
                {/* <div className="gallery__images-card-title">
                                    Wall Lamp
                                </div> */}
              </div>
              {/* images card end */}
            </div>
          </div>
        </div>
      </Section>
    </StyledGallery>
  );
};

export default Gallery;
