import { useEffect, useState } from 'react';
import s from '@/styles/css/page/main.module.scss';
import Footer from './component/Footer';
import Header from './component/Header';
import { ButtonAll, ButtonArrow } from './component/Button';
import { CommentCard } from './component/contents/ContentCard';
import { ContentListMain1, ContentListMain2, ContentListMain3 } from './component/contents/ContentList';
import BookStore from './stores/BookStore';
import LoadingScreen from './component/loadingScreen';

export default function Home() {
    const [cate, setCate] = useState('1');
    const [loading, setLoading] = useState(false); 
    const [loadingfadeOut, setLoadingfadeOut] = useState(false);

    const { mainItems, itemApi, hasLoadedOnce, setHasLoadedOnce } = BookStore();

    const categoryNum = (num) => {
        setCate(num);
    };

    // mainItems
    useEffect(() => {
        if (!hasLoadedOnce) {
            setLoading(true);
        }

        const cateNum = '';
        const coverSize = 'Big';
        async function fetchData() {
            await itemApi('main', cateNum, coverSize);
            if (!hasLoadedOnce) {
                setTimeout(() => {
                    setLoadingfadeOut(true);
                    setTimeout(() => {
                        setLoading(false);
                        setHasLoadedOnce(true);
                    }, 500);
                }, 2000);
            }
        }
        fetchData();
    }, [hasLoadedOnce, itemApi, setHasLoadedOnce]);

    if (loading) return <LoadingScreen loadingfadeOut={loadingfadeOut} />;

    return (
        <>
            <Header />
            <main>
                <div className={s.banner}>
                    <div className={s.bannerImg} style={{ backgroundImage: `url(./Maskgroup.png)` }}></div>
                    <div className={s.bannerText}>
                        <div className={s.bannerTitle}>
                            <h2>알레스카 한의원</h2>
                            <p>이소영 저/사계절</p>
                        </div>
                        <div className={s.bannerOverview}>
                            <p>
                                이소영 작가는 우연히 동양의학을
                                접하게 되면서 몸과 마음, 병의
                                관계성을 탐구해 나가는 과정에서 한 문장을 떠올렸다...
                            </p>
                        </div>
                        <div className={s.bannerBot}>
                            <p className={s.bannerLike}>87</p>
                            <p className={s.bannerPage}>1/3</p>
                        </div>
                    </div>
                </div>

                <div className={s.mainContent1}>
                    <div className={s.contentTitle}>
                        <h2>블로거 베스트셀러</h2>
                        <ButtonAll />
                    </div>
                    <ContentListMain1 mainItems={mainItems} />
                </div>

                <div className={s.mainContent2}>
                    <div className={s.contentTitle}>
                        <h2>신간 리스트</h2>
                        <ButtonAll />
                    </div>
                    <ContentListMain2 mainItems={mainItems} />
                </div>

                <div className={s.mainContent3}>
                    <div className={s.contentTitle}>
                        <h2>편집자 추천 리스트</h2>
                        <ButtonAll />
                    </div>
                    <ul className={s.c3Category}>
                        <li className={s.c3Category_li}>
                            <button className={s.c3Category_btn} onClick={() => { categoryNum('1') }}>문학</button>
                        </li>
                        <li className={s.c3Category_li}>
                            <button className={s.c3Category_btn} onClick={() => { categoryNum('170') }}>경제</button>
                        </li>
                        <li className={s.c3Category_li}>
                            <button className={s.c3Category_btn} onClick={() => { categoryNum('2556') }}>추리</button>
                        </li>
                        <li className={s.c3Category_li}>
                            <button className={s.c3Category_btn} onClick={() => { categoryNum('55889') }}>종교</button>
                        </li>
                        <li className={s.c3Category_li}>
                            <button className={s.c3Category_btn} onClick={() => { categoryNum('8516') }}>에세이</button>
                        </li>
                        <li className={s.c3Category_li}>
                            <button className={s.c3Category_btn} onClick={() => { categoryNum('4132') }}>판타지</button>
                        </li>
                    </ul>
                    <ContentListMain3 categoryNum={categoryNum} cate={cate} />
                </div>

                <div className={s.mainContent4}>
                    <div className={s.contentTitle}>
                        <h2>지금 뜨는 코멘트</h2>
                        <ButtonArrow />
                    </div>
                    <CommentCard />
                </div>
            </main>
            <Footer />
        </>
    );
}
