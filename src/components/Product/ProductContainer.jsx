'use client';
import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Glass from '../../Images/glass3.png';
import Insulated from '../../Images/glass6.png';
import Luminated from '../../Images/glass4.png';

function ProductContainer() {
  const productData = [
    {
      id: 1,
      Image: Glass,
      name: 'Insulated glass',
    },
    {
      id: 2,
      Image: Insulated,
      name: 'Domestic glass',
    },
    {
      id: 3,
      Image: Luminated,
      name: 'Laminated glass',
    },
  ];

  return (
    <div style={{ backgroundColor: '#00221B', padding: '10px' }}>
      <Box
        color='#FFF'
        px='25px'
        maxWidth='1280px'
        bg='#00221B'
        width='100%'
        margin='0 auto'
      >
        <Box className='swiperContainer' py='10px'>
          <Swiper
            navigation={true}
            spaceBetween={50}
            slidesPerView={3}
            direction='horizontal'
            pagination={true}
          >
            {productData.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <Box
                    display='flex'
                    flexDirection='column'
                    maxWidth='350px'
                    // border='2px'
                  >
                    <Box>
                      <Image src={item.Image} width='320px' alt='' />
                    </Box>
                    <Text fontWeight='500' fontSize={['16px', '20px', '20px']}>
                      {item.name}
                    </Text>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
        <Box bg='#00110E'></Box>
      </Box>
    </div>
  );
}

export default ProductContainer;
