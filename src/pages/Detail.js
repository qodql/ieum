import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import s from '@/styles/css/page/main.module.scss'
import detail from '@/styles/css/page/detail.module.scss'
import { ButtonAll } from './component/Button';
import Footer from './component/Footer';
import BookStore from './stores/BookStore';

const Detail = () => {
    const router = useRouter();
    const { itemId } = router.query;
    const { mainItems } = BookStore();
    const [item, setItem] = useState(null);

    useEffect(() => {
        if (itemId) {
            const foundItem = Object.values(mainItems).flatMap(category => category.item)
                .find(i => i.itemId === Number(itemId));
            setItem(foundItem);
        }
    }, [itemId, mainItems]);

    if (!item) return <div>Loading...</div>;

    console.log(item);

  return (
    <>
        <div className={detail.subWrap}>
            <div className={detail.subTop}>
                <a><img src='./arrow-left.svg'/></a>
                <a><img src='./share.svg'/></a>
            </div>
            <div className={detail.detail}>
                <div className={detail.detailThumbArea}>
                    <div className={detail.detailThumbBg}>
                        <img src={item.cover} alt={item.title}/>
                    </div>
                    <div className={detail.detailThumbBox}>
                        <div className={detail.detailThumb}>
                            <img src={item.cover} alt={item.title}/>
                        </div>
                        <div className={detail.detailThumbInfo}>
                            <div className={detail.detailThumbIcon}>
                                <span>베스트</span>
                                <span>편집자추천</span>
                            </div>
                            <h5 className={detail.detailThumbTit}>{item.title}</h5>
                            <p className={detail.detailTumbOverview}>{item.author}</p>
                            <span className={detail.detailThumbWriter}>{item.author}</span>
                            <span className={detail.detailThumbType}>{item.categoryName}</span>
                        </div>
                    </div>
                    <div className={detail.detailInfoArea}>
                        <div className={detail.detailInfoMark}>
                            <div className={detail.detailInfoGrade}>
                                <span>평균</span>
                                <p>
                                    <i><img src='./star.svg' alt="star"/></i>
                                    <span>4.0</span>
                                </p>
                                <span>(12명)</span>
                            </div>
                            <div className={detail.detailInfoLikes}>
                                <i><img src='./like.png'/></i>
                                <span>105</span>
                            </div>
                        </div>
                        <div className={detail.detailInfoStar}>
                            <i><img src='./star-gray.svg'/></i>
                            <i><img src='./star-gray.svg'/></i>
                            <i><img src='./star-gray.svg'/></i>
                            <i><img src='./star-gray.svg'/></i>
                            <i><img src='./star-gray.svg'/></i>
                        </div>
                        <div className={detail.detailInfoIcon}>
                            <div>
                                <i><img src='./interest.svg'/></i>
                                <span>읽고싶어요</span>
                            </div>
                            <div>
                                <i><img src='./comment.svg'/></i>
                                <span>코멘트</span>
                            </div>
                            <div>
                                <i><img src='./bookmark.svg'/></i>
                                <span>읽는 중</span>
                            </div>
                            <div>
                                <i><img src='./add.svg'/></i>
                                <span>더보기</span>
                            </div>
                        </div>
                        <div className={detail.detailInfo}>
                            <p className={detail.detailInfoTit}>기본 정보</p>
                            <span>{item.categoryName}</span>
                            <p className={detail.detailInfoDescription}>
                                {item.description}
                            </p>
                        </div>
                        <div className={detail.detailInfoBox}>
                            <div>
                                <span>출판일</span>
                                <span>{item.pubDate}</span>
                            </div>
                            <div>
                                <span>페이지</span>
                                <span>400p</span>
                            </div>
                            <div>
                                <span>출판사</span>
                                <span>{item.publisher}</span>
                            </div>
                        </div>
                        <div className={detail.detailInfoPlace}>
                            <p>구매 가능한 곳</p>
                            <div className={detail.detailInfoImgbox}>
                                <img src='./aladin.jpg'></img>
                                <img src='./kyobo.jpg'></img>
                                <img src='./yes24.jpg'></img>
                            </div>
                        </div>
                        <div className={detail.detailCommentWrap}>
                            <div className={s.contentTitle}>
                                <h2>코멘트</h2>
                                <ButtonAll/>
                            </div>
                            <div className={detail.detailComment}>
                                <div><img src='./profile.png'/></div>
                                <div className={detail.detailCommentInfo}>
                                    <div className={detail.detailCommentNickName}>
                                        <p>나야들기름</p>
                                        <span>2024-10-22</span>
                                    </div>
                                    <div className={detail.detailCommentStar}>
                                        <img src='./star.svg'></img>
                                        <img src='./star.svg'></img>
                                        <img src='./star.svg'></img>
                                        <img src='./star.svg'></img>
                                        <img src='./star.svg'></img>
                                    </div>
                                    <p className={detail.detailCommentCont}>
                                        송길영 작가님은 책도 영상도 지금 곧바로 읽고 봐야하는 필독서!
                                    </p>
                                </div>
                            </div>
                            <div className={detail.detailComment}>
                                <div><img src='./profile.png'/></div>
                                <div className={detail.detailCommentInfo}>
                                    <div className={detail.detailCommentNickName}>
                                        <p>나야들기름</p>
                                        <span>2024-10-22</span>
                                    </div>
                                    <div className={detail.detailCommentStar}>
                                        <img src='./star.svg'></img>
                                        <img src='./star.svg'></img>
                                        <img src='./star.svg'></img>
                                        <img src='./star.svg'></img>
                                        <img src='./star.svg'></img>
                                    </div>
                                    <p className={detail.detailCommentCont}>
                                        송길영 작가님은 책도 영상도 지금 곧바로 읽고 봐야하는 필독서!
                                    </p>
                                </div>
                            </div>
                            <div className={detail.detailComment}>
                                <div><img src='./profile.png'/></div>
                                <div className={detail.detailCommentInfo}>
                                    <div className={detail.detailCommentNickName}>
                                        <p>나야들기름</p>
                                        <span>2024-10-22</span>
                                    </div>
                                    <div className={detail.detailCommentStar}>
                                        <img src='./star.svg'></img>
                                        <img src='./star.svg'></img>
                                        <img src='./star.svg'></img>
                                        <img src='./star.svg'></img>
                                        <img src='./star.svg'></img>
                                    </div>
                                    <p className={detail.detailCommentCont}>
                                        송길영 작가님은 책도 영상도 지금 곧바로 읽고 봐야하는 필독서!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Detail