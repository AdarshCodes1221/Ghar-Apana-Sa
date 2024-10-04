import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import data from '../../utils/slider.json';
import './Residencies.css';
import { sliderSettings } from '../../utils/common';

const Residencies = () => {
  return (
    <div>
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-head flexcolstart">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Popular Residencies</span>
          </div>

          <Swiper {...sliderSettings}>
            <SliderButton/>
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="flexColStart r-card">
                  <img src={card.image} alt='home' />

                  {/* Showing price and price start */}
                  <span className="secondaryText r-price">
                    <span style={{color: "orange"}}>₹</span>
                    <span>{card.price}</span> / month
                  </span>

                  {/* Showing name and details */}
                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>

                  {/* Showing BHK and price start */}
                  <span className="secondaryText">
                    {card.bhk} | Starting at {card.price_start}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Residencies;

const SliderButton = () => {
  const swiper = useSwiper();

  return (
    <div className="r-button flexTop">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
