
import { Container } from '@mui/material'
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL_NET } from '../../../utils/domains';
import ButtonComp from './ButtonComp';
import DescriptionComp from './DescriptionComp';
import ImageComponent from './ImageComponent'
import PriceComp from './PriceComp';
import TitleAndAuthorComponent from './TitleAndAuthorComponent';

const BookDetailView = () => {
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
    <Container size='medium' className='flex flex-col md:flex-row shadow-lg relative top-3 md:top-10 md:min-h-[600px] md:mb-9 py-3 md:py-9 rounded-md md:border border-[silver] font-inter'>
        <ImageComponent coverImg={book.thumbnail} />
        <Container size='small' className='w-full p-0'>
            <TitleAndAuthorComponent title={book.title} authors={book.authors} rating={book.average_rating} rateCount={book.ratings_count}/>
            <PriceComp price={book.average_rating}/>
            <ButtonComp book={book}/>
            <DescriptionComp description={book.description} />
        </Container>
        
    </Container>
  )
}

export default BookDetailView