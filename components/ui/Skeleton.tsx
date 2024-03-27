/* eslint-disable prettier/prettier */
import { Dimensions, View } from 'react-native';

import Colors from '@/constant/Colors';

const screenWidth = Math.round(Dimensions.get('window').width);


const Skeleton = () => {
  return (
    <View
      style={{
        width: screenWidth * 0.45,
        height: 200,
        backgroundColor: Colors.zinc,
        borderRadius: 8,
      }}
    />
  );
};

export default Skeleton;
