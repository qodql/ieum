import React from 'react'
import { ContentCard1, ContentCard2, ContentCard3 } from './ContentCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import s from '@/styles/css/component/content/contentList.module.scss'

const ContentListMain1 = () => {
  return (
    <Swiper
    slidesPerView={'3'}
    spaceBetween={50}
    className={`${s.content1} mySwiper`}>
        <SwiperSlide>
          <ContentCard1/>
        </SwiperSlide>
        <SwiperSlide>
          <ContentCard1/>
        </SwiperSlide>
        <SwiperSlide>
          <ContentCard1/>
        </SwiperSlide>
        <SwiperSlide>
          <ContentCard1/>
        </SwiperSlide>
        <SwiperSlide>
          <ContentCard1/>
        </SwiperSlide>
                
    </Swiper>
  )
}

const ContentListMain2 = () => {
  return (
    <Swiper
    slidesPerView={'2'}
    spaceBetween={40}
    className={` ${s.content2} mySwiper`}>
      <SwiperSlide>
          <ContentCard2/>
      </SwiperSlide>                  
      <SwiperSlide>
          <ContentCard2/>
      </SwiperSlide>                  
      <SwiperSlide>
          <ContentCard2/>
      </SwiperSlide>                  
      <SwiperSlide>
          <ContentCard2/>
      </SwiperSlide>                  
      <SwiperSlide>
          <ContentCard2/>
      </SwiperSlide>                  
    </Swiper>
  )
}

const ContentListMain3 = () => {
  return (
    <Swiper 
    slidesPerView={'3'}
    spaceBetween={100}
    className={`${s.content3} mySwiper `}>
      <SwiperSlide>
        <ContentCard3/>
      </SwiperSlide> 
      <SwiperSlide>
        <ContentCard3/>
      </SwiperSlide> 
      <SwiperSlide>
        <ContentCard3/>
      </SwiperSlide> 
      <SwiperSlide>
        <ContentCard3/>
      </SwiperSlide> 
      <SwiperSlide>
        <ContentCard3/>
      </SwiperSlide> 
      <SwiperSlide>
        <ContentCard3/>
      </SwiperSlide> 
    </Swiper>
  )
}

export {ContentListMain1, ContentListMain2, ContentListMain3}