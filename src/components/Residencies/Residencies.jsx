import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import localData from '../../utils/slider.json';
import './Residencies.css';
import { sliderSettings } from '../../utils/common';
import { getProperties } from '../../services/api';

const Residencies = () => {
  const [cards, setCards] = useState(localData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch properties from backend; fallback to local slider.json if backend is not reachable.
    let mounted = true;
    getProperties().then(data => {
      if (!mounted) return;
      setLoading(false);
      if (!data) return; // fallback

      // Map backend property fields to card shape used by UI (name, price, bhk, price_start, detail, image)
      const mapped = data.map(p => ({
        name: p.title,
        price: String(p.pricePerMonth),
        bhk: p.bhk || 'NA',
        price_start: p.pricePerMonth ? `₹${p.pricePerMonth}` : 'N/A',
        detail: p.location || '',
        image: p.imageUrl || './r1.jpg',
        id: p._id || p.id
      }));

      setCards(mapped);
    }).catch(err => {
      console.warn('Residencies getProperties error', err);
      if (!mounted) return;
      setLoading(false);
      setError(err?.message || 'Failed to load properties');
    });

    return () => { mounted = false; };
  }, []);

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
            {cards.map((card, i) => (
              <SwiperSlide key={card.id || i}>
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
          {/* Accessibility-only status messages (do not change UI): */}
          <div aria-live="polite" style={{position: 'absolute', left: '-9999px'}}>
            {loading && 'Loading properties from server...'}
            {error && error}
          </div>
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
