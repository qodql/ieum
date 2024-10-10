import React from 'react'
import s from '@/styles/css/page/main.module.scss'
import detail from '@/styles/css/page/detail.module.scss'
import { ButtonAll, ButtonArrow } from './component/Button';
import Footer from './component/Footer';

const Detail = () => {
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
                        <img src='./trend.jpg'/>
                    </div>
                    <div className={detail.detailThumbBox}>
                        <div className={detail.detailThumb}>
                            <img src='./trend.jpg'/>
                        </div>
                        <div className={detail.detailThumbInfo}>
                            <div className={detail.detailThumbIcon}>
                                <span>베스트</span>
                                <span>편집자추천</span>
                            </div>
                            <h5 className={detail.detailThumbTit}>트렌드 코리아 2025</h5>
                            <p className={detail.detailTumbOverview}>2025 대한민국 소비트렌드 전망</p>
                            <span className={detail.detailThumbWriter}>김난도, 전미영, 최지혜, 권정윤, 한다혜, 이혜원, 이준영, 이향은, 추예린, 전다현</span>
                            <span className={detail.detailThumbType}>국내도서&gt;경제경영&gt;트렌드/미래전망&gt;트렌드/미래전망 일반</span>
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
                            <span>국내도서&gt;경제경영&gt;트렌드/미래전망&gt;트렌드/미래전망 일반</span>
                            <p className={detail.detailInfoDescription}>
                                역대급 무더위가 대한민국을 강타한 2024년 여름, 지구는 역사상 가장 뜨거운 날의 기록을 연달아 경신했다.<br/><br/>
                                지금 우리는 ‘역대급’이라는 말 자체가 역대급으로 많이 쓰이는 시대를 살고 있다. 그만큼 우리 사회의 역동성이 크다는 뜻이기도 하다.<br/><br/>
                                근 20년 동안 우리 사회의 추이와 소비 활동의 여러 모습을 추적, 관찰해온 트렌드 코리아 팀은 대한민국이 그 어느 때보다도 더 특유의 역동성과 역량을 바탕으로 전에 없는 다양성을 표출하는 모습을 목격하고 이를 책에 담고자 했다.
                            </p>
                        </div>
                        <div className={detail.detailInfoBox}>
                            <div>
                                <span>출판일</span>
                                <span>2024-09-25</span>
                            </div>
                            <div>
                                <span>페이지</span>
                                <span>400p</span>
                            </div>
                            <div>
                                <span>출판사</span>
                                <span>미래의 창</span>
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