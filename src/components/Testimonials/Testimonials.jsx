import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import CircularProgress from '../CircularProgress/CircularProgress.jsx';
import AnimatedText from '../AnimatedText/AnimatedText.jsx';
import { useScreenWidth } from '../../hooks/useScreenWidth.js';
import testimonials from '../../assets/data/testimonials.json';
import s from './Testimonials.module.css';
import { PROGRESS_MAX, TESTIMONIAL_DURATION } from '../../constants/basic.js';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isTextFading, setIsTextFading] = useState(false);
  const screenWidth = useScreenWidth();

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setTimeLeft((prev) => (prev < PROGRESS_MAX ? prev + 1 : 0));
    }, 1000);

    const testimonialInterval = setInterval(() => {
      setIsTextFading(true);
      setTimeout(() => {
        setIsTextFading(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 1000);
    }, TESTIMONIAL_DURATION * 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(testimonialInterval);
    };
  }, []);

  const { text, author, position } = testimonials[currentIndex];
  const progressSize = screenWidth >= 375 ? 72 : 64;

  return (
    <section className={s.testimonialsSection}>
      <div className={s.contentWrapper}>
        <AnimatedText as="h2" className={s.title}>
          Testimonials
        </AnimatedText>
        <AnimatedText className={s.subTitle}>
          See what our property managers, landlords, and tenants have to say
        </AnimatedText>
      </div>

      <div className={s.rentersContainer}>
        <p className={clsx(s.text, { [s.fadeOut]: isTextFading, [s.fadeIn]: !isTextFading })}>{`“${text}”`}</p>
        <p className={clsx(s.author, { [s.fadeOut]: isTextFading, [s.fadeIn]: !isTextFading })}>
          <b>{author}, </b>
          <span>{position}</span>
        </p>

        <div className={s.circlesContainer}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={s.glowCircle}>
              <CircularProgress
                value={index === currentIndex ? timeLeft * 10 : 0}
                imageSrc={testimonial.profileImage}
                alt={testimonial.author}
                size={progressSize}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
