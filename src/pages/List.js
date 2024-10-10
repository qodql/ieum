import React, { useEffect } from 'react';
import BookStore from './stores/BookStore'; 

const List = () => {
    const { mainItems, items, itemApi, loading } = BookStore();

    useEffect(() => {
        const cateNum = '170';
        const coverSize = 'Big'; 
        itemApi('main', cateNum, coverSize);
    }, []);
    
    console.log(mainItems.ItemNewAll.item);

    if (loading) return <div>Loading..</div>;

    return (
        <div>
            <h1>Main Items</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.itemId}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;
