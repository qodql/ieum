import React, { useCallback, useEffect, useState } from 'react';
import s from '@/styles/css/component/header.module.scss';
import Search from './Search';
import Link from 'next/link';

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
    }, [position]);

    return (
        <header>
            <div className={!visible ? `${s.header1} ${s.header1Act}` : `${s.header1}`}>
                <Link href="/" className={s.headerLogo}
                    style={{ backgroundImage: `url(./IEUMLOGO.png)` }}>
                </Link>
                <Search />
            </div>
            <ul className={!visible ? `${s.header2} ${s.header2Active}` : `${s.header2}`}>
                <li className={s.header2Li}>
                    <Link href="/">홈</Link>
                </li>
                <li className={s.header2Li}>
                    <Link href={{ pathname: '/Book', query: { category: 'Bestseller' } }}>베스트</Link>
                </li>
                <li className={s.header2Li}>
                    <Link href={{ pathname: '/Book', query: { category: 'ItemNewAll' } }}>신간</Link>
                </li>
                <li className={s.header2Li}>
                    <Link href={{ pathname: '/Book', query: { category: 'BlogBest' } }}>추천도서</Link>
                </li>
                <li className={s.header2Li}>
                    <Link href='/page/member/Login'>테스트1</Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
