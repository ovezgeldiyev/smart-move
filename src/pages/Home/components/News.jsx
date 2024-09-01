import React from "react";
import Slider from "react-slick";

export default function News({ modul, modul2 }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    cssEase: "linear",
    slidesToShow: 1,
    speed: 20000,
    autoplay: true,
    autoplaySpeed: 0,
    draggable: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 300,
    cssEase: "linear",
    slidesToShow: 1,
    speed: 20000,
    autoplay: true,
    autoplaySpeed: 0,
    draggable: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    rtl: true,
  };
  return (
    <section className="news">
      <div className="news__inner">
        <div className="marquee-container">
          <div className="marquee">
            <div className="marquee-text">
              <div className="list">
                {modul?.map((item, index) => {
                  return (
                    <a key={index}>
                      <span>{item.value}</span>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="marquee-text duplicate ">
              <div className="list">
                {modul?.map((item, index) => {
                  return (
                    <a key={index}>
                      <span>{item.value}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="marquee-container">
          <div className="marquee ltr ">
            <div className="marquee-text ">
              <div className="list">
                {modul2?.map((item, index) => {
                  return (
                    <a key={index}>
                      <span>{item.value}</span>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="marquee-text duplicate ">
              <div className="list">
                {modul2?.map((item, index) => {
                  return (
                    <a key={index}>
                      <span>{item.value}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
