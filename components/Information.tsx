/* eslint-disable prettier/prettier */
import { Text, View, Image } from 'react-native';

import Colors from '@/constant/Colors';
import { Product } from '@/types';

type Props = {
  product: Product;
};

const Information = ({ product }: Props) => {
  return (
    <View
      style={{
        marginTop: 15,
        backgroundColor: Colors.white,
        padding: 10,
      }}>
      <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Mô tả</Text>
      <Text style={{ marginVertical: 4, fontSize: 12 }}>{product.detail}</Text>
      <Image
        source={{
          uri: product.thumbnail,
        }}
        style={{
          width: '100%',
          height: 300,
          objectFit: 'contain',
          marginVertical: 20,
        }}
      />
      <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Chi tiết</Text>
      <Text style={{ marginVertical: 4, fontSize: 12 }}>{product.introduction}</Text>
    </View>
  );
};

export default Information;
