import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/material';

const BookCard = () => {
    const book = require('../../utils/book.jpg')
    // const useStyles = makeStyles({
    //     card: {
    //         width: 300,
    //     }
    // })
  return (
    <Card className='w-[132px] h-[315px] md:w-[162px] md:h-[362px] shadow-lg flex flex-col mt-3 bg-teal-500'>
        {/* div for cover image of book */}
        <div className='w-full h-[195px] md:h-[235px] flex justify-center'>
            <CardMedia
            className='w-[128px] h-[195px] md:w-[150px] md:h-[235px]'
            image={book}
            title="green iguana"
            />
        </div>
        {/* div for details of book */}
        <div className='w-full h-[120px] md:h-[127px]'>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='text-sm important'>
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
        </div>
        
    </Card>
  )
}

export default BookCard