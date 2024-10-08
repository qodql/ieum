import React from 'react'
import Footer from './component/Footer'
import { CommentCard } from './component/contents/ContentCard'
import s from '@/styles/css/page/comment.module.scss'

const CommentList = () => {
  return (
    <>
        <div className={s.commentList_title}>
            <span className={s.commentList_back}></span>
            <h2>코멘트</h2>
        </div>
        <div className={s.commentCard_list}>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
            <CommentCard/>
        </div>
        <Footer/>
    </>
  )
}

export default CommentList