import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colors from '@/constant/Colors';
import useCart from '@/hooks/use-cart';
import { AntDesign, Feather } from '@expo/vector-icons';
import { formatPrice, price } from '@/utils/format';

export default function TabOneScreen() {
  const cart = useCart();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text
            style={{
              fontSize: 20,
              marginHorizontal: 15,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            Giỏ hàng
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginHorizontal: 15,
              fontWeight: '400',
              color: '#64748b',
            }}>
            Có{' '}
            <Text style={{ fontWeight: 'bold', color: Colors.dark, fontSize: 15 }}>
              {cart.totalItems()}
            </Text>{' '}
            sản phẩm trong giỏ
          </Text>
        </View>

        <View style={{ height: 0.25, backgroundColor: '#64748b', margin: 10 }} />
      </View>
      <ScrollView style={{ flex: 1, margin: 10 }}>
        {cart.items.map((item, index) => (
          <View key={index} style={{ flexDirection: 'row', gap: 10, marginBottom: 10 }}>
            <Image
              source={{ uri: item.product.thumbnail }}
              style={{ width: 80, height: 110, borderRadius: 4, objectFit: 'fill' }}
            />
            <View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '85%' }}>
                <Text style={{ fontSize: 12, fontWeight: '500', width: '90%' }}>
                  {item.product.name}
                </Text>
                <Feather
                  name="x"
                  size={20}
                  color="black"
                  onPress={() => cart.removeItem(item.product.id, item.product.options[0].id)}
                />
              </View>
              <Text style={{ fontSize: 12, color: '#64748b' }}>
                Số lượng: <Text style={{ color: Colors.dark }}>{item.quantity}</Text>
              </Text>
              <View style={styles.row}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 2,
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '800',
                      color: Colors.red,
                    }}>
                    {formatPrice(item.product.options[0].price, item.product.options[0].sale)}₫
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '400',
                      color: '#64748b',
                      marginLeft: 10,
                      textDecorationLine: 'line-through',
                    }}>
                    {price(item.product.options[0].price)}₫
                  </Text>
                  {item.product.options[0].sale > 0 && (
                    <View
                      style={{
                        backgroundColor: Colors.red,
                        padding: 5,
                        borderRadius: 4,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: 20,
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          color: Colors.white,
                          fontWeight: 'bold',
                        }}>
                        {item.product.options[0].sale}%
                      </Text>
                    </View>
                  )}
                </View>
              </View>
              <View style={{ flexDirection: 'row', gap: 5, marginTop: 8 }}>
                <TouchableOpacity
                  style={{
                    width: 30,
                    height: 30,
                    borderWidth: 0.25,
                    backgroundColor: Colors.white,
                    borderRadius: 3,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => {}}>
                  <AntDesign name="minus" size={16} color="black" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 0.25,
                    backgroundColor: Colors.white,
                    borderRadius: 3,
                  }}>
                  <Text>{item.quantity}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    width: 30,
                    height: 30,
                    borderWidth: 0.25,
                    borderRadius: 3,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: Colors.white,
                  }}
                  onPress={() => {}}>
                  <AntDesign name="plus" size={16} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
