import Link from 'next/link'
import React from 'react'
import loginStyle from '../../../styles/css/page/member.module.scss'

const Login = () => {
  return (
    <>
     <div className={loginStyle.loginBox}>
      <h2>책이음</h2>
      <p>로그인</p>
      <form>
        <input className={loginStyle.loginInput} type="text" placeholder="아이디를 입력하세요"/>
        <input  className={loginStyle.loginInput} type="password" placeholder="비밀번호를 입력하세요"/>
        <button className={loginStyle.loginBtn}>로그인</button>
      </form>
      <div></div>
      <Link href='/' className={loginStyle.linkText}>회원가입</Link>
      <Link href='/' className={loginStyle.linkText}>아이디찾기</Link>
     </div>
    </>
  )
}

export default Login