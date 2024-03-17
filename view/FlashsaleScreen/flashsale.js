import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Menu from '../../components/Menu/index';
import ProductList2 from '../../components/ProductList2/index';
import ProductList3 from '../../components/ProductList3/index';
import ProductList_thuonghieu1 from '../../components/ProductList_thuonghieu1/index';
import ProductList_thuonghieu2 from '../../components/ProductList_thuonghieu2/index';
import Carousel from '../../components/Carousel/index';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Recommend = ({navigation}) => {
  const navigateRecommend = () => {
    navigation.navigate('recommend');
  };
  const navigateMall = () => {
    navigation.navigate('mall');
  };
  const navigateFlashsale = () => {
    navigation.navigate('flashsale');
  };
  const navigateInformation = () => {
    navigation.navigate('information');
  };
  const navigateUser = () => {
    navigation.navigate('user');
  };

  const data = [{type: 'NoScroll'}, {type: 'Scroll'}];

  const renderItem = ({item, index}) => {
    if (item.type === 'NoScroll') {
      return <View></View>;
    } else if (item.type === 'Scroll') {
      return (
        <View>
          <View style={styles.mall_uudai_hotro}>
            <View style={styles.mall_uudai_hotro_item}>
              <Ionicons
                style={styles.mall_uudai_hotro_item_icon}
                name="arrow-undo-sharp"
              />
              <Text style={styles.mall_uudai_hotro_item_text}>
                Miễn phí trả hàng
              </Text>
            </View>
            <View style={styles.mall_uudai_hotro_item}>
              <Ionicons
                style={styles.mall_uudai_hotro_item_icon}
                name="shield-checkmark-sharp"
              />
              <Text style={styles.mall_uudai_hotro_item_text}>
                Chính hãng 100%
              </Text>
            </View>
            <View style={styles.mall_uudai_hotro_item}>
              <Ionicons
                style={styles.mall_uudai_hotro_item_icon}
                name="cube-sharp"
              />
              <Text style={styles.mall_uudai_hotro_item_text}>
                Giao miễn phí
              </Text>
            </View>
          </View>
          <View style={[styles.titleProductList, {marginTop: 10}]}>
            <Text style={styles.titleProductList_text}>DANH MỤC</Text>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.mall_danhmuc}>
            <TouchableOpacity style={styles.mall_danhmuc_item}>
              <Image
                style={styles.mall_danhmuc_item_image}
                source={require('../../src/public/malldanhmuc1.png')}
              />
              <Text style={styles.mall_danhmuc_item_text}>Thời trang nam</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mall_danhmuc_item}>
              <Image
                style={styles.mall_danhmuc_item_image}
                source={require('../../src/public/malldanhmuc2.png')}
              />
              <Text style={styles.mall_danhmuc_item_text}>Thời trang nữ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mall_danhmuc_item}>
              <Image
                style={styles.mall_danhmuc_item_image}
                source={require('../../src/public/malldanhmuc3.png')}
              />
              <Text style={styles.mall_danhmuc_item_text}>Giày dép nam</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mall_danhmuc_item}>
              <Image
                style={styles.mall_danhmuc_item_image}
                source={require('../../src/public/malldanhmuc4.png')}
              />
              <Text style={styles.mall_danhmuc_item_text}>Giày dép nữ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mall_danhmuc_item}>
              <Image
                style={styles.mall_danhmuc_item_image}
                source={require('../../src/public/malldanhmuc5.png')}
              />
              <Text style={styles.mall_danhmuc_item_text}>Túi sách nam</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mall_danhmuc_item}>
              <Image
                style={styles.mall_danhmuc_item_image}
                source={require('../../src/public/malldanhmuc6.png')}
              />
              <Text style={styles.mall_danhmuc_item_text}>Túi sách nữ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mall_danhmuc_item}>
              <Image
                style={styles.mall_danhmuc_item_image}
                source={require('../../src/public/malldanhmuc7.png')}
              />
              <Text style={styles.mall_danhmuc_item_text}>Đồ gia dụng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mall_danhmuc_item}>
              <Image
                style={styles.mall_danhmuc_item_image}
                source={require('../../src/public/malldanhmuc8.png')}
              />
              <Text style={styles.mall_danhmuc_item_text}>
                Thiết bị điện tử
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mall_danhmuc_item}>
              <Image
                style={styles.mall_danhmuc_item_image}
                source={require('../../src/public/malldanhmuc9.png')}
              />
              <Text style={styles.mall_danhmuc_item_text}>Trang thiết bị</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mall_danhmuc_item}>
              <Image
                style={styles.mall_danhmuc_item_image}
                source={require('../../src/public/malldanhmuc10.png')}
              />
              <Text style={styles.mall_danhmuc_item_text}>Voucher</Text>
            </TouchableOpacity>
          </ScrollView>
          <View style={styles.titleProductList}>
            <Text style={styles.titleProductList_text}>
              FLASH SALE GỢI Ý HÔM NAY
            </Text>
          </View>
          <View
            style={{
              paddingLeft: 10,
              paddingTop: 5,
            }}>
            <ProductList2 />
          </View>
        </View>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.recommend_header}>
        <View style={styles.recommend_header_input}>
          <TextInput
            placeholder="Flash Sale"
            placeholderTextColor="#EE4E2E"
            style={styles.recommend_header_search}
          />
        </View>
        <View style={styles.recommend_header_nav}>
          <TouchableOpacity>
            <Ionicons
              style={styles.recommend_header_nav_icon}
              name="cart-outline"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={styles.recommend_header_nav_icon}
              name="chatbubbles-outline"
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Menu
        goRecommend={navigateRecommend}
        goMall={navigateMall}
        goFlashsale={navigateFlashsale}
        goInformation={navigateInformation}
        goUser={navigateUser}
      />
    </SafeAreaView>
  );
};

export default Recommend;
