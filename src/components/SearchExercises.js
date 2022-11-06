import React, {useEffect, useState} from 'react'
import {Box, Stack, Typography, Button, TextField} from '@mui/material';

import { exercisesOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = (setExercises, bodyParts, setBodyPart) => {

  const [search, setSearch] = useState('')
  const [bodyPart, bodyPartsData] = useState([])

  useEffect(() => {
    const fetchedExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
      exercisesOptions);
      setBodyPart(['all', ...bodyPartsData]);
    }
  }, [])
  

  const handleSearch = async () => {
    if(search){
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
       exercisesOptions);

       const searchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
        
       );
       setSearch('');
       setExercises(searchedExercises);

       console.log(exercisesData);
    }
  }

  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px">

      <Typography fontWeight={700} sx={{
        fontSize: {lg:'44px', xs: '30px'}
      }} mb="50px" textAlign="center">
        Awesome Exercises Yuo Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField 
        sx={{
            input:{
              fontWeight:"700",
              border:'none',
              borderRadius:'4px'
            },
            width:{
              lg:'1170px', xs:'350px'
            },
            backgroundColor:"#fff",
            borderRadius:"40px"
        }}
        height="76px"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercises"
        type="text"
        />
        <Button className="search-btn"
          sx={{
            bgcolor:'#ff2625',
            color:'#fff',
            textTransform:'none',
            width: {lg:'175px', xs:'80px'},
            fontSize: {lg:'20px', xs:'14px'},
            height:'56px',
            position:'absolute',
            right:'0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={
        {position: 'relative', width:'100%', p:'20px'}}
      >
        <HorizontalScrollbar data={bodyParts} bodyParts={bodyParts} setBodyPart={setBodyPart}/>

      </Box>

    </Stack>
  )
}

export default SearchExercises