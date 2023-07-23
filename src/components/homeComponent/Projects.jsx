import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
// import '../style.css';
import Office from '../../Images/officeBuilding.png';

function Projects() {
  return (
    <div>
      <div className='BgWave'></div>
      <Box
        color='#FFF'
        p='20px'
        display='flex'
        justifyContent='center'
        margin='0 auto'
        bg='#00221B'
      >
        <Box>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            p='10px'
            width='100%'
            maxWidth='180px'
            borderRadius='36px'
            bg='#BFD0CD'
            margin='0 auto'
          >
            <Text
              fontSize='12px'
              textTransform='uppercase'
              fontWeight='500'
              color='#004436'
            >
              Testimonials
            </Text>
          </Box>
          <Box>
            <Text
              fontSize='36px'
              textAlign='center'
              letterSpacing='0.72px'
              fontWeight='700'
            >
              Some of the projects we’ve executed
            </Text>
          </Box>

          <Box>
            <Image src={Office} alt='' />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Projects;
