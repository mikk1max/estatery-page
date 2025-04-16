import React, { useState, useEffect } from 'react';
import CircularProgress from '../CircularProgress/CircularProgress.jsx';
import s from './Testimonials.module.css';
import testimonials from '../../assets/data/testimonials.json';
import clsx from 'clsx';
import { useScreenWidth } from '../hooks/useScreenWidth.js';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isTextFading, setIsTextFading] = useState(false);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft < 10) {
          return prevTimeLeft + 1;
        } else {
          return 0;
        }
      });
    }, 1000);

    const indexInterval = setInterval(() => {
      setIsTextFading(true);
      setTimeout(() => {
        setIsTextFading(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 1000);
    }, 11000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(indexInterval);
    };
  }, []);

  return (
    <section className={s.testimonialsSection}>
      <div className={s.contentWrapper}>
        <h2 className={s.title}>Testimonials</h2>
        <p className={s.subTitle}>See what our property managers, landlords, and tenants have to say</p>
      </div>

      <div className={s.rentersContainer}>
        <p
          className={clsx(s.text, { [s.fadeOut]: isTextFading, [s.fadeIn]: !isTextFading })}
        >{`“${testimonials[currentIndex].text}”`}</p>
        <p className={clsx(s.author, { [s.fadeOut]: isTextFading, [s.fadeIn]: !isTextFading })}>
          <b>{testimonials[currentIndex].author}, </b>
          <span>{testimonials[currentIndex].position}</span>
        </p>

        <div className={s.circlesContainer}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={s.glowCircle}>
              <CircularProgress
                value={index === currentIndex ? timeLeft * 10 : 0}
                imageSrc={testimonial.profileImage}
                alt={testimonial.author}
                size={screenWidth >= 375 ? 72 : 64 }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
