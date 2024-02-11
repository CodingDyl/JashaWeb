import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { jashaGal } from '../../constants';

const ImageListJasha = () => {
  return (
    <Box sx={{ overflowY: 'scroll' }} className="mt-20 mb-10 h-450 md:h-full w-full">
    <ImageList variant="masonry" cols={3} gap={8}>
        {jashaGal.map((item) => (
        <ImageListItem key={item.img}>
        <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
        />
     </ImageListItem>
  ))}
</ImageList>
</Box>
  )
}

export default ImageListJasha