/* eslint-disable prettier/prettier */
import { useRouter } from 'expo-router';
import { Image, TouchableOpacity } from 'react-native';

type Props = {
  size: number;
};

const Avatar = ({ size }: Props) => {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push(`/(tabs)/profile`)}>
      <Image
        style={{
          width: size,
          borderRadius: 999,
          height: size,
          objectFit: 'cover',
        }}
        source={{
          uri: 'https://i.pinimg.com/280x280_RS/f7/9e/40/f79e40302a2e76b3e67589c4e8b92a12.jpg',
        }}
      />
    </TouchableOpacity>
  );
};

export default Avatar;
