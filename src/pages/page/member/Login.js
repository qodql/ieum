import { useState } from 'react';
import { signIn, useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import loginStyles from '@/styles/css/page/member.module.scss';

const Login = () => {
  const { data: session } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleLogin(e) {
    e.preventDefault();
    const result = await signIn('credentials', { 
      email, 
      password,
      callbackUrl: '/'
    });

    if (result.error) {
      console.error('Error signing in:', result.error);
      alert('로그인에 실패했습니다. 이메일과 비밀번호를 확인하세요.');
    } else {
      window.location.href = '/';
    }
  }

  return (
    <div className={loginStyles.loginBox}>
      <div onClick={()=> location.href='/'} className={loginStyles.loginLogo} style={{ backgroundImage: `url(../../IEUMLOGO.png)` }}/>
      <p>로그인</p>
      <form onSubmit={handleLogin}>
        <input 
          className={loginStyles.loginInput} 
          type="text" 
          placeholder="이메일을 입력하세요"
          onChange={handleEmailChange}
        />
        <input 
          className={loginStyles.loginInput} 
          type="password" 
          placeholder="비밀번호를 입력하세요"
          onChange={handlePasswordChange}
        />
        <button type="submit" className={loginStyles.loginBtn}>로그인</button>
      </form>
      <div className={loginStyles.linkTextBox}>
        <Link href='/page/member/CreateAcount' className={loginStyles.linkText}>회원가입</Link>
        <Link href='/page/member/Findid' className={loginStyles.linkText}>아이디찾기</Link>
        <Link href='/page/member/Mypage' className={loginStyles.linkText}>테스트1</Link>
        <Link href='/page/member/Membercorrection' className={loginStyles.linkText}>테스트2</Link>
      </div>
      <div className={loginStyles.externalLoginBox}>
        <div
          onClick={() => signIn('naver', { callbackUrl: '/' })}
          style={{ backgroundImage: `url(/icon_login_naver.svg)` }}
          className={loginStyles.loginIcon}
        />
        <div
          onClick={() => signIn('github', { callbackUrl: '/' })}
          style={{ backgroundImage: `url(/icon_login_github.svg)` }}
          className={loginStyles.loginIcon}
        />
        <div
          onClick={() => signIn('google', { callbackUrl: '/' })}
          style={{ backgroundImage: `url(/icon_login_google.svg)` }}
          className={loginStyles.loginIcon}
        />
      </div>
      {session && (
        <div>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default Login;