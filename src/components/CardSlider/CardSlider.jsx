import { Swiper } from 'swiper/react';
import { Pagination, Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useScreenWidth } from '../../hooks/useScreenWidth';

const CardSlider = ({ children, breakpoints, navigation, pagination, ...props }) => {
  const screen = useScreenWidth();
  return (
    <Swiper
      modules={[Pagination, Keyboard, Navigation]}
      grabCursor={true}
      slidesPerView="auto"
      speed={800}
      slideToClickedSlide={true}
      pagination={
        pagination || { el: '.custom-pagination', clickable: true, dynamicBullets: true, dynamicMainBullets: 1 }
      }
      navigation={navigation}
      keyboard={{ enabled: true }}
      breakpoints={breakpoints}
      style={screen >= 1090 ? { paddingLeft: 32, paddingTop: 32, paddingBottom: 32 } : { paddingLeft: 8 }}
      // style={{padding: 40}}
      {...props}
    >
      {children}
    </Swiper>
  );
};

export default CardSlider;
