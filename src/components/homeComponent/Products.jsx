import React from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import Glass from '../../Images/glass6.svg';
import Glass1 from '../../Images/glass1.png';
import Glass2 from '../../Images/glass2.png';
import Glass3 from '../../Images/glass3.png';
import Glass4 from '../../Images/glass4.png';
import Glass5 from '../../Images/glass5.png';

function Products() {
  const productArray = [
    {
      image: Glass,
      name: 'Laminated Glass',
    },
    {
      image: Glass1,
      name: 'Tempered Glass',
    },
    {
      image: Glass2,
      name: 'Bulletproof Glass',
    },
    {
      image: Glass3,
      name: 'Domestic Glass',
    },
    {
      image: Glass4,
      name: 'Automotive Glass',
    },
    {
      image: Glass5,
      name: 'Insulated Glass',
    },
  ];

  return (
    <div style={{ backgroundColor: '#00221B' }}>
      <Box bg='#00221B' margin='0 auto' maxWidth='1180px' p='25px' color='#FFF'>
        <Box
          maxWidth='180px'
          borderRadius='36px'
          mt='25px'
          p='10px'
          width='100%'
          bg='#BFD0CD'
          margin='0 auto'
          textAlign='center'
        >
          <Text
            textTransform='uppercase'
            fontSize='12px'
            fontWeight='500'
            color='#004436'
          >
            Our Products
          </Text>
        </Box>
        <Box display='flex' mt='25px' py='20px' justifyContent='center'>
          <SimpleGrid spacingX={20} spacingY={25} columns={[2, 2, 3]}>
            {productArray.map((item, i) => (
              <Box
                key={i}
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexWrap='wrap'
                p='20px'
                backgroundImage={`${item.image}`}
                backgroundSize='cover'
                backgroundPosition='100% 100%'
                height={['120px', '220px', '300px']}
                width={['120px', '220px', '300px']}
                // maxWidth='300px'
                textAlign='center'
              >
                {/* <Image src={item.image} width='280px' alt='' /> */}
                <Text fontSize='24px' textAlign='center' fontWeight='600'>
                  {item.name}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
}

export default Products;
