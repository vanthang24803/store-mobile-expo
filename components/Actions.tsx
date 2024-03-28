/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
// eslint-disable-next-line prettier/prettier
import Colors from '@/constant/Colors';
import { AntDesign } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

const Actions = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        padding: 10,
      }}>
      <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Hình thức thanh toán</Text>
      <Text style={{ marginVertical: 4, fontSize: 12 }}>Thanh toán bằng tiền mặt (COD)</Text>

      <View
        style={{ height: 0.25, width: '100%', backgroundColor: '#64748b', marginVertical: 10 }}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Vận chuyển</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 14, color: Colors.red }}>Free</Text>
      </View>
      <Text style={{ marginVertical: 10, fontSize: 13 }}>
        Miễn phí vận chuyển cho tất cả đơn hàng từ 2 sản phẩm trở lên.
      </Text>

      <View
        style={{ height: 0.25, width: '100%', backgroundColor: '#64748b', marginVertical: 10 }}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 14 }}> Chính sách đổi trả </Text>
        <TouchableOpacity>
          <AntDesign name="right" size={12} color="#737373" />
        </TouchableOpacity>
      </View>

      <Text style={{ marginVertical: 10, fontSize: 13 }}>
        Trả hàng trong vòng 6 ngày - Hủy đơn dễ dàng
      </Text>
    </View>
  );
};

export default Actions;
