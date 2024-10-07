import React from 'react'
import s from '@/styles/css/component/button.module.scss'

const ButtonAll = () => {
  return (
    <button>전체보기</button>
  )
}

const ButtonArrow = () => {
    return(
        <button className={s.contentTitle4_btn}></button>
    )
}

export {ButtonAll, ButtonArrow}