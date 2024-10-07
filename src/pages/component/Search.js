import React from 'react'
import s from '@/styles/css/component/Search.module.scss'


const Search = () => {
  return (
    <div>
        <form className={s.headerSearch}>
            <input 
            type="search" 
            name="search" 
            placeholder="도서 이름을 입력해 주세요"/>
            <span 
            className={s.searchIcon}
            style={{backgroundImage:`url(./Vector.svg)`}}></span>
        </form>
    </div>
  )
}

export default Search