/* eslint-disable prettier/prettier */

import { useRouter } from 'expo-router';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import Colors from '@/constant/Colors';
import { Product } from '@/types';
import { formatPrice, price } from '@/utils/format';

type Props = {
  product: Product | undefined;
};

const screenWidth = Math.round(Dimensions.get('window').width);

const Card = ({ product }: Props) => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push(`/product/${product?.id}`)}>
      <View style={styles.container}>
        <Image source={{ uri: product?.thumbnail }} style={styles.image} />
        <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
          {product?.name}
        </Text>
        <View style={styles.row}>
          <Text
            style={{
              fontSize: 12,
              color: Colors.secondary,
            }}>
            {product?.options.length} phiên bản
          </Text>
          {product && product.options[0]?.sale > 0 && (
            <View style={styles.sale}>
              <Text style={styles.saleText}>{product?.options[0].sale}%</Text>
            </View>
          )}
        </View>
        <View style={styles.row}>
          <Text style={styles.priceSale}>
            {formatPrice(product?.options[0].price, product?.options[0].sale)}₫
          </Text>
          {product && product?.options[0].sale > 0 && (
            <Text style={styles.price}>{price(product.options[0].price)}₫</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.45,
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 180,
    objectFit: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  name: {
    fontSize: 12,
    margin: 10,
    fontWeight: '600',
  },
  sale: {
    backgroundColor: 'pink',
    padding: 4,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saleText: {
    fontSize: 12,
    color: Colors.red,
    fontWeight: '400',
  },
  price: {
    fontSize: 12,
    fontWeight: '400',
    color: Colors.dark,
    textDecorationLine: 'line-through',
  },
  priceSale: {
    fontSize: 12,
    fontWeight: '800',
    color: Colors.red,
  },
});
