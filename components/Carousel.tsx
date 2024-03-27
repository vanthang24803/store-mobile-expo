/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

import { Billboard } from '@/types';

type CarouselProps = {
  billboards: Billboard[];
};

const Carousel = ({ billboards }: CarouselProps) => {
  return (
    <View style={styles.container}>
      <Swiper autoplay autoplayTimeout={5} loop showsPagination={false}>
        {billboards.map((item, index) => (
          <Image key={index} source={{ uri: item.thumbnail }} style={styles.image} />
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    marginHorizontal: 20,
    height: 200,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
});

export default Carousel;
