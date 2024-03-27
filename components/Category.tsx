/* eslint-disable prettier/prettier */
import * as Hapatics from 'expo-haptics';
import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import Separator from './ui/Separator';

import { categories } from '@/constant';
import Colors from '@/constant/Colors';

type Props = {
  onCategoryChanged: (category: string) => void;
};

export default function Category({ onCategoryChanged }: Props) {
  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<(TouchableOpacity | null)[]>([]);

  const [activeIndex, setActiveIndex] = useState(0);

  const selectCategory = (index: number) => {
    const selected = itemsRef.current[index];

    setActiveIndex(index);

    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x - 20, y: 0, animated: true });
    });

    Hapatics.impactAsync(Hapatics.ImpactFeedbackStyle.Light);
    onCategoryChanged(categories[index].path);
  };

  return (
    <View style={styles.container}>
      <Separator />
      <ScrollView
        ref={scrollRef}
        horizontal
        style={{
          marginVertical: 10,
        }}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            ref={(e) => (itemsRef.current[index] = e)}
            onPress={() => selectCategory(index)}>
            <View style={styles.colAction}>
              <View style={activeIndex === index ? styles.boxCategoryActive : styles.boxCategory}>
                <Image
                  source={item.image}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
              <Text style={activeIndex === index ? styles.textActive : styles.textCategory}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Separator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  colAction: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
  },
  boxCategory: {
    marginHorizontal: 10,
    width: 50,
    height: 50,
    borderWidth: 0.25,
    borderColor: Colors.gray,
    backgroundColor: Colors.zinc,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxCategoryActive: {
    marginHorizontal: 10,
    width: 50,
    height: 50,
    borderWidth: 0.25,
    borderColor: Colors.gray,
    backgroundColor: Colors.secondary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCategory: {
    fontSize: 10,
  },
  textActive: {
    color: Colors.dark,
    fontWeight: '600',
    fontSize: 10,
  },
});
