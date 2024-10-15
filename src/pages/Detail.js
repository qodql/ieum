import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import s from '@/styles/css/page/main.module.scss'
import detail from '@/styles/css/page/detail.module.scss'
import { ButtonAll } from './component/Button';
import Footer from './component/Footer';
import BookStore from './stores/BookStore';
import { useSession } from 'next-auth/react';
import { db } from '@/lib/firebase';
import { addDoc, collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore'

const Detail = () => {
    const {data:session} = useSession();
    const router = useRouter();
    const { itemId } = router.query;
    const { mainItems } = BookStore();
    const [item, setItem] = useState(null);
    const [comment, setComment] = useState('');
    const [modalBtn, setModalBtn] = useState(false);
    const [commentTitle, setCommenttitle] = useState('');
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();    

    //데이터 불러오기
    useEffect(() => {
        if (itemId) {
            const foundItem = Object.values(mainItems).flatMap(category => category.item)
                .find(i => i.itemId === Number(itemId));
            setItem(foundItem);
        }
    }, [itemId, mainItems]);
    

    // 뒤로가기 
    const backBtn = () => {
        router.back(); 
    };

    // 공유 버튼
    const shareBtn = () => {
        if (navigator.share) {
            navigator.share({
                title: item.title,
                text: item.description,
                url: window.location.href
            })
        }
    };

    // 로딩
    if (!item) {
        return (
            <div className={s.loading}>
                <img src="/icon/loading.gif" alt="Loading..." />
            </div>
        );
    }
    
    //읽는중 버튼
    const authorize = async () => {
        const q = query(
            collection(db, "readlist"),
            where("title", "==", item.title),
        );
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
            const docRef = collection(db, "readlist"); // 컬렉션 참조 생성
            await addDoc(docRef, {
                email: session.user.email,
                title: item.title,
                bookid: item.itemId,
                cover: item.cover
            });
        } else {
            // 이미 존재하는 경우의 로직을 여기에 추가할 수 있습니다.
            console.log("Document already exists.");
        }
    };
    //읽고싶어요 버튼

    const readwantBtn = async () => {
        const q = query(
            collection(db, "readwantlist"),
            where("title", "==", item.title),
        );
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
            const docRef = collection(db, "readwantlist"); // 컬렉션 참조 생성
            await addDoc(docRef, {
                email: session.user.email,
                title: item.title,
                bookid: item.itemId,
                cover: item.cover
            });
        } else {
            alert("이미 등록된 책입니다.");
        }
    };

    //코멘트 버튼
    const commentBtn = async () => {
        const q = query(
            collection(db, "comment"),
            where("title", "==", item.title),
        );
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
            const docRef = collection(db, "comment");
            await addDoc(docRef, {
                email: session.user.email,
                title: item.title,
                bookid: item.itemId,
                cover: item.cover,
                comment: comment,
                Creationdate: `${year}.${month}.${day}`
            });
        }
        else {
            alert("이미 해당 작품에서 코멘트를 등록하셨습니다.");
        } 
    };
    console.log(comment);
    
  return (
    <>  

        <div className={detail.subWrap}>
            <div className={detail.subTop}>
                <a onClick={backBtn}><img src='./arrow-left.svg'/></a>
                <a onClick={shareBtn}><img src='./share.svg'/></a>
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
                      
                            <div onClick={readwantBtn}>
                                <i><img src='./interest.svg'/></i>
                                <span>읽고싶어요</span>
                            </div>
                            <div onClick={()=>setModalBtn(true)}>
                                <i><img src='./comment.svg'/></i>
                                <span>코멘트</span>
                            </div>
                            {/* 코멘트 모달창 */}
                            {modalBtn === true ?
                            <>
                             <div className={detail.modalOverlay} onClick={() => setModalBtn(false)}></div>
                            <div className={detail.modal}>
                                <form onSubmit={(e)=> {e.preventDefault(); commentBtn(); setModalBtn(false);}}>
                                    <div className={detail.labelBox}>
                                        <label className={detail.modalLabel}>내용</label>
                                        <div className={detail.closeBtn} style={{backgroundImage:`url(/icon_detail_modal_closeBtn.svg)`}}/>
                                    </div>
                                    <input type="text" />
                                    <div>
                                    <label>상세리뷰</label>
                                    <input 
                                    type="text" 
                                    placeholder='다른 고객님께 도움이 되도록 책에 대한 솔직한 평가를 남겨주세요'
                                    onChange={(e)=>setComment(e.target.value)}/>
                                    </div>
                                    <button type='submit'>저장하기</button>
                                </form> 
                            </div>
                            </>
                            : null

                            }
                            <div onClick={authorize}>
                                <i><img src='./bookmark.svg'/></i>
                                <span>읽는중</span>
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