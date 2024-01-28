import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.scss";
function SliderImage() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="photo">
          <img
            src="https://preview.colorlib.com/theme/consultingbiz/assets/img/hero/h1_hero.jpg.webp"
            alt=""
          />
         <div className="text">
            <span>Committed to success</span>
            <h1>We help to grow <br /> your business</h1>
            <p>
              Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re
              voluptate <br /> velit esscillumlore eu quife nrulla parihatur.
            </p>
            <div className="btn">
              <h4>MORE ABOUT US</h4>
              <div className="opacity"></div>
            </div>
          </div>
        </div>
        <div className="photo">
          <img
            src="https://preview.colorlib.com/theme/consultingbiz/assets/img/hero/h1_hero.jpg.webp"
            alt=""
          />
          <div className="text">
            <span>Committed to success</span>
            <h1>We help to grow <br /> your business</h1>
            <p>
              Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re
              voluptate <br /> velit esscillumlore eu quife nrulla parihatur.
            </p>
            <div className="btn">
              <h4>MORE ABOUT US</h4>
              <div className="opacity"></div>
            </div>
          </div>
        </div>
        <div className="photo">
          <img
            src="https://preview.colorlib.com/theme/consultingbiz/assets/img/hero/h1_hero.jpg.webp"
            alt=""
          />
        <div className="text">
            <span>Committed to success</span>
            <h1>We help to grow <br /> your business</h1>
            <p>
              Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr indd re
              voluptate <br /> velit esscillumlore eu quife nrulla parihatur.
            </p>
            <div className="btn">
              <h4>MORE ABOUT US</h4>
              <div className="opacity"></div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}

export default SliderImage;
