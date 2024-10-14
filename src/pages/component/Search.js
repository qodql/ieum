import s from '@/styles/css/component/Search.module.scss'
import BookStore from '../stores/BookStore'; 
import { useEffect, useState } from 'react';

const Search = () => {

  const { searchResults, searchApi, loading } = BookStore();
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    //console.log("검색 결과:", searchResults);
  }, [searchResults]);

  // 로딩
  if (loading) {
    return (
        <div className={s.loading}>
            <img src="/icon/loading.gif" alt="Loading..." />
        </div>
    );
  }

  // 검색
  const handleSearch = (e) => {
    e.preventDefault();
    searchApi(keyword);
  };

  return (
    <div>
        <form className={s.headerSearch} onSubmit={handleSearch}>
            <input 
              type="search" 
              name="search" 
              placeholder="도서 이름을 입력해 주세요"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <span 
            className={s.searchIcon}
            style={{backgroundImage:`url(./Vector.svg)`}}></span>
        </form>

        <div>
        <ul>
        {searchResults.item && searchResults.item.length > 0 ? (
          searchResults.item.map((v) => (
            <li key={v.itemId}>
              <p>{v.title}</p>
            </li>
          ))
        ) : (
          <li><p></p></li>
        )}
      </ul>
        </div>
    </div>
  )
}

export default Search