import React from 'react';
import s from './Hero.module.css';
import specialOffer from '../../assets/data/specialOffer.json';
import AnimatedText from '../AnimatedText/AnimatedText';

const Hero = () => {
  return (
    <section className={s.heroSection}>
      <div className={s.heroContainer}>
        <AnimatedText as="h1" className={s.heroTitle}>
          Buy, rent, or sell your property easily
        </AnimatedText>
        <AnimatedText as="p" className={s.heroSlogan}>
          A great platform to buy, sell, or even rent your properties without any commissions.
        </AnimatedText>
        <div className={s.heroStats}>
          <div className={s.statsItem}>
            <p>50k+</p>
            <p>renters</p>
          </div>
          <div className={s.statsItem}>
            <p>10k+</p>
            <p>properties</p>
          </div>
        </div>
      </div>

      <div className={s.containerWrapper}>
        <div className={s.specialOfferContainer}>
          <div className={s.map} />
          <div className={s.specialCard}>
            <img
              src={specialOffer.images['1x']}
              srcSet={`${specialOffer.images['1x']} 1x, ${specialOffer.images['2x']} 2x`}
              alt={specialOffer.title}
              className={s.offerImage}
            />

            <div className={s.contentWrapper}>
              <p className={s.price}>
                <b>{`${specialOffer.currency}${specialOffer.price}`}</b>
                <span>{`/${specialOffer.pricePer}`}</span>
              </p>
              <p className={s.title}>{specialOffer.title}</p>
              <p className={s.address}>{specialOffer.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
