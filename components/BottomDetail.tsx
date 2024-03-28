/* eslint-disable prettier/prettier */
import { AntDesign } from '@expo/vector-icons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { useRef, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Colors from '@/constant/Colors';
import { Option, Product } from '@/types';
import { formatPrice, price } from '@/utils/format';

type Props = {
  product: Product;
  bottomSheetRef: React.RefObject<BottomSheetMethods>;
  handleSheetChanges: (index: number) => void;
  snapPoints: string[];
  option: Option;
  handlerOption: (option: Option) => void;
};

export default function BottomDetail({
  product,
  bottomSheetRef,
  handleSheetChanges,
  snapPoints,
  option,
  handlerOption,
}: Props) {
  const itemsRef = useRef<(TouchableOpacity | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectOption = (index: number) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const selected = itemsRef.current[index];

    setActiveIndex(index);

    handlerOption(product.options[index]);
  };

  const [total, setTotal] = useState(1);

  return (
    <BottomSheet
      enablePanDownToClose
      index={0}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      snapPoints={snapPoints}>
      <BottomSheetView
        style={{
          flex: 1,
          backgroundColor: Colors.white,
          margin: 10,
          zIndex: 999,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Image
              source={{
                uri: product.thumbnail,
              }}
              style={{
                width: 100,
                height: 100,
                objectFit: 'contain',
              }}
            />
            <View
              style={{
                flexDirection: 'column',
              }}>
              <Text style={styles.price}>{formatPrice(option.price, option.sale)}₫</Text>
              <View style={{ flexDirection: 'row', gap: 20, marginVertical: 6 }}>
                <Text
                  style={{
                    textDecorationLine: 'line-through',
                    color: Colors.gray,
                    fontSize: 12,
                  }}>
                  {price(option.price)}₫
                </Text>
                {option?.sale > 0 && (
                  <View style={styles.sale}>
                    <Text style={styles.saleText}> -{option.sale}%</Text>
                  </View>
                )}
              </View>
              <Text style={{ color: '#64748b', fontSize: 13 }}>{option.name}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{ marginHorizontal: 8 }}
            onPress={() => {
              bottomSheetRef.current?.close();
            }}>
            <AntDesign name="close" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ height: 0.25, width: '100%', backgroundColor: '#64748b', marginTop: 10 }} />

        <View style={{ flexDirection: 'column', marginTop: 20 }}>
          <Text style={{ fontWeight: 'bold', color: '#64748b', marginHorizontal: 10 }}>
            Tùy chọn
          </Text>
          <ScrollView
            horizontal
            style={{
              marginVertical: 10,
            }}>
            {product.options.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => selectOption(index)}
                ref={(e) => (itemsRef.current[index] = e)}
                style={{
                  borderWidth: 1,
                  borderColor: activeIndex === index ? Colors.red : Colors.gray,
                  padding: 10,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 8,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: activeIndex === index ? Colors.red : Colors.dark,
                    fontWeight: activeIndex === index ? 'bold' : '400',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text style={{ fontWeight: 'bold', color: '#64748b', marginHorizontal: 10 }}>
            Số lượng
          </Text>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                borderWidth: 0.25,
                backgroundColor: total <= 1 ? '#f1f5f9' : Colors.white,
                borderRadius: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                if (total > 1) {
                  setTotal(total - 1);
                }
              }}>
              <AntDesign name="minus" size={16} color="black" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                borderWidth: 0.25,
                borderRadius: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>{total}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                borderWidth: 0.25,
                borderRadius: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => setTotal(total + 1)}>
              <AntDesign name="plus" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 40, gap: 10, marginHorizontal: 10 }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              height: 50,
              width: '50%',
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
              backgroundColor: '#cbd5e1',
              borderColor: Colors.white,
            }}>
            <Text style={{ fontWeight: 'bold', color: Colors.dark }}>Thêm vào giỏ hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              height: 50,
              width: '50%',
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
              backgroundColor: Colors.red,
              borderColor: Colors.white,
            }}>
            <Text style={{ fontWeight: 'bold', color: Colors.white }}>Mua ngay</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  price: { fontSize: 22, fontWeight: 'bold' },
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
    fontWeight: 'bold',
  },
});
