import Hero from '../../components/Hero/Hero';
import Testimonials from '../../components/Testimonials/Testimonials';
import WeOffer from '../../components/WeOffer/WeOffer';
import s from './MainPage.module.css';

export default function MainPage() {
  return (
    <main className={s.main}>
      <Hero />
      <WeOffer />
      <Testimonials />
    </main>
  );
}
