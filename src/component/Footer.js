import React, { useCallback, useEffect, useState } from 'react'
import s from '@/styles/css/component/footer.module.scss'
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

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
                <Link href="/">
                    <span className={s.footerMenu_icon} style={{backgroundImage:`url(./footer1.png)`}}></span>
                    <p className={s.footerText}>홈</p>
                </Link>
            </li>
            <li className={s.footerMenu_li}>
                <Link href="/">
                    <span className={s.footerMenu_icon} style={{backgroundImage:`url(./footer2.png)`}}></span>
                    <p className={s.footerText}>검색</p>
                </Link>
            </li>
            {
                session ?
            <li onClick={()=>{location.href = '/page/member/Mypage';}}
               className={s.footerMenu_li}>
                  <Link href="/">
                    <span className={s.footerMenu_icon} style={{backgroundImage:`url(./footer3.png)`}}></span>
                    <p className={s.footerText}>MY</p>
                </Link>
            </li>
            : <li onClick={()=> {location.href = '/page/member/Login'; ;}}
            className={s.footerMenu_li}>
            <a href='#'>
             <span className={s.footerMenu_icon} style={{backgroundImage:`url(./footer3.png)`}}></span>
             <p className={s.footerText}>로그인</p>
             </a>
         </li>
            }


            </ul>
        </footer>
    )
}

export default Footer