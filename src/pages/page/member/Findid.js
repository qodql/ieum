import React from 'react'
import { getDoc } from "firebase/firestore";
import { useState } from "react";
import { storage,db } from "@/lib/firebase";
import loginStyles from '@/styles/css/page/member.module.scss';
import Link from "next/link";

const Findid = () => {
  const infoFind = (edit)=>{
    setUserInfo({...info, ...edit});
  }
  return (
    <div className={loginStyles.findIdBox}>
       <div className={loginStyles.ieumLogo} style={{backgroundImage:`url(/icon_login_ieum.svg)`
      }}></div>
      <p>아이디 찾기</p>
    {/* 아이디 찾기 */}
    <form onSubmit={(e)=> e.preventDefault}>
      <span>이름</span>
      <input 
      className={loginStyles.userInput} 
      type='text'
      placeholder='이름을 입력하세요'
      onChange={(e)=>{infoFind({name:e.target.value})}}/>
      <span>핸드폰번호</span>
      <div className={loginStyles.certificationBox}>
       <input
        className={loginStyles.userInput} 
        type='text'
        placeholder='휴대폰번호를 입력하세요'
        onChange={(e)=>{infoFind({phoneNum:e.target.value})}}/>
       <button className={loginStyles.certificationBtn}>휴대폰인증</button>
      </div>
      <span>인증번호</span>
      <input 
      className={loginStyles.userInput} 
      type='text'
      placeholder='인증번호를 입력하세요'/>
      <button className={loginStyles.findBtn}>아이디 찾기</button>
    </form>
  </div>
  )
}
  
const Findresult = ()=>{
  
  return(
    <>
    </>
  )
}

export default Findid