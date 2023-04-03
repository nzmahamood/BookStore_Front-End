import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL_NET } from '../../../utils/domains';
import BookImage from './BookImage'
import BookInformations from './BookInformations'

const BookDetail = () => {
    const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`${BASE_URL_NET}/books/api/books/book-info/${id}`);
        setBook(response.data);
        console.log('data', book)
      } catch (error) {
        console.error(error);
      }
    };
    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }
  return (
    <main className='flex w-full relative top-3 justify-center'>
        <div className='flex flex-col md:flex-row items-center w-full md:w-[950px] relative md:border border-[silver] rounded-lg drop-shadow md:max-h-[750px] min-h-[790px] md:min-h-[750px] bg-white'>
            {/* Image container */}
            <div className='flex md:float-left absolute top-3 md:left-0 w-[300px] md:h-full items-center justify-center'>
                <BookImage bookImg={book && book.thumbnail} />
            </div>
            <div className='flex absolute bottom-0 top-[394px] md:top-0 md:right-0 float-right w-full md:w-[650px] flex-wrap md:h-full px-3'>
                <BookInformations bookInfo={book}/>
            </div>
        </div>
    </main>
  )
}

export default BookDetail