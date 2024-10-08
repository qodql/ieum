import React from 'react'
import loginStyles from '@/styles/css/page/member.module.scss';

const Membercorrection = () => {
  return (
    
    <div className={loginStyles.memberCorrection}>
      <div className={loginStyles.ieumLogo} style={{backgroundImage:`url(/icon_login_ieum.svg)`
      }}/>
      <h2>회원수정</h2>
      <span>이메일</span>
      <input 
        type="text" 
        placeholder="hongyeong575@navercom"
        value='' readOnly
        className={loginStyles.userInput}/>

      <span>회원수정</span>
      <div className={loginStyles.nicknameChangeBox}>
        <input 
          type="text" 
          placeholder="변경할 닉네임을 입력하세요"
          className={loginStyles.userInput}/> 
        <button>중복확인</button>
      </div>

      <span>변경할 비밀번호</span>
      <input 
        type="password" 
        placeholder="변경할 비밀번호를 입력하세요"
        className={loginStyles.userInput}/> 

      <span>이메일</span>
      <input 
        type="password" 
        placeholder="변경할 비밀번호를 다시 입력하세요"
        className={loginStyles.userInput}/>

      <span>핸드폰번호</span>
      <input 
        type="text" 
        placeholder="010-6660-1578"
        className={loginStyles.userInput}/> 
      <div className={loginStyles.memberCorrectionBtnBox}>
        <button className={loginStyles.memberCorrectionBtn}>저장</button>
        <button className={loginStyles.memberCorrectionCancel}>취소</button>
      </div>
    </div>
  )
}

export default Membercorrection