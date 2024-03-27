/* eslint-disable prettier/prettier */
import { View} from 'react-native';

import Colors from '@/constant/Colors';

export default function Separator() {
  return (
    <View
      style={{
        height: 8,
        backgroundColor: Colors.zinc,
      }}
    />
  );
}
