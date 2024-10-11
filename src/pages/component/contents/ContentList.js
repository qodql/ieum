import React, { useEffect } from 'react'
import { ContentCard1, ContentCard2, ContentCard3 } from './ContentCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import s from '@/styles/css/component/content/contentList.module.scss'
import BookStore from '@/pages/stores/BookStore';

const ContentListMain1 = (props) => {


  return (

    <Swiper
    slidesPerView={'3'}
    spaceBetween={50}
    className={`${s.content1} mySwiper`}>
      {
        props.mainItems.BlogBest.item.map((item)=>
        <SwiperSlide>
          <ContentCard1 item={item} key={item.itemid}/>
        </SwiperSlide>
        )
      }
    </Swiper>
  )
}



const ContentListMain2 = (props) => {

  
  return (
    <Swiper
    slidesPerView={'2'}
    spaceBetween={40}
    className={` ${s.content2} mySwiper`}>
      {
        props.mainItems.ItemNewAll.item.map((item)=>
          <SwiperSlide>
            <ContentCard2 item={item} key={item.itemid}/>
          </SwiperSlide>
        )
      }                  */}
    </Swiper>
  )
}

const ContentListMain3 = (props) => {

  // const [cate, setCate] = useState('1');
  const {category, itemApi, loading} = BookStore();

  // // const sendCateNum = ()=>{
  // //   props.categoryNum(props.cate)
  // // }
  // // sendCateNum();

  useEffect( () => {
    
    const coverSize = 'Big'; 3
    async function fetchData(){
      await itemApi('cate', props.cate, coverSize);
    }
    if(props.cate){
        fetchData();
    }
  }, [props.cate]);

  
  if (loading) return <div className={s.loading}>
                        <p className={s.loadingText}>Loading...</p>
                      </div>

  console.log(props)

  return (
    <Swiper 
    slidesPerView={'3'}
    spaceBetween={100}
    className={`${s.content3} mySwiper `}>
      {
        category.ItemEditorChoice.item.map((item)=>
          <SwiperSlide>
            <ContentCard3 item={item} key={item.itemid}/>
          </SwiperSlide>
        )
      }
    </Swiper>
  )
}


export {ContentListMain1, ContentListMain2, ContentListMain3}
