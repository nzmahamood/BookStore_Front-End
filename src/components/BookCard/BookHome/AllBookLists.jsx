import { Category } from '@mui/icons-material';
import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { BASE_URL_NET } from '../../../utils/domains';
import BookList from './BookList';

const AllBookLists = () => {
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
    {categories.map(category => (
        <BookList key={category.name}
        category={category.name}
        data={category.books} 
        />
    ))}
    </>
  )
}

export default AllBookLists