import React, { useState } from 'react';
import Content from './components/Content';
import './styles/reset.css';
import './App.scss';
import { navbarTitles } from './variables/navbarTitles';
import { Header } from './components/Header';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const App = () => {
  const [currentNavItem, setCurrentNavItem] = useState(navbarTitles.works);

  return (
    <div className='app'>
      <header className='app__header'>
        <Header currentNavItem={currentNavItem} setCurrentNavItem={setCurrentNavItem} />
      </header>
      {currentNavItem === navbarTitles.works ? (
        <main className='app__main'>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <Content currentNavItem={currentNavItem} />
          </SwiperSlide>
          <SwiperSlide>
            <Content currentNavItem={currentNavItem} />
          </SwiperSlide>
          <SwiperSlide>
            <Content currentNavItem={currentNavItem} />
          </SwiperSlide>
        </Swiper>
      </main>
      ) : (
        <div className='app__about'/>
      )}
    </div>
  );
};

export default App;
