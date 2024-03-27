/* eslint-disable prettier/prettier */
import { useRouter } from 'expo-router';
import { Image, TouchableOpacity } from 'react-native';

const Logo = () => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push(`/(tabs)/`)}>
      <Image
        style={{
          width: 38,
          height: 38,
          objectFit: 'cover',
        }}
        source={require('../assets/logo.png')}
      />
    </TouchableOpacity>
  );
};

export default Logo;
