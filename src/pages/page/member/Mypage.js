import React from 'react'
import loginStyles from '@/styles/css/page/member.module.scss';
import Link from 'next/link';
import { MypageCard, MypageComment } from '@/pages/component/contents/ContentCard';
import { getDocs } from 'firebase/firestore';
import { useSession } from 'next-auth/react';

const Mypage = () => {
  const {data : session} = useSession({});
  if (session != undefined && session != null)console.log(session.user.email)
  return (
    <>    
    {
      <div className={loginStyles.mypageBox}>
        <div className={loginStyles.profileBox}>
          <div 
          className={loginStyles.backBtn}  
          style={{backgroundImage:`url(/icon_login_backbtn.svg)`}}
          />
          <Link href='/page/member/Membercorrection'
          className={loginStyles.profileImg}  
          style={{backgroundImage:`url(/img_member_profile.svg)`}}/>
          <p>이홍영님</p>
          <span>{session == undefined || session == null ?'': session.user.email}</span>
        </div>
          <ul className={loginStyles.contentBox}>
            <li>
              <div className={loginStyles.contentList}>
                <span>읽는중</span>
                <Link href='/'>더보기</Link>
              </div>
              <span className={loginStyles.contentText}>이홍영님께서 설정한 읽고 있는 책들의 리스트에요</span>
              <div className={loginStyles.mypageCardBox}>
                <MypageCard/>
                <MypageCard/>
                <MypageCard/>
              </div>
            </li>
            <li>
              <div className={loginStyles.contentList}>
                <span>읽고싶어요</span>
                <Link href='/'>더보기</Link>
              </div>
              <span className={loginStyles.contentText}>이홍영님께서 설정한 읽고 싶은 책 리스트를 모아봤어요</span>
              <div className={loginStyles.mypageCardBox}>
                <MypageCard/>
                <MypageCard/>
                <MypageCard/>
              </div>
            </li>
            <li>
              <div className={loginStyles.contentList}>
                <span>내가 쓴 코멘트</span>
                <Link href='/'>더보기</Link>
              </div>
              <span className={loginStyles.contentText}>이홍영님께서 작성한 코멘트를 볼 수 있어요</span>
             <MypageComment/>
             <MypageComment/>
            </li>
          </ul>
      </div>

  }
  </>

  )
}

export default Mypage