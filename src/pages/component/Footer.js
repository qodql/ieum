import React from 'react'
import s from '@/styles/css/component/footer.module.scss'
// import s from '../../styles/css/component/footer.scss'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <ul className={s.footerMenu}>
            <li className={s.footerMenu_li}>
                <span className={s.footerMenu_icon} style={{backgroundImage:`url(./footer1.png)`}}></span>
                <p className={s.footerText}>홈</p>
            </li>
            <li className={s.footerMenu_li}>
                <span className={s.footerMenu_icon} style={{backgroundImage:`url(./footer2.png)`}}></span>
                <p className={s.footerText}>검색</p>
            </li>
            <li className={s.footerMenu_li}>
                <span className={s.footerMenu_icon} style={{backgroundImage:`url(./footer3.png)`}}></span>
                <p className={s.footerText}>마이페이지</p>
            </li>
            <li className={s.footerMenu_li}>
                <span className={s.footerMenu_icon} style={{backgroundImage:`url(./footer4.png)`}}></span>
                <p className={s.footerText}>더보기</p>
            </li>          
            </ul>
        </footer>
    )
}

export default Footer