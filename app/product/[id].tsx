/* eslint-disable prettier/prettier */
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, View } from 'react-native';

import ProductDetail from '@/components/Detail';
import Colors from '@/constant/Colors';
import { Product } from '@/types';
import api from '@/utils/api';

const screenHeight = Math.round(Dimensions.get('window').height);

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    const response = await api.get(`/api/product/${id}`);

    if (response.status === 200) {
      setProduct(response.data);
    }
  };

  useEffect(() => {
    try {
      setLoading(true);
      fetchProduct();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  return (
    <ScrollView style={styles.container}>
      {loading ? (
        <View style={styles.loadingContent}>
          <ActivityIndicator size="large" color={Colors.secondary} />
        </View>
      ) : (
        <>{product && <ProductDetail product={product} />}</>
      )}
    </ScrollView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: screenHeight,
  },
});
