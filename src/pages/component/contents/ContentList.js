import React, { useEffect } from 'react'
import { ContentCard1, ContentCard2, ContentCard3 } from './ContentCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import s from '@/styles/css/component/content/contentList.module.scss'
import BookStore from '@/pages/stores/BookStore';

const ContentListMain1 = () => {

  const {books, Bestsellers} = BookStore()

  // useEffect(()=>{
  //   Bestsellers()
  // },[])

  useEffect(()=>{
    async function fetchData(){
        await Bestsellers()
    }
    fetchData();
  },[])

  return (
    <Swiper
    slidesPerView={'3'}
    spaceBetween={50}
    className={`${s.content1} mySwiper`}>
        
          {/* {
            books.map((item)=>
            <SwiperSlide>
              <ContentCard1 item={item}/>
            </SwiperSlide>
            )
          } */}
    </Swiper>
  )
}



const ContentListMain2 = () => {

  const {books, Bestsellers} = BookStore()

  useEffect(()=>{
    async function fetchData(){
        await Bestsellers()
    }
    fetchData();
  },[])
  
  return (
    <Swiper
    slidesPerView={'2'}
    spaceBetween={40}
    className={` ${s.content2} mySwiper`}>
      {/* {
        books.map((item)=>
          <SwiperSlide>
            <ContentCard2 item={item}/>
          </SwiperSlide>
        )
      }                  */}
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