/* eslint-disable prettier/prettier */
// eslint-disable-next-line import/order
import Colors from '@/constant/Colors';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, View, TextInput, Dimensions } from 'react-native';

const SearchBar = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Feather name="search" size={24} style={styles.icon} />
      <View style={styles.searchWrapper}>
        <TextInput
          onPressIn={() => router.push(`/(tabs)/search`)}
          style={styles.inputSearch}
          placeholder="Tìm kiểm sản phẩm "
        />
      </View>
    </View>
  );
};

export default SearchBar;

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.75,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 16,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 0.25,
    height: 45,
  },
  icon: {
    marginHorizontal: 10,
    color: Colors.dark,
  },
  iconCamera: {
    marginHorizontal: 10,
  },
  searchWrapper: {
    flex: 1,
    marginRight: 12,
    borderRadius: 12,
  },
  inputSearch: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 12,
  },
});
