import React, { useCallback, useEffect, useState } from 'react'
import s from '@/styles/css/component/header.module.scss'
import Search from './Search'
import Link from 'next/link'

const Header = () => {

    const [position, setPosition] = useState(0);
    const [visible, setVisible] = useState(true);

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
        console.log(visible)
    }, [position]);
return (
    <header>

            <div className={!visible ? `${s.header1} ${s.header1Act}` : `${s.header1}`}>
                <Link href="/" className={s.headerLogo}
                style={{backgroundImage:`url(./IEUMLOGO.png)`}}
                >
                </Link>
                <Search/>
            </div>
            <ul className={!visible ? `${s.header2} ${s.header2Active}` : `${s.header2}`}>
                <li className={s.header2Li}>
                    <Link href="/">홈</Link>
                </li>
                <li className={s.header2Li}>
                    베스트
                </li>
                <li className={s.header2Li}>
                    신간
                </li>
                <li className={s.header2Li}>
                    추천도서
                </li>
            </ul>

    </header>
)
}

export default Header