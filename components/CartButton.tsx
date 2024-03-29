/* eslint-disable prettier/prettier */
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors from '@/constant/Colors';
import useCart from '@/hooks/use-cart';

const CartButton = () => {
  const router = useRouter();
  const cart = useCart();
  return (
    <TouchableOpacity style={styles.touch} onPress={() => router.push(`/(tabs)/cart`)}>
      <View style={styles.box}>
        <Feather name="shopping-cart" size={20} color="black" />
      </View>
      {cart.items.length > 0 && (
        <View style={styles.boxTotal}>
          <Text style={styles.total}>{cart.totalItems()}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  touch: {
    position: 'absolute',
    top: 50,
    right: '5%',
    zIndex: 999,
  },
  box: {
    width: 30,
    height: 30,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  boxTotal: {
    position: 'absolute',
    right: -4,
    top: -6,
    backgroundColor: Colors.red,
    borderRadius: 8,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  total: {
    color: Colors.white,
    fontSize: 10,
    fontWeight: '600',
  },
});
