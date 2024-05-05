import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  PermissionsAndroid,
} from 'react-native';
import Menu from '../../components/Menu/index';
import ProductList2 from '../../components/ProductList2/index';
import ProductList3 from '../../components/ProductList3/index';
import Carousel from '../../components/Carousel/index';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera} from 'react-native-image-picker';

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
  const navigateLogin = () => {
    navigation.navigate('user');
  };
  const navigateSearch = () => {
    navigation.navigate('search');
  };

  // const [imgSearch, setImgSearch] = useState('');

  // const requestCameraPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.CAMERA,
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('Camera permission given');
  //       const result = await launchCamera({
  //         mediaType: 'photo',
  //         cameraType: 'front',
  //       });
  //       setImgSearch(result.assets[0].uri);
  //     } else {
  //       console.log('Camera permission denied');
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Đọc thông tin người dùng từ AsyncStorage khi truy cập
    AsyncStorage.getItem('userInfo')
      .then(userInfo => {
        if (userInfo) {
          setUserInfo(JSON.parse(userInfo));
          setIsLoggedIn(true); // Đã đăng nhập
        }
      })
      .catch(error => console.error('Error retrieving user info:', error));
  }, []);

  const data = [{type: 'NoScroll'}, {type: 'Scroll'}];

  const renderItem = ({item, index}) => {
    if (item.type === 'NoScroll') {
      return <View></View>;
    } else if (item.type === 'Scroll') {
      return (
        <View>
          <Carousel />
          <View style={styles.recommend_menuList}>
            <View style={styles.recommend_menuList1}>
              <Ionicons
                style={styles.recommend_menuList1_icon}
                name="qr-code-sharp"
              />
              <View style={styles.linedoc}></View>
              <View style={styles.recommend_pay}>
                <View style={styles.recommend_pay_top}>
                  <Ionicons
                    style={styles.recommend_pay_top_icon}
                    name="wallet-outline"
                  />
                  <Text style={styles.recommend_pay_top_text}>
                    Ví ShopeePay
                  </Text>
                </View>
                <Text style={styles.recommend_pay_top_contentt}>
                  Vé xe khách giảm tới 50.000Đ
                </Text>
              </View>
              <View style={styles.linedoc}></View>
              <View style={styles.recommend_pay}>
                <View style={styles.recommend_pay_top}>
                  <Ionicons
                    style={styles.recommend_pay_top_icon}
                    name="logo-usd"
                  />
                  {isLoggedIn ? (
                    <Text style={styles.recommend_pay_top_text}>
                      {userInfo.asset}
                    </Text>
                  ) : (
                    <Text style={styles.recommend_pay_top_text}>999999</Text>
                  )}
                </View>
                <Text style={styles.recommend_pay_top_contentt}>
                  Nhấn để nhận xu mỗi ngày !
                </Text>
              </View>
            </View>
            <View style={styles.recommend_menuList2}>
              <View style={styles.recommend_menuList2_1}>
                <View style={styles.recommend_menuList2_List}>
                  <TouchableOpacity
                    style={styles.recommend_menuList2_List_item}>
                    <View style={styles.recommend_menuList2_List_item_top_icon}>
                      <View
                        style={styles.recommend_menuList2_List_item_bg_icon}>
                        <Ionicons
                          style={styles.recommend_menuList2_List_item_icon}
                          name="basket-sharp"
                        />
                      </View>
                    </View>
                    <Text style={styles.recommend_menuList2_List_item_text}>
                      Shopee
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.recommend_menuList2_List_item}>
                    <View style={styles.recommend_menuList2_List_item_top_icon}>
                      <View
                        style={styles.recommend_menuList2_List_item_bg_icon}>
                        <Ionicons
                          style={styles.recommend_menuList2_List_item_icon}
                          name="fast-food-sharp"
                        />
                      </View>
                    </View>
                    <Text style={styles.recommend_menuList2_List_item_text}>
                      ShopeeFood
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.recommend_menuList2_List_item}>
                    <View style={styles.recommend_menuList2_List_item_top_icon}>
                      <View
                        style={styles.recommend_menuList2_List_item_bg_icon}>
                        <Ionicons
                          style={styles.recommend_menuList2_List_item_icon}
                          name="flash-sharp"
                        />
                      </View>
                    </View>
                    <Text style={styles.recommend_menuList2_List_item_text}>
                      Săn sale
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.recommend_menuList2_List_item}>
                    <View style={styles.recommend_menuList2_List_item_top_icon}>
                      <View
                        style={styles.recommend_menuList2_List_item_bg_icon}>
                        <Ionicons
                          style={styles.recommend_menuList2_List_item_icon}
                          name="wallet-sharp"
                        />
                      </View>
                    </View>
                    <Text style={styles.recommend_menuList2_List_item_text}>
                      Trả góp
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.recommend_menuList2_List_item}>
                    <View style={styles.recommend_menuList2_List_item_top_icon}>
                      <View
                        style={styles.recommend_menuList2_List_item_bg_icon}>
                        <Ionicons
                          style={styles.recommend_menuList2_List_item_icon}
                          name="cart-sharp"
                        />
                      </View>
                    </View>
                    <Text style={styles.recommend_menuList2_List_item_text}>
                      Mart
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.recommend_menuList2_List}>
                  <TouchableOpacity
                    style={styles.recommend_menuList2_List_item}>
                    <View style={styles.recommend_menuList2_List_item_top_icon}>
                      <View
                        style={styles.recommend_menuList2_List_item_bg_icon}>
                        <Ionicons
                          style={styles.recommend_menuList2_List_item_icon}
                          name="videocam-sharp"
                        />
                      </View>
                    </View>
                    <Text style={styles.recommend_menuList2_List_item_text}>
                      Live
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.recommend_menuList2_List_item}>
                    <View style={styles.recommend_menuList2_List_item_top_icon}>
                      <View
                        style={styles.recommend_menuList2_List_item_bg_icon}>
                        <Ionicons
                          style={styles.recommend_menuList2_List_item_icon}
                          name="bag-handle-sharp"
                        />
                      </View>
                    </View>
                    <Text style={styles.recommend_menuList2_List_item_text}>
                      Mall
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.recommend_menuList2_List_item}>
                    <View style={styles.recommend_menuList2_List_item_top_icon}>
                      <View
                        style={styles.recommend_menuList2_List_item_bg_icon}>
                        <Ionicons
                          style={styles.recommend_menuList2_List_item_icon}
                          name="ticket-sharp"
                        />
                      </View>
                    </View>
                    <Text style={styles.recommend_menuList2_List_item_text}>
                      Mã giảm giá
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.recommend_menuList2_List_item}>
                    <View style={styles.recommend_menuList2_List_item_top_icon}>
                      <View
                        style={styles.recommend_menuList2_List_item_bg_icon}>
                        <Ionicons
                          style={styles.recommend_menuList2_List_item_icon}
                          name="flame-sharp"
                        />
                      </View>
                    </View>
                    <Text style={styles.recommend_menuList2_List_item_text}>
                      Bắt trend
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.recommend_menuList2_List_item}>
                    <View style={styles.recommend_menuList2_List_item_top_icon}>
                      <View
                        style={styles.recommend_menuList2_List_item_bg_icon}>
                        <Ionicons
                          style={styles.recommend_menuList2_List_item_icon}
                          name="diamond-sharp"
                        />
                      </View>
                    </View>
                    <Text style={styles.recommend_menuList2_List_item_text}>
                      Premium
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.recommend_menuList2_2}>
                <View style={styles.recommend_menuList2_2_item}>
                  <Image
                    style={styles.recommend_menuList2_2_item_image}
                    source={require('../../src/public/bnqc7.png')}
                  />
                  <TouchableOpacity style={styles.recommend_menuList2_button}>
                    <Text style={styles.recommend_menuList2_button_text}>
                      Sale
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.recommend_menuList2_2_item2}>
                  <Image
                    style={styles.recommend_menuList2_2_item_image}
                    source={require('../../src/public/bnqc6.png')}
                  />
                  <TouchableOpacity style={styles.recommend_menuList2_button}>
                    <Text style={styles.recommend_menuList2_button_text}>
                      Tại đây
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.recommend_menuList2_2_item}>
                  <Image
                    style={styles.recommend_menuList2_2_item_image}
                    source={require('../../src/public/bnqc4.png')}
                  />
                  <TouchableOpacity style={styles.recommend_menuList2_button}>
                    <Text style={styles.recommend_menuList2_button_text}>
                      Mua ngay
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.recommend_flashSale}>
            <TouchableOpacity style={styles.recommend_flashSale_top}>
              <View style={styles.recommend_flashSale_top_left}>
                <Text style={styles.recommend_flashSale_top_left_text}>
                  Flash Sale
                </Text>
                <Text style={styles.recommend_flashSale_top_left_time}>
                  01:30:00
                </Text>
              </View>
              <View style={styles.recommend_flashSale_top_right}>
                <Text style={styles.recommend_flashSale_top_right_text}>
                  Xem tất cả
                </Text>
                <Ionicons
                  style={styles.recommend_flashSale_top_right_icon}
                  name="chevron-forward-outline"
                />
              </View>
            </TouchableOpacity>
            <View style={styles.recommend_flashSale_bottom}>
              <ProductList3 />
            </View>
          </View>
          <View
            style={{
              paddingLeft: 10,
              paddingTop: 10,
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
            style={styles.recommend_header_search}
            placeholder="Tìm kiếm sản phẩm ..."
            placeholderTextColor="#EE4E2E"
          />
          <TouchableOpacity onPress={navigateSearch}>
            <Ionicons style={styles.icon_eye} name="camera" />
          </TouchableOpacity>
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
        goLogin={navigateLogin}
      />
    </SafeAreaView>
  );
};

export default Recommend;
// const requestCameraPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
//     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//       console.log("Camera permission given");
//       const result:any = await launchCamera({mediaType:'photo',cameraType:'front'})
//       setImg(result.assets[0].uri);
//     } else {
//       console.log("Camera permission denied");
//     }
//   } catch (err) {
//     console.warn(err);
//   }
// };
