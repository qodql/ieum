<<<<<<< HEAD
import s from '@/styles/css/page/main.module.scss'
import Footer from './component/Footer';
import Header from './component/Header';
import { ButtonAll, ButtonArrow } from './component/Button';
import { CommentCard} from './component/contents/ContentCard';
import { ContentListMain1, ContentListMain2, ContentListMain3 } from './component/contents/ContentList';
=======
import Head from "next/head";
import Link from "next/link";
>>>>>>> 22c500e4badd27a6e4dde07a77d8590585b73a1e

export default function Home() {
  return (
    <>
      <Header/>
      <main>

        <div className={s.banner}>
          <div className={s.bannerImg} style={{backgroundImage:`url(./Maskgroup.png)`}}></div>
          <div className={s.bannerText}>
            <div className={s.bannerTitle}>
              <h2>알레스카 한의원</h2>
              <p>이소영 저/사계절</p>
            </div>
            <div className={s.bannerOverview}>
              <p>
                이소영 작가는 우연히 동양의학을 
                접하게 되면서 몸과 마음, 병의 
                관계성을 탐구해 나가는 과정
                에서 한 문장을 떠올렸다...
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
            <ButtonAll/>
          </div>
          <ContentListMain1/>
        </div>

        <div className={s.mainContent2}>
          <div className={s.contentTitle}>
            <h2>편집자 추천 리스트</h2>
            <ButtonAll/>
          </div>
          <ContentListMain2/>
        </div>

        <div className={s.mainContent3}>
          <div className={s.contentTitle}>
            <h2>장르별 순위</h2>
            <ButtonAll/>
          </div>
          <ul className={s.c3Category}>
            <li className={s.c3Category_li}>
              <button className={s.c3Category_btn}>문학</button>
            </li>
            <li className={s.c3Category_li}>
              <button className={s.c3Category_btn}>경제</button>
            </li>
            <li className={s.c3Category_li}>
              <button className={s.c3Category_btn}>추리</button>
            </li>
            <li className={s.c3Category_li}>
              <button className={s.c3Category_btn}>종교</button>
            </li>
            <li className={s.c3Category_li}>
              <button className={s.c3Category_btn}>철학</button>
            </li>
            <li className={s.c3Category_li}>
              <button className={s.c3Category_btn}>판타지</button>
            </li>
          </ul>
          <ContentListMain3/>
        </div>
        
        <div className={s.mainContent4}>
          <div className={s.contentTitle}>
            <h2>지금 뜨는 코멘트</h2>
            <ButtonArrow/>
          </div>
          <div className={s.comment}>
            <div className={s.profile}>
              <span style={{backgroundImage:`url(./image16.png)`}}></span>
              <div className={s.profile_text}>
                <p className={s.name}>지적 호기심</p>
                <p className={s.date}>2024-10-22</p>
              </div>
            </div>
            <CommentCard/>
          </div>
        </div>

      </main>

      <Footer/>
      </>
  );
}
