'use strict';
import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import axios from 'axios';

const Index = () => {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://660d12f03a0766e85dbf7afb.mockapi.io/ShopeeAppClone/products',
        );
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.push('product', {
          product_name: item.product_name,
          product_price: item.product_price,
          product_image1: item.product_image1,
          product_image2: item.product_image2,
          product_image3: item.product_image3,
          product_image4: item.product_image4,
          product_image5: item.product_image5,
        })
      }>
      <View style={styles.product_item}>
        <Image
          style={styles.product_image}
          source={{uri: item.product_image1}}
        />
        <Text
          style={styles.product_name}
          numberOfLines={2}
          ellipsizeMode="tail">
          {item.product_name}
        </Text>
        <Text style={styles.product_price}>đ {item.product_price}</Text>
        <View style={styles.product_Evaluate}>
          <View style={styles.product_star}>
            <Ionicons style={styles.product_star_icon} name="star" />
            <Text style={styles.product_star_soluong}>4.9</Text>
          </View>
          <View style={styles.linedoc}></View>
          <View style={styles.product_luotdanhgia}>
            <Text style={styles.product_luotdanhgia_text}>Đã bán </Text>
            <Text style={styles.product_luotdanhgia_text}>3208</Text>
          </View>
        </View>
        <View style={styles.product_location}>
          <Ionicons
            style={styles.product_location_icon}
            name="location-outline"
          />
          <Text style={styles.product_location_name}>TP.Hồ Chí Minh</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      columnWrapperStyle={styles.product_row}
    />
  );
};

export default Index;
