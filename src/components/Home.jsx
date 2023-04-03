import React, { useEffect, useState } from 'react'
import AdBanner from './Bannerslider/AdBanner'
import BookContainer from './Home/BookContainer'
import { data } from '../utils/books'
import FooterMobile from './navigation/FooterMobile'
import axios from 'axios'
import { BASE_URL_NET } from '../utils/domains'
const Home = () => {
  const [books, setBooks] = useState({
    fiction_books: [],
    non_fiction_books: [],
    popular_books: [],
  });

  const categories = [
    { name: 'Recommended Books For You', books: books.popular_books },
    { name: 'Best Non-Fiction Books', books: books.non_fiction_books },
    { name: 'Best Fiction Books', books: books.fiction_books },
  ];

  useEffect(() => {
    axios.get(`${BASE_URL_NET}/books/api/books`)
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <AdBanner />
      <main className='min-h-[100vh] flex flex-col my-5'>
        {categories.map(category => (
          <BookContainer
            key={category.name}
            categoryName={category.name}
            books={category.books}
          />
        ))}
      </main>
      {/* footer is here */}
    </>
  );
};

export default Home;