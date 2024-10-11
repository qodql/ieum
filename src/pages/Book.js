import React, { useEffect, useState } from 'react';
import Header from './component/Header'
import Footer from './component/Footer'
import { ContentList_card } from './component/contents/ContentCard'
import s from '../styles/css/page/book.module.scss'
import BookStore from './stores/BookStore';
import { useRouter } from 'next/router';

const Book = () => {
    const { mainItems, itemApi, loading } = BookStore();
    const [selectedCategory, setSelectedCategory] = useState('Bestseller');
    const router = useRouter();
    
    useEffect(() => {
        const coverSize = 'Mid';

        itemApi('main', coverSize);
    }, [itemApi]);

    const categories = ['Bestseller', 'ItemNewAll', 'BlogBest'];

    if(loading) return <div>Loading..</div>;

    const handleItemClick = (item) => {
        router.push({
            pathname: '/Detail',
            query: { itemId: item.itemId },
        });
    };

  return (
    <>
        <Header />
            <div className={s.book}>
                <div className={s.bookBanner}>
                    <h2>카테고리별</h2>
                    <div className={s.bookBanner_Icon}></div>
                </div>

                 <div className={s.tabContainer}>
                    {categories.map((v) => (
                        <button
                            key={v}
                            className={selectedCategory === v ? s.activeTab : s.tab}
                            onClick={() => setSelectedCategory(v)}
                        >
                            {v}
                        </button>
                    ))}
                </div>

                <div className={s.bookList}>
                    {mainItems[selectedCategory]?.item.map((item) => (
                        <div key={item.itemId} onClick={() => handleItemClick(item)}>
                            <ContentList_card key={item.itemId} item={item} />
                        </div>
                    ))}
                </div>
            </div>
        <Footer />
    </>
  )
}

export default Book
