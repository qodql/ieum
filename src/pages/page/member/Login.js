import Link from 'next/link'
import React from 'react'
import loginStyles from '@/styles/css/page/member.module.scss';

const Login = () => {
  return (
     <div className={loginStyles.loginBox}>
      <div className={loginStyles.loginLogo} style={{backgroundImage:`url(/icon_login_ieum.svg)`
      }}></div>
      <p>로그인</p>
      <form>
        <input className={loginStyles.loginInput} type="text" placeholder="아이디를 입력하세요"/>
        <input  className={loginStyles.loginInput} type="password" placeholder="비밀번호를 입력하세요"/>
        <button className={loginStyles.loginBtn}>로그인</button>
      </form>
      <div className={loginStyles.linkTextBox}>
        <Link href='/page/member/CreateAcount' className={loginStyles.linkText}>회원가입</Link>
        <Link href='/page/member/Findid' className={loginStyles.linkText}>아이디찾기</Link>
        <Link href='/page/member/Mypage' className={loginStyles.linkText}>테스트1</Link>
        <Link href='/page/member/Membercorrection'>테스트2</Link>
      </div>
     </div>
  )
}


export default Login