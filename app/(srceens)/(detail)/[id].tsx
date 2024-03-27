/* eslint-disable prettier/prettier */
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const Detail = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
