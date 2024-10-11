import React, { useCallback, useEffect, useState } from 'react'
import s from '@/styles/css/component/footer.module.scss'
import { signOut, useSession } from 'next-auth/react';

const Footer = () => {
    const [position, setPosition] = useState(0);
    const [visible, setVisible] = useState(true);
    const { data: session } = useSession();
    
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        
    }, [position]);

    const handleScroll = useCallback(() => {
        const moving = window.scrollY;
        setVisible(position > moving);
        setPosition(moving);
    }, [position]);

    return (
        <footer className={!visible ? `${s.footer} ${s.footerAct}` : `${s.footer}`}>
            <ul className={s.footerMenu}>
            <li className={s.footerMenu_li}>
                <span className={s.footerMenu_icon} style={{backgroundImage:`url(./footer1.png)`}}></span>
                <p className={s.footerText}>홈</p>
            </li>
            <li className={s.footerMenu_li}>
                <span className={s.footerMenu_icon} style={{backgroundImage:`url(./footer2.png)`}}></span>
                <p className={s.footerText}>검색</p>
            </li>
            
            <li onClick={()=>{
               session ? location.href = '/page/member/Mypage'
               : alert('로그인이 필요한 서비스입니다') }}  className={s.footerMenu_li}>
                <span className={s.footerMenu_icon} style={{backgroundImage:`url(./footer3.png)`}}></span>
                <p className={s.footerText}>마이페이지</p>
            </li>
            <li  className={s.footerMenu_li}>
                <span className={s.footerMenu_icon} style={{backgroundImage:`url(./footer4.png)`}}></span>
                <p className={s.footerText}>더보기</p>
            </li>          
            </ul>
        </footer>
    )
}

export default Footer