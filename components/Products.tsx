/* eslint-disable prettier/prettier */
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import Card from './Card';
import Skeleton from './ui/Skeleton';

import Colors from '@/constant/Colors';
import { Product } from '@/types';

type Props = {
  loading: boolean;
  products: Product[] | null;
};

const Products = ({ loading, products }: Props) => {
  return (
    <View style={{ backgroundColor: loading ? Colors.white : Colors.zinc }}>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.heading}>Gợi ý hôm nay</Text>
          <Link href="/(tabs)/profile">
            <Text style={styles.subheading}>Xem tất cả</Text>
          </Link>
        </View>

        <View style={styles.content}>
          {loading ? (
            <>
              {Array(10)
                .fill(null)
                .map((_, index) => (
                  <Skeleton key={index} />
                ))}
            </>
          ) : (
            <>{products?.map((product, index) => <Card key={index} product={product} />)}</>
          )}
        </View>
      </View>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  heading: {
    textTransform: 'uppercase',
    color: Colors.secondary,
    fontWeight: 'bold',
  },
  subheading: {
    color: Colors.blue,
    fontWeight: '600',
  },
  content: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginVertical: 10,
    gap: 10,
  },
});
