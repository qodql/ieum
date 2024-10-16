import loginStyles from '@/styles/css/page/member.module.scss';
import React from 'react'
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { storage,db } from "@/lib/firebase";
import Link from "next/link";

const Findid = () => {

  const [findInfo, setFindInfo] = useState({phonenum:'', name:''});
  const [searchInfo, setSearchInfo] = useState([]);
  const infoFind = (edit)=>{
    setFindInfo({...findInfo, ...edit});
  }

const contrastInfo = async ()=>{
 const q = query(
  collection(db,"userInfo"),
  where("info.phonenum", "==", findInfo.phonenum),
  where("info.name", "==" , findInfo.name),
 )
 const querySnapshot = await getDocs(q);
 const data = querySnapshot.docs.map((doc)=> doc.data());
 setSearchInfo(data);
 
}


const submitHandle = (e) => {
  e.preventDefault();
  contrastInfo();
}

  return (
    <div className={loginStyles.findIdBox}>
       <div className={loginStyles.ieumLogo} style={{backgroundImage:`url(../../IEUMLOGO.png)`
      }}></div>
      <p>아이디 찾기</p>
    {/* 아이디 찾기 */}
    <form onSubmit={submitHandle}>
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
        onChange={(e)=>{infoFind({phonenum:e.target.value})}}/>
       <button className={loginStyles.certificationBtn}>휴대폰인증</button>
      </div>
      <span>인증번호</span>
      <input 
      className={loginStyles.userInput} 
      type='text'
      placeholder='인증번호를 입력하세요'/>
      <button type='submit' className={loginStyles.findBtn}>아이디 찾기</button>
    </form>
    {searchInfo.length > 0 && (
        <div>
          <h2>검색 결과</h2>
          <pre>{JSON.stringify(searchInfo, null, 2)}</pre>
        </div>
      )}
  </div>
  )
}
export default Findid