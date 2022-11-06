import React, {useState} from 'react';
import {Box} from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [bodyParts, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises 
      setExercises={setExercises}
      bodyParts={bodyParts}
      setBodyPart={setBodyPart}
      />
      <Exercises
      setExercises={setExercises}
      bodyParts={bodyParts}
      setBodyPart={setBodyPart}
      />
    </Box>
  )
}

export default Home