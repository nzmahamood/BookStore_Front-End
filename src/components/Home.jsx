import React from 'react'
import AdBanner from './Bannerslider/AdBanner'
import BookContainer from './Home/BookContainer'
import AllNavbars from './navigation/AllNavbars'
import { data } from '../utils/books'

const Home = () => {
    const categories = [
            { name: 'Recommended Books For You', books: data },
            { name: 'Best Non-Fiction Books', books: data },
            { name: 'Best Fiction Books', books: data },
    ]
  return (
    <>
    <AllNavbars />
    <AdBanner />
    {categories.map(category => (
        <BookContainer
          key={category.name}
          categoryName={category.name}
          books={category.books}
        />
      ))}
    </>
  )
}

export default Home