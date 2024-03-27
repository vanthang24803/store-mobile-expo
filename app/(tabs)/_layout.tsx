// eslint-disable-next-line import/order
import Colors from '@/constant/Colors';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.dark,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
        tabBarIconStyle: {
          fontSize: 24,
          marginBottom: -5,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Tìm kiếm',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-sharp" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: 'Giỏ hàng',
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-cart" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Tài khoản',
          tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
