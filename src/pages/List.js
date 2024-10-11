import React, { useEffect } from 'react';
import BookStore from './stores/BookStore'; 

const List = () => {
    const { mainItems, items, itemApi, loading } = BookStore();

    useEffect(() => {
        itemApi('BlogBest');
    }, []);
    
    //console.log(mainItems);
    
    if (loading) return <div>Loading...</div>;



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
