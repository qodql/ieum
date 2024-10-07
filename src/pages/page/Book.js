import React, { useEffect } from 'react';
import BookStore from '../stores/BookStore';

const Book = () => {
    const { books, loading, Bestsellers } = BookStore();

    useEffect(() => {
        Bestsellers();
      }, [Bestsellers]);

    if (loading) return <p>Loading...</p>;

    console.log(books);

    return (
      <div>
        <h2>베스트셀러</h2>
        <ul>
          {books.map((book) => (
            <li key={book.itemId}>
              <h3>{book.title}</h3>
              <p>지은이: {book.author}</p>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Book;