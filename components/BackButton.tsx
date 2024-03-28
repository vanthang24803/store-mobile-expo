/* eslint-disable prettier/prettier */
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import Colors from '@/constant/Colors';

const BackButton = () => {
  const router = useRouter();
  return (
    <TouchableOpacity style={styles.touch} onPress={() => router.back()}>
      <View style={styles.box}>
        <Ionicons name="arrow-back" size={20} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  touch: {
    position: 'absolute',
    top: 50,
    left: '2%',
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
});
