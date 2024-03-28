/* eslint-disable prettier/prettier */
import { AntDesign } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import { useCallback, useMemo, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';

import Actions from './Actions';
import BackButton from './BackButton';
import BottomDetail from './BottomDetail';
import CartButton from './CartButton';
import Information from './Information';

import Colors from '@/constant/Colors';
import { Option, Product } from '@/types';
import { formatPrice, price } from '@/utils/format';

type Props = {
  product: Product;
};

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const ProductDetail = ({ product }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleSheetChanges = useCallback((index: number) => {}, []);

  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  const handlerOpenPress = () => bottomSheetRef.current?.expand();

  const [option, setOption] = useState<Option>(product.options[0]);

  const handlerOptionUpdate = (option: Option) => {
    setOption(option);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
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
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 10 }}>
              <Text style={styles.price}>{formatPrice(option.price, option.sale)}₫</Text>
              <Text
                style={{
                  textDecorationLine: 'line-through',
                  color: Colors.gray,
                }}>
                {price(option.price)}₫
              </Text>
            </View>
            {option?.sale > 0 && (
              <View style={styles.sale}>
                <Text style={styles.saleText}> -{product?.options[0].sale}%</Text>
              </View>
            )}
          </View>
        </View>
        <View
          style={{
            marginVertical: 10,
            height: 45,
            backgroundColor: Colors.white,
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 12,
          }}>
          <TouchableOpacity
            onPress={handlerOpenPress}
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontWeight: 'bold' }}>{product.options.length} tùy chọn sản phẩm</Text>
            <AntDesign name="right" size={16} color={Colors.gray} />
          </TouchableOpacity>
        </View>
        <Actions />

        <Information product={product} />
      </ScrollView>
      <BottomDetail
        option={option}
        handlerOption={handlerOptionUpdate}
        product={product}
        bottomSheetRef={bottomSheetRef}
        snapPoints={snapPoints}
        handleSheetChanges={handleSheetChanges}
      />
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
    color: Colors.red,
    fontWeight: '600',
  },
  heading: { backgroundColor: Colors.white, paddingVertical: 15, paddingHorizontal: 10 },
  name: {
    fontSize: 15,
    fontWeight: '500',
  },
  rowPrice: { marginVertical: 5, flexDirection: 'row', alignItems: 'center', gap: 10 },
  price: { fontSize: 22, fontWeight: 'bold' },
});
