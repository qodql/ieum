import React from 'react'
import s from '@/styles/css/component/content/contentList.module.scss'
import { ContentCard1, ContentCard2, ContentCard3 } from './ContentCard'


const ContentListMain1 = () => {
  return (
    <div className={s.content1}>
        <ContentCard1/>
        <ContentCard1/>
        <ContentCard1/>        
    </div>
  )
}

const ContentListMain2 = () => {
  return (
    <div className={s.content2}>
        <ContentCard2/>          
        <ContentCard2/>          
    </div>
  )
}

const ContentListMain3 = () => {
  return (
    <div className={s.content3}>
        <ContentCard3/>
        <ContentCard3/>
        <ContentCard3/>
    </div>
  )
}

export {ContentListMain1, ContentListMain2, ContentListMain3}