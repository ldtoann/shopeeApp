'use strict';
import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import {useNavigation} from '@react-navigation/native';

const Index = () => {
  const navigation = useNavigation();
  const productData = [
    {
      id: '01',
      productName:
        'Túi đeo chéo Nam nữ unisex chần bông gòn túi phao thời trang siêu nhẹ chống nước SAFARI Quilted Bag',
      price: '315.000',
      image1: require('../../src/public/product1.png'),
    },
    {
      id: '02',
      productName:
        'Áo khoác kaki nhẹ brand us n them chính hãng brand hàn quốc form boxy fit thoải mái gọn gàng trẻ trung lịch sự trending',
      price: '399.000',
      image1: require('../../src/public/product2.png'),
    },
    {
      id: '03',
      productName:
        'Dép lê nam quai ngang HM mặt da chữ H tách hai màu khâu viền đế gỗ 4 lớp khắc chữ full box cao cấp DL35P',
      price: '599.000',
      image1: require('../../src/public/product3.png'),
    },
    {
      id: '04',
      productName: 'Balo Adidas EQT/ORIGINALS CLASSIC EQT BACKPACK',
      price: '450.000',
      image1: require('../../src/public/product4.png'),
    },
    {
      id: '05',
      productName:
        'Dép Sandal Nam Chữ H B21 Quai Ngang Da Microfiber Cao Cấp, Sandal Hermes Nam May Âm Đế Cao 4,5 Phân Tăng Chiều Cao',
      price: '390.000',
      image1: require('../../src/public/product5.png'),
    },
    {
      id: '06',
      productName:
        '[ CHÍNH HÃNG ] Giày superstar mũi sò trắng DH8876 [ FULL BOX + FREE SHIP ]',
      price: '1.390.000',
      image1: require('../../src/public/product6.png'),
    },
  ];
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.push('product', {
          productName: item.productName,
          price: item.price,
          image1: item.image1,
        })
      }>
      <View style={styles.product_item}>
        <Image style={styles.product_image} source={item.image1} />
        <Text
          style={styles.product_name}
          numberOfLines={2}
          ellipsizeMode="tail">
          {item.productName}
        </Text>
        <Text style={styles.product_price}>đ {item.price}</Text>
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
      data={productData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      columnWrapperStyle={styles.product_row}
    />
  );
};

export default Index;
