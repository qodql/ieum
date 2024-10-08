import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import { ContentList_card } from './component/contents/ContentCard'
import s from '../styles/css/page/book.module.scss'
import { useDispatch } from 'react-redux'

const Book = () => {

  const dispatch = useDispatch();

  return (
    <>
        <Header/>
        <div className={s.book}>
            <div className={s.bookBanner}>
                <h2>베스트셀러</h2>
                <div className={s.bookBanner_Icon}></div>
            </div>
            <div className={s.bookList}>
                <ContentList_card/>
                <ContentList_card/>
                <ContentList_card/>
                <ContentList_card/>
                <ContentList_card/>
                <ContentList_card/>
                <ContentList_card/>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Book
