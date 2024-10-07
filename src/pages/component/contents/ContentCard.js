import React from 'react'
import s from '@/styles/css/component/content/contentCard.module.scss'


const ContentCard1 = () => {
return (
    <div className={s.contentCard1}>
        <span className={s.bookmark} style={{backgroundImage:`url(./bookmark.png)`}}>1</span>
        <div className={s.contentCard1_image} style={{backgroundImage:`url(./image1.png)`}}></div>
    </div>
)
}

const ContentCard2 = () => {
return (
    <div className={s.contentCard2}>
        <div className={s.contentCard2_image} style={{backgroundImage:`url(./image1.png)`}}></div>
        <p className={s.contentCard2_category}>경제/경영</p>
        <p className={s.contentCard2_title}>피벗의 시대 2025년 경제 전망</p>
        <p className={s.contentCard2_author}>김경식</p>
    </div>
)
}

const ContentCard3 = () => {
return (
    <div className={s.contentCard3}>
        <div className={s.contentCard3_image} style={{backgroundImage:`url(./image1.png)`}}></div>
        <p className={s.contentCard3_title}>피벗의 시대 2025년 경제 전망</p>
        <p className={s.contentCard3_author}>김경식</p>
    </div>
)
}

const CommentCard = () => {
return (
    <div className={s.commentCard}>
        <div className={s.commentCard_img} style={{backgroundImage:`url(./image2.png)`}}></div>
        <div className={s.commentCard_text}>
            <p className={s.commentCard_title}>시대예보: 호명사회</p>
            <div className={s.commentCard_rate}>★★★★☆</div>
            <p className={s.commentCard_review}>송길영 작가님은 책도 영상도 지금 곧바로 읽고 봐야하는 필독서! 특히 이해되지 않거나 공감되지 않는 부분이 있다면 그냥 넘어가기보다...</p>
        </div>
    </div>
)
}



export {ContentCard1, ContentCard2, ContentCard3, CommentCard}