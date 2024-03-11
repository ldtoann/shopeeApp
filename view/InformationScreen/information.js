import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import Menu from '../../components/Menu/index';
import styles from './style';
import ProductList1 from '../../components/ProductList1/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ScreenInformation = ({navigation}) => {
  const navigateRecommend = () => {
    navigation.navigate('recommend');
  };
  const navigateMall = () => {
    navigation.navigate('mall');
  };
  const navigateVideo = () => {
    navigation.navigate('video');
  };
  const navigateLive = () => {
    navigation.navigate('live');
  };
  const navigateInformation = () => {
    navigation.navigate('information');
  };
  const navigateUser = () => {
    navigation.navigate('user');
  };
  const handleGokhuyenmai = () => {
    navigation.navigate('khuyenmai');
  };
  const handleGoInformartionLine = () => {
    navigation.navigate('informationline');
  };
  const informationData = [
    {
      id: '01',
      title: 'Đang vân chuyển',
      image: require('../../src/public/product1.png'),
      content:
        'đơn hàng 240227MBHD910R với mã vận đơn VN248695715969AD đã được người bán giao cho đơn vị vận chuyển qua phương thức vận chuyển Standrad Express.',
    },
    {
      id: '02',
      title: 'Giao kiện hàng thành công',
      image: require('../../src/public/product2.png'),
      content:
        'Kiện hàng VN 24791142175E5 của đơn hàng 240025RTYU789642 đã được giao thành công đến bạn.',
    },
    {
      id: '03',
      title: 'Bạn đang có đơn hàng đang trên dường giao đến bạn',
      image: require('../../src/public/product2.png'),
      content:
        'Shipper bảo rằng: đơn hàng 240025RTYU789642 của bạn vẫn đang trong quá trình vận chuyển và dự kiến được giao trong 1-2 ngày tới. Vui lòng bỏ qua thông báo này nếu bạn đã nhận được hàng nhé!',
    },
    {
      id: '04',
      title: 'Chấp nhận yêu cầu hủy đơn',
      image: require('../../src/public/product3.png'),
      content:
        'Yêu cầu hủy đơn hàng của bạn đã được chấp nhận. Đơn hàng 2402218JKFG75P đã được hủy thành công.',
    },
  ];
  const data = [
    {type: 'NoRepeat'}, // Non-scrollable item
    ...informationData.map(item => ({type: 'Repeat', ...item})), // Scrollable items
  ];
  const renderItem = ({item, index}) => {
    if (item.type === 'NoRepeat') {
      return (
        <View>
          <View style={styles.user_main}>
            <View style={styles.user_main_button}>
              <TouchableOpacity
                style={styles.user_main_napthedichvu_btn}
                onPress={handleGokhuyenmai}>
                <View style={styles.user_main_napthedichvu_btn_left}>
                  <Icon
                    style={styles.user_main_food_btn_left_icon}
                    name="tags"
                    solid
                  />
                  <View
                    style={styles.user_main_napthedichvu_btn_left_content_text}>
                    <Text style={styles.user_main_napthedichvu_btn_left_text}>
                      Khuyến mãi
                    </Text>
                    <Text style={styles.user_main_napthedichvu_btn_left_text01}>
                      Khuyến mãi lên đến 50%
                    </Text>
                  </View>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <View style={styles.user_main_napthedichvu_btn_right_bgbg}>
                    <Text style={styles.user_main_napthedichvu_btn_right_text}>
                      16
                    </Text>
                  </View>
                  <Icon
                    style={styles.user_main_napthedichvu_btn_right_icon}
                    name="chevron-right"
                    solid
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.linengang}></View>
            <View style={styles.user_main_button}>
              <TouchableOpacity style={styles.user_main_napthedichvu_btn}>
                <View style={styles.user_main_napthedichvu_btn_left}>
                  <Icon
                    style={styles.user_main_napthedichvu_btn_left_icon}
                    name="file-video"
                    solid
                  />
                  <View
                    style={styles.user_main_napthedichvu_btn_left_content_text}>
                    <Text style={styles.user_main_napthedichvu_btn_left_text}>
                      Live & Video
                    </Text>
                    <Text style={styles.user_main_napthedichvu_btn_left_text01}>
                      Săn sale giá hời tại live
                    </Text>
                  </View>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <View style={styles.user_main_napthedichvu_btn_right_bgbg}>
                    <Text style={styles.user_main_napthedichvu_btn_right_text}>
                      5
                    </Text>
                  </View>
                  <Icon
                    style={styles.user_main_napthedichvu_btn_right_icon}
                    name="chevron-right"
                    solid
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.linengang}></View>
            <View style={styles.user_main_button}>
              <TouchableOpacity style={styles.user_main_napthedichvu_btn}>
                <View style={styles.user_main_napthedichvu_btn_left}>
                  <Icon
                    style={styles.user_main_food_btn_left_icon}
                    name="wallet"
                    solid
                  />
                  <View
                    style={styles.user_main_napthedichvu_btn_left_content_text}>
                    <Text style={styles.user_main_napthedichvu_btn_left_text}>
                      Thông tin tài chính
                    </Text>
                    <Text style={styles.user_main_napthedichvu_btn_left_text01}>
                      Hóa đơn SPayLater của bạn đã đến kỳ thanh toán.
                    </Text>
                  </View>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  {/* <View style={styles.user_main_napthedichvu_btn_right_bgbg}>
                    <Text
                      style={
                        styles.user_main_napthedichvu_btn_right_text
                      }></Text>
                  </View> */}
                  <Icon
                    style={styles.user_main_napthedichvu_btn_right_icon}
                    name="chevron-right"
                    solid
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.linengang}></View>
            <View style={styles.user_main_button}>
              <TouchableOpacity style={styles.user_main_napthedichvu_btn}>
                <View style={styles.user_main_napthedichvu_btn_left}>
                  <Icon
                    style={styles.user_main_food_btn_left_icon}
                    name="shopping-bag"
                    solid
                  />
                  <View
                    style={styles.user_main_napthedichvu_btn_left_content_text}>
                    <Text style={styles.user_main_napthedichvu_btn_left_text}>
                      Cập nhập Shopee
                    </Text>
                    <Text style={styles.user_main_napthedichvu_btn_left_text01}>
                      Tài khoản của bạn vừa được phát hiện đăng nhập.
                    </Text>
                  </View>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  {/* <View style={styles.user_main_napthedichvu_btn_right_bgbg}>
                    <Text
                      style={
                        styles.user_main_napthedichvu_btn_right_text
                      }></Text>
                  </View> */}
                  <Icon
                    style={styles.user_main_napthedichvu_btn_right_icon}
                    name="chevron-right"
                    solid
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.linengang}></View>
            <View style={styles.user_main_button}>
              <TouchableOpacity style={styles.user_main_napthedichvu_btn}>
                <View style={styles.user_main_napthedichvu_btn_left}>
                  <Icon
                    style={styles.user_main_donmua_btn_left_icon}
                    name="gift"
                    solid
                  />
                  <View
                    style={styles.user_main_napthedichvu_btn_left_content_text}>
                    <Text style={styles.user_main_napthedichvu_btn_left_text}>
                      Giải thưởng Shopee
                    </Text>
                    <Text style={styles.user_main_napthedichvu_btn_left_text01}>
                      Chỉ 1 click, có ngay voucher 100.000đ. Cơ hội đ...
                    </Text>
                  </View>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  {/* <View style={styles.user_main_napthedichvu_btn_right_bgbg}>
                    <Text
                      style={
                        styles.user_main_napthedichvu_btn_right_text
                      }></Text>
                  </View> */}
                  <Icon
                    style={styles.user_main_napthedichvu_btn_right_icon}
                    name="chevron-right"
                    solid
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.information_title}>
            <Text style={styles.information_title_left}>Cập nhập đơn hàng</Text>
            <TouchableOpacity>
              <Text style={styles.information_title_right}>Đọc tất cả</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (item.type === 'Repeat') {
      return (
        <View style={styles.information_list}>
          <TouchableOpacity
            style={styles.information_item}
            onPress={handleGoInformartionLine}>
            <View style={styles.information_item_left}>
              <Image
                style={styles.information_item_left_image}
                source={item.image}
              />
            </View>
            <View style={styles.information_item_right}>
              <Text style={styles.information_item_right_title}>
                {item.title}
              </Text>
              <Text style={styles.information_item_right_content}>
                {item.content}
              </Text>
              <Text style={styles.information_item_right_date}>
                07:03 22-02-2024
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.linengang}></View>
        </View>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Navbar}>
        <View style={styles.User_name}>
          <Text style={styles.name}>Thông báo</Text>
        </View>
        <View style={styles.SearchMessengerPlus}>
          <View style={styles.BgIcon}>
            <Text style={styles.StyleIcon}>
              <Ionicons style={styles.IconIcon} name="cart" />
            </Text>
          </View>
          <View style={styles.BgIcon}>
            <Text style={styles.StyleIcon}>
              <Ionicons style={styles.IconIcon} name="chatbubbles" />
            </Text>
          </View>
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
        goVideo={navigateVideo}
        goLive={navigateLive}
        goInformation={navigateInformation}
        goUser={navigateUser}
      />
    </SafeAreaView>
  );
};

export default ScreenInformation;
