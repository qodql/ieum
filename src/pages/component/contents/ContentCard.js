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
    <div className={s.comment}>
        <div className={s.profile}>
        <span style={{backgroundImage:`url(./image16.png)`}}></span>
        <div className={s.profile_text}>
            <p className={s.name}>지적 호기심</p>
            <p className={s.date}>2024-10-22</p>
        </div>
        </div>
        <div className={s.commentCard}>
            <div className={s.commentCard_img} style={{backgroundImage:`url(./image2.png)`}}></div>
            <div className={s.commentCard_text}>
                <p className={s.commentCard_title}>시대예보: 호명사회</p>
                <div className={s.commentCard_rate}>★★★★☆</div>
                <p className={s.commentCard_review}>송길영 작가님은 책도 영상도 지금 곧바로 읽고 봐야하는 필독서! 특히 이해되지 않거나 공감되지 않는 부분이 있다면 그냥 넘어가기보다...</p>
            </div>
        </div>
    </div>
)
}


const ContentList_card = () => {
    return (
        <div className={s.ContentList_card}>
            <div className={s.ContentList_card_main}>
                <div className={s.ContentList_card_img}>
                    <span className={s.ContentList_card_bookmark} style={{backgroundImage:`url(./bookmark.png)`}}>1</span>
                    <div className={s.ContentList_card_mainImg} style={{backgroundImage:`url(./image1.png)`}}></div>
                </div>
                <div className={s.ContentList_card_text}>
                    <h2 className={s.ContentList_card_title}>
                    트렌드 코리아 2025 - 2025 대한민국 소비트렌드 전망
                    </h2>
                    <p className={s.ContentList_card_auther}>
                        김난도, 전미영, 최지혜, 권정윤, 한다혜, 이혜원, 이준영, 이향은, 추예린, 전다현 (지은이)
                    </p>
                    <p className={s.ContentList_card_rateTitle}>
                    책이음 평점
                    </p>
                    <p className={s.ContentList_card_rate}>
                    ★★★★☆ 4.0
                    </p>
                </div>
            </div>
            <div className={s.ContentList_card_foot}>
                <p className={s.ContentList_card_Like}>
                    123
                </p>
                <p className={s.ContentList_card_category}>
                국내도서{'>'}경제경영{'>'}트렌드/미래전망{'>'}트렌드/미래전망 일반
                </p>
            </div>
        </div>
    )
    }


    //Mypage contentsCard

    const MypageCard = () => {
        return (
            <div className={s.MypageCard}>
                <div className={s.MypageCard_box}>
                    <div className={s.MypageCard_image} style={{backgroundImage:`url(/image2.png)`}}></div>
                </div>
                <p className={s.MypageCard_title}>시대예보:호명사회</p>
            </div>
        )
        }


    //Mypage commentCard

    const MypageComment = () => {
        return (
            <div className={s.MypageComment}>
                <div className={s.MypageComment_img} style={{backgroundImage:`url(/image2.png)`}}></div>
                <div className={s.MypageComment_text}>
                    <p className={s.MypageComment_date}>
                        2024.10.02
                        </p>
                    <h2 className={s.MypageComment_title}>
                    시대예보:호명사회
                    </h2>
                    <p className={s.MypageComment_rate}>
                        ★★★★☆
                    </p>
                    <p className={s.MypageComment_review}>
                        재밌는 책이었다 아주 재미있었다 너무 재미있었다 대박이다
                    </p>
                </div>
                <span className={s.MypageComment_more} style={{backgroundImage:`url(/more.png)`}}></span>        
            </div>
        )
    }


export {ContentCard1, ContentCard2, ContentCard3, CommentCard, ContentList_card, MypageCard, MypageComment}