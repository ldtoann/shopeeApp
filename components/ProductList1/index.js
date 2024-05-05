'use strict';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';

const Index = () => {
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
        'Áo khoác kaki jeans brand usatheme chính hãng brand hàn quốc form boxy fit thoải mái gọn gàng trẻ trung lịch sự trending',
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
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.product_list}>
      {productData.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            // onPress={() =>
            //   navigation.push('', {
            //     productName: data.productName,
            //     price: data.price,
            //     image1: data.image1,
            //   })
            // }
          >
            <View style={styles.product_item}>
              <View style={styles.product_item_top}>
                <Image
                  style={styles.product_item_top_img}
                  _image
                  source={data.image1}
                />
              </View>
              <View style={styles.product_item_bottom}>
                <Text style={styles.product_item_bottom_title}>
                  Shop bạn đã mua
                </Text>
                <View style={styles.product_item_bottom_bottom}>
                  <Text style={styles.product_item_bottom_price}>
                    đ {data.price}
                  </Text>
                  <View style={styles.product_item_bottom_icon_bg}>
                    <TouchableOpacity>
                      <Ionicons
                        style={styles.product_item_bottom_icon}
                        name="cart"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
      <TouchableOpacity style={styles.product_more}>
        <View style={styles.product_content}>
          <Icon style={styles.product_more_icon} name="chevron-right" solid />
          <Text style={styles.product_more_text}>Xem Thêm</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Index;
