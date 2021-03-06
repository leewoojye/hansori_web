import React, { Component } from "react";
import Slider from "react-slick";
import "../asset/css/slick/slick.css";
import "../asset/css/Slide.css";

import slide1 from "../asset/main/slide1.png";
import slide3 from "../asset/main/slide3.jpg";
import whiteArrow from "../asset/main/arrow.png";

import ReactFullpage from "@fullpage/react-fullpage";
import Test from "./Test";

function Arrow(props) {
  const { onClick, image, next } = props;
  return (
    <div
      className={next ? "slide-button" : "slide-button slide-prev"}
      onClick={onClick}
    >
      <img src={image} alt="" />
    </div>
  );
}

export default class Main extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "ease-in",
      nextArrow: <Arrow image={whiteArrow} next />,
      prevArrow: <Arrow image={whiteArrow} next={false} />,
    };

    return (
      <ReactFullpage
        scrollOverflow={true}
        render={({ state, fullpageApi }) => (
          <div id="fullpage-wrapper">
            <div className="section">
              <Slider {...settings}>
                <div style={{ overflow: "hidden" }}>
                  <img
                    src={slide1}
                    style={{
                      height: `${
                        window.innerHeight > window.innerWidth
                          ? "100vh"
                          : "auto"
                      }`,
                      width: `${
                        window.innerHeight > window.innerWidth
                          ? "auto"
                          : "100vw"
                      }`,
                    }}
                    alt=""
                  />
                  {/* <div
                    style={{
                      width: "100vw",
                      height: "100vh",
                      backgroundColor: "#FFE4B5",
                    }}
                  /> */}
                  <div className="slide-cover">
                    {window.innerHeight > window.innerWidth ? (
                      // <div className="bounce" style={{ fontSize: '12vw' }}>
                      <div className="fadein" style={{ fontSize: "12vw" }}>
                        ???????????????
                        <br />
                        ?????????
                        <br />
                        ?????????
                      </div>
                    ) : (
                      <div className="bounce">??????????????? ????????? ?????????</div>
                    )}
                  </div>
                  <div className="slide-cover">
                    <div class="arrow">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3>
                    <img
                      src={slide3}
                      style={{
                        height: `${
                          window.innerHeight > window.innerWidth
                            ? "100vh"
                            : "auto"
                        }`,
                        width: `${
                          window.innerHeight > window.innerWidth
                            ? "auto"
                            : "100vw"
                        }`,
                      }}
                      alt=""
                    />
                    {/* <div
                      style={{
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "#FFC6C3",
                      }}
                    /> */}
                    <div className="slide-cover">
                      <div class="arrow">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </h3>
                </div>
              </Slider>
            </div>

            <div className="section">
              <Test />
            </div>
          </div>
        )}
      />
    );
  }
}
