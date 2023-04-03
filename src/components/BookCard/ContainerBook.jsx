import { Container } from '@mui/material'
import React from 'react'
import BookSlider from '../Home/BookSlider'
import { books } from './books'
import SliderComponent from './SliderComponent'
const ContainerBook = () => {
  return (
    <Container maxWidth='md' className='min-h-[325px] md:min-h-[375px] relative top-0'>
          <SliderComponent book={books}/>
    </Container>
  )
}

export default ContainerBook