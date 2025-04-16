import React, { useState } from 'react';
import s from './WeOffer.module.css';
import CardSlider from '../CardSlider/CardSlider';
import houses from '../../assets/data/houses.json';
import apartments from '../../assets/data/apartments.json';
import sprite from '../../assets/icons.svg';
import { SwiperSlide } from 'swiper/react';
import { apartmentsOption, houseOption } from '../../constants/basic';
import NoItems from '../Errors/NoItems';
import AnimatedText from '../AnimatedText/AnimatedText';

const WeOffer = () => {
  const [selectedOption, setSelectedOption] = useState(houseOption);
  const [propertiesItems, setPropertiesItems] = useState(houses);

  const cardBreakpoints = {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 12,
      slidesOffsetAfter: 16,

    },
    576: {
      slidesPerView: 1.5,
      spaceBetween: 16,
      slidesOffsetAfter: 16,

    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 24,
      slidesOffsetAfter: 16,
 
    },
    1090: {
      slidesPerView: 2.5,
      spaceBetween: 32,
      slidesOffsetAfter: 40,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      slidesOffsetAfter: 40,
      
    },
  };
  

  const handleChangeOption = (option) => {
    if (option === selectedOption) return;
    setSelectedOption(option);
    setPropertiesItems(option === houseOption ? houses : apartments);
  };

  return (
    <section className={s.weOfferSection}>
      <div className={s.tabContainer}>
        <div className={s.tabBackground}>
          <button
            type="button"
            className={selectedOption === houseOption ? s.selectedTab : ''}
            onClick={() => handleChangeOption(houseOption)}
          >
            {houseOption}
          </button>
          <button
            type="button"
            className={selectedOption === apartmentsOption ? s.selectedTab : ''}
            onClick={() => handleChangeOption(apartmentsOption)}
          >
            {apartmentsOption}
          </button>
        </div>
      </div>

      <div className={s.contentWrapper}>
        <AnimatedText as="h2" className={s.contentTitle}>
          We make it easy for houses and apartments.
        </AnimatedText>
        <AnimatedText className={s.contentText}>
          Whether it's selling your current home, getting financing, or buying a new home, we make it easy and
          efficient. The best part? you'll save a bunch of money and time with our services.
        </AnimatedText>
      </div>

      <div className={s.sliderWrapper}>
        <CardSlider breakpoints={cardBreakpoints}>
          {propertiesItems.length === 0 ? (
            <NoItems property={selectedOption} />
          ) : (
            propertiesItems.map((item) => (
              <SwiperSlide className={s.sliderCard} id={item.id}>
                <div className={s.ribbon}>
                  <svg className={s.ribbonIcon} role="img" aria-hidden="true">
                    <use href={sprite + '#icon-stars'}></use>
                  </svg>
                  <b className={s.ribbonLabel}>{item.type}</b>
                </div>
                <img
                  src={item.images['1x']}
                  srcSet={`${item.images['1x']} 1x, ${item.images['2x']} 2x`}
                  alt={item.title}
                  className={s.cardImage}
                />

                <div className={s.sliderContentWrapper}>
                  <p className={s.price}>
                    <b>{`${item.currency}${item.price}`}</b>
                    <span>{`/${item.pricePer}`}</span>
                  </p>
                  <p className={s.title}>{item.title}</p>
                  <p className={s.address}>{item.address}</p>

                  <button type="button" className={s.favoriteBtn}>
                    <svg className={s.heart} role="img" aria-label="Like property">
                      <use href={sprite + '#icon-heart'}></use>
                    </svg>
                  </button>
                </div>
              </SwiperSlide>
            ))
          )}
        </CardSlider>
      </div>
    </section>
  );
};

export default WeOffer;
