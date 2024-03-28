import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Appbar from '@/components/Appbar';
import Slider from '@/components/Carousel';
import Category from '@/components/Category';
import Products from '@/components/Products';
import Colors from '@/constant/Colors';
import { Billboard, Product } from '@/types';
import api from '@/utils/api';

export default function TabOneScreen() {
  const [category, setCategory] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [billboards, setBillboards] = useState<Billboard[] | null>(null);

  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  const fetchProducts = async () => {
    const response = await api.get(`/api/product?Category=${category}&Filter=Lasted`);

    if (response.status === 200) {
      setProducts(response.data);
    }
  };

  const fetchBillboards = async () => {
    const response = await api.get(`/api/product/billboard`);

    if (response.status === 200) {
      setBillboards(response.data);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchProducts().then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    fetchBillboards();
  });

  useEffect(() => {
    try {
      setLoading(true);
      fetchProducts();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [category]);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 12,
        }}>
        <Appbar />
      </View>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {billboards && <Slider billboards={billboards} />}
        <Category onCategoryChanged={onDataChanged} />
        <Products loading={loading} products={products} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
