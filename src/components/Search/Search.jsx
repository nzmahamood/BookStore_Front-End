import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SearchBooksContainer from './SearchBooksContainer';
import SearchHeader from './SearchHeader'
import { data } from '../../utils/books'
import { books } from '../BookCard/books';
import axios from 'axios'
import { BASE_URL_NET } from '../../utils/domains';
const Search = () => {
    const {query} = useParams();
    const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(16);

  const [booksData, setBooksData] = useState([]);

  // Fetching search results using Axios
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${BASE_URL_NET}/books/api/books/search/?q=${query}`
      );
      setBooksData(result.data);
    };
    fetchData();
  }, [query]);

  console.log("search", query);

  // Logic for displaying current books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = booksData.slice(indexOfFirstBook, indexOfLastBook);
  

  // Logic for changing page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <main className='flex justify-center min-h-[62vh] w-full mb-11'>
        <div className='relative top-3 flex p-3 flex-col w-full md:w-[75%]  min-h-[75vh]'>
            <SearchHeader search={query} data={data} pagination={paginate} currentPage={currentPage}/>
            <SearchBooksContainer data={currentBooks}/>
        </div> 
    </main>
  )
}

export default Search