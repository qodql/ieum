import React from 'react'
import s from '@/styles/css/component/header.module.scss'
import Search from './Search'
import Link from 'next/link'

const Header = () => {
return (
    <heder>
        <div className={s.header1}>
        <div className={s.headerLogo}
        style={{backgroundImage:`url(./IEUMLOGO.png)`}}
        >
        </div>
        <Search/>
        </div>
        <ul className={s.header2}>
        <li className={s.header2Li}>홈</li>
        <li className={s.header2Li}>베스트</li>
        <li className={s.header2Li}>신간</li>
        <li className={s.header2Li}>추천도서</li>
        </ul>
    </heder>
)
}

export default Header