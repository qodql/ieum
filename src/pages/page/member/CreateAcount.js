import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { storage,db } from "@/lib/firebase";
import { v4 as uuidv4 } from 'uuid';
import loginStyles from '@/styles/css/page/member.module.scss';
import Link from "next/link";


 function CreateAccount() {
  const userid = uuidv4();
  const [info, setInfo] = useState({name:'',email:'', password:'',phonenum:'',nickname:'',id:''});
  const userData = async ()=>{
    await addDoc(collection(db,"userInfo"), {
      info,
    })
    alert("이음의 회원이 되신걸 환영합니다")
  }
  const insertInfo = (edit)=>{
    setInfo({...info, ...edit, id:userid})
  };

  return (
    <>
    {/* 회원가입 */}
    <div className={loginStyles.CreateAccountBox}>
      <Link href='/page/member/Login' 
      className={loginStyles.ieumLogo} 
      style={{backgroundImage:`url(../../IEUMLOGO.png)`}}/>
      <p className={loginStyles.createAccount}>회원가입</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <span className={loginStyles.inputText}>이름</span>
        <input 
        type="text" 
        className={loginStyles.userInput}
        placeholder="이름을 입력하세요" 
        onChange={(e) => insertInfo({name:e.target.value})}/>

        <span className={loginStyles.inputText}>이메일</span>
        <input 
        type="text" 
        className={loginStyles.userInput}
        placeholder="이메일을 입력하세요"
        onChange={(e)=> insertInfo({email:e.target.value})}/>

        <span className={loginStyles.inputText}>비밀번호</span>
        <input 
        type="password" 
        className={loginStyles.userInput}
        placeholder="비밀번호를 입력하세요" 
        onChange={(e)=> insertInfo({password:e.target.value})}/>
        <span className={loginStyles.inputText}>비밀번호 확인</span>
        <input 
        type="password" 
        placeholder="같은 비밀번호를 입력하세요"
        className={loginStyles.userInput}/> 
        <span className={loginStyles.inputText}>핸드폰번호</span>
        <input 
        type="text" 
        className={loginStyles.userInput} 
        placeholder="핸드폰번호를 입력하세요"
        onChange={(e)=> insertInfo({phonenum:e.target.value})}/>
        <span className={loginStyles.inputText}>인증번호</span>
        <div className={loginStyles.duplicationBox}>
          <input
          type="text"
          placeholder="인증번호를 입력하세요"
          className={loginStyles.userInput}/> 
          <button className={loginStyles.certificationBtn}>본인인증</button>
        </div>
        <span className={loginStyles.inputText}>닉네임</span>
        <div className={loginStyles.duplicationBox}>
          <input 
          type="text" 
          className={loginStyles.userInput} 
          placeholder="닉네임을 입력하세요"
          onChange={(e)=> insertInfo({nickname:e.target.value})}/>
          <button className={loginStyles.certificationBtn}>중복확인</button>
        </div>
        <ul className={loginStyles.termsList}>
          <li>
            <p>약관 동의</p>
          </li>
          <li>
            <input type="checkbox" className={loginStyles}/>
            <span>(필수)인증시 고유식별정보 동의</span>
          </li>
          <li>
            {/* ture 일시에 회원가입 가능하도록 설계해야함 */}
            <input type="checkbox" className={loginStyles}/>
            <span>(필수)통신사 이용약관</span>
          </li>
        </ul>
        <button className={loginStyles.createAccountBtn} onClick={userData}>회원가입</button>
      </form>
    </div>
    </>
  )
}

export default CreateAccount
