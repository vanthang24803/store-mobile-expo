/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

import BackButton from './BackButton';
import CartButton from './CartButton';

import Colors from '@/constant/Colors';
import { Product } from '@/types';
import { price } from '@/utils/format';

type Props = {
  product: Product;
};

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const ProductDetail = ({ product }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView>
        <BackButton />
        <CartButton />
        <Swiper
          showsPagination={false}
          style={{
            height: screenHeight * 0.45,
          }}
          onIndexChanged={(index) => setCurrentIndex(index)}>
          {product.images.map((item, index) => (
            <Image
              key={index}
              style={styles.images}
              source={{
                uri: item.url,
              }}
            />
          ))}
        </Swiper>
        <View style={styles.boxTotalImage}>
          <Text style={styles.textTotalImage}>
            {currentIndex + 1}/{product.images.length}
          </Text>
        </View>

        <View style={styles.heading}>
          <Text style={styles.name}>
            [{product.categories[0].name}] - {product.name} - {product.brand}
          </Text>
          <View style={styles.rowPrice}>
            <Text style={styles.price}>{price(product.options[0].price)}₫</Text>
            {product.options[0]?.sale > 0 && (
              <View style={styles.sale}>
                <Text style={styles.saleText}> -{product?.options[0].sale}%</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  images: {
    objectFit: 'fill',
    width: screenWidth,
    height: screenHeight * 0.45,
  },
  boxTotalImage: {
    backgroundColor: Colors.dark,
    position: 'absolute',
    left: '5%',
    top: screenHeight * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 8,
  },
  textTotalImage: {
    fontSize: 12,
    color: Colors.white,
    zIndex: 999,
  },
  sale: {
    backgroundColor: Colors.zinc,
    padding: 4,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saleText: {
    fontSize: 12,
    color: Colors.dark,
    fontWeight: '400',
  },
  heading: { backgroundColor: Colors.white, paddingVertical: 15, paddingHorizontal: 10 },
  name: {
    fontSize: 15,
    fontWeight: '500',
  },
  rowPrice: { marginVertical: 5, flexDirection: 'row', alignItems: 'center', gap: 10 },
  price: { fontSize: 24, fontWeight: 'bold' },
});
