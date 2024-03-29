/* eslint-disable prettier/prettier */
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Logo from './Logo';
import Avatar from './ui/Avatar';

import SearchBar from '@/components/SearchBar';
import useCart from '@/hooks/use-cart';

const Appbar = () => {
  const router = useRouter();
  const cart = useCart();
  return (
    <View>
      <View style={styles.main}>
        <Logo />
        <Avatar size={32} />
      </View>
      <View style={styles.row}>
        <SearchBar />
        <TouchableOpacity onPress={() => router.push(`/(tabs)/cart`)}>
          <Feather name="shopping-cart" size={24} />
          {cart.items.length > 0 && (
            <View style={styles.badgeContent}>
              <Text style={styles.badgeText}>{cart.totalItems()}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Appbar;

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeContent: {
    position: 'absolute',
    right: -10,
    top: -8,
    backgroundColor: 'red',
    borderRadius: 8,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 11,
    fontWeight: '600',
  },
});
