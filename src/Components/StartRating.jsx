import { Box } from '@mui/material';
import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
const StartRating = ({rating}) => {
  return (
    <Box
 
sx={{
display: "inline-flex",
position: "relative",
textAlign: "left",
}}
>
{[...new Array(5)].map((arr, index) => {
// const rating=item.rating;

return (
 <Box
   position="relative"
   key={index}
 >
   <Box
     sx={{
       width: `${(rating-index)>1?100:rating-(index)<=0?0:50}%`,
       overflow: "hidden",
       position: "absolute",
       color:"gold"
     }}
   >
     <StarIcon />
   </Box>
   <Box sx={{
       color:"gold"
     }}>
     <StarBorderIcon />
   </Box>
 </Box>
);
})}
</Box>
  )
}

export default StartRating
