import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import Menu from '../../components/Menu/index';
import CustomAlert from '../../components/Alert/index';
import styles from './style';
import ProductList2 from '../../components/ProductList2/index';
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
    navigation.navigate('flashsale');
  };
  const navigateInformation = () => {
    navigation.navigate('information');
  };
  const navigateLogin = () => {
    navigation.navigate('user');
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  const [showAlert, setShowAlert] = useState(false);
  const handleCopy = () => {
    setShowAlert(true);
  };
  const handleCloseAlert = () => {
    setShowAlert(false);
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
    {type: 'NoRepeat'},
    ...informationData.map(item => ({type: 'Repeat', ...item})),
  ];
  const renderItem = ({item, index}) => {
    if (item.type === 'NoRepeat') {
      return (
        <View>
          <View style={styles.tinhTrangDonHang}>
            <View style={styles.tinhTrangDonHang_left}>
              <Text style={styles.tinhTrangDonHang_left_title}>
                Đơn hàng đã hoàn thành
              </Text>
              <Text style={styles.tinhTrangDonHang_left_content}>
                Nếu đơn hàng nhận được có vấn đề, bạn có thể gửi yêu cầu trả
                hàng/hoàn tiền trước 17-03-2024
              </Text>
            </View>
            <View style={styles.tinhTrangDonHang_right}>
              <Ionicons
                style={styles.tinhTrangDonHang_right_icon}
                name="newspaper-outline"
              />
            </View>
          </View>
          <View style={styles.luuYKhiNhanHang}>
            <Ionicons
              style={styles.luuYKhiNhanHang_icon}
              name="shield-half-sharp"
            />
            <View style={styles.luuYKhiNhanHang_content}>
              <Text style={styles.luuYKhiNhanHang_content_title}>
                Những đều cần lưu ý khi nhận hàng
              </Text>
              <Text style={styles.luuYKhiNhanHang_content_text}>
                Nếu có vấn đề khi nhận đơn hàng, vui lòng gửi yêu cầu trả
                hàng/hoàn tiền trong vòng 3 ngày kể từ khi đơn hàng giao thành
                công.
              </Text>
            </View>
          </View>
          <View style={styles.thongTinVanChuyen}>
            <View style={styles.thongTinVanChuyen_1}>
              <View style={styles.thongTinVanChuyen_1_left}>
                <Icon
                  style={styles.thongTinVanChuyen_1_left_icon}
                  name="truck"
                  solid
                />
                <Text style={styles.thongTinVanChuyen_1_left_content}>
                  Thông tin vân chuyển
                </Text>
              </View>
              <View styles={styles.thongTinVanChuyen_1_right}>
                <TouchableOpacity>
                  <Text style={styles.thongTinVanChuyen_1_right_content}>
                    XEM
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.thongTinVanChuyen_2}>
              <Text style={styles.thongTinVanChuyen_2_title}>
                Hình thức vận chuyển : Nhanh
              </Text>
              <Text style={styles.thongTinVanChuyen_2_text}>
                SPX Express - SPXVN044796256383
              </Text>
              <Text style={styles.thongTinVanChuyen_2_text}>
                ĐƠN HÀNG ĐƯỢC ĐỒNG KIỂM.
              </Text>
            </View>
            <View style={styles.thongTinVanChuyen_3}>
              <View style={styles.thongTinVanChuyen_3_1}>
                <View style={styles.thongTinVanChuyen_3_1_left}>
                  <Ionicons
                    style={styles.thongTinVanChuyen_3_1_left_icon}
                    name="location-sharp"
                  />
                  <Text style={styles.thongTinVanChuyen_3_1_left_content}>
                    Địa chỉ nhận hàng
                  </Text>
                </View>
                <View style={styles.thongTinVanChuyen_3_1_right}>
                  <TouchableOpacity onPress={handleCopy}>
                    <Text style={styles.thongTinVanChuyen_3_1_right_content}>
                      SAO CHÉP
                    </Text>
                  </TouchableOpacity>
                  <CustomAlert
                    visible={showAlert}
                    message="Sao chép thành công"
                    onClose={handleCloseAlert}
                  />
                </View>
              </View>
              <View style={styles.thongTinVanChuyen_3_2}>
                <Text style={styles.thongTinVanChuyen_3_2_name}>
                  Le Duy Toan
                </Text>
                <Text style={styles.thongTinVanChuyen_3_2_phone}>
                  0899 084 716
                </Text>
                <Text style={styles.thongTinVanChuyen_3_2_location}>
                  7b Nguyễn Văn Trỗi, Phường Tây Lộc, Thành Phố Huế, Thừa Thiên
                  Huế.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.chiTietDonHang}>
            <TouchableOpacity style={styles.chiTietDonHang_infoShop}>
              <View style={styles.chiTietDonHang_infoShop_left}>
                <Ionicons
                  style={styles.chiTietDonHang_infoShop_left_icon}
                  name="storefront-sharp"
                />
                <Text style={styles.chiTietDonHang_infoShop_left_name}>
                  Name Shop
                </Text>
              </View>
              <View style={styles.chiTietDonHang_infoShop_right}>
                <Text style={styles.chiTietDonHang_infoShop_right_button}>
                  Xem Shop
                </Text>
                <Ionicons
                  style={styles.chiTietDonHang_infoShop_right_icon}
                  name="chevron-forward-outline"
                />
              </View>
            </TouchableOpacity>
            <View style={styles.linengang}></View>
            <View style={styles.chiTietDonHang_productList}>
              <TouchableOpacity style={styles.chiTietDonHang_productList_item}>
                <Image
                  style={styles.chiTietDonHang_productList_item_image}
                  source={require('../../src/public/product3.png')}
                />
                <View style={styles.chiTietDonHang_productList_item_content}>
                  <Text
                    style={styles.chiTietDonHang_productList_item_content_name}>
                    Dép lê nam quai ngang HM mặt da chữ H tách hai màu khâu viền
                    đế gỗ 4 lớp khắc chữ full box cao cấp DL35P
                  </Text>
                  <View
                    style={styles.chiTietDonHang_productList_item_content_size}>
                    <Text
                      style={
                        styles.chiTietDonHang_productList_item_content_size_info
                      }>
                      Đen, 43
                    </Text>
                    <Text
                      style={
                        styles.chiTietDonHang_productList_item_content_size_soluong
                      }>
                      x1
                    </Text>
                  </View>
                  <Text
                    style={
                      styles.chiTietDonHang_productList_item_content_price
                    }>
                    đ599.000
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.linengang}></View>
            <View style={styles.chiTietDonHang_total}>
              <View style={styles.chiTietDonHang_total_top}>
                <View style={styles.chiTietDonHang_total_top_left}>
                  <Text style={styles.chiTietDonHang_total_top_left_text}>
                    Thành tiền
                  </Text>
                </View>
                <View style={styles.chiTietDonHang_total_top_right}>
                  <Text style={styles.chiTietDonHang_total_top_right_price}>
                    đ599.000
                  </Text>
                  <Ionicons
                    style={styles.chiTietDonHang_total_top_right_icon}
                    name="chevron-down-outline"
                  />
                </View>
              </View>
              <View style={styles.chiTietDonHang_total_bottom}>
                <Text style={styles.chiTietDonHang_total_bottom_text}>
                  Vui lòng thanh toán đ599.000 khi nhận hàng.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.phuongThucTHanhToan}>
            <Ionicons
              style={styles.phuongThucTHanhToan_icon}
              name="shield-checkmark-outline"
            />
            <View style={styles.phuongThucTHanhToan_content}>
              <Text style={styles.phuongThucTHanhToan_content_title}>
                Phương thức thanh toán
              </Text>
              <Text style={styles.phuongThucTHanhToan_content_text}>
                Thanh toán khi nhận hàng
              </Text>
            </View>
          </View>
          <View style={styles.codeTimeDonHang}>
            <View style={styles.codeTimeDonHang_title}>
              <View style={styles.codeTimeDonHang_title_left}>
                <Text style={styles.codeTimeDonHang_title_left_text}>
                  Mã đơn hàng
                </Text>
              </View>
              <View style={styles.codeTimeDonHang_title_right}>
                <Text style={styles.codeTimeDonHang_title_right_code}>
                  2403046D9TVGRN
                </Text>
                <TouchableOpacity onPress={handleCopy}>
                  <Text style={styles.codeTimeDonHang_title_right_text}>
                    SAO CHÉP
                  </Text>
                </TouchableOpacity>
                <CustomAlert
                  visible={showAlert}
                  message="Sao chép thành công"
                  onClose={handleCloseAlert}
                />
              </View>
            </View>
            <View style={styles.codeTimeDonHang_content}>
              <Text style={styles.codeTimeDonHang_content_text}>
                Thời gian đặt hàng
              </Text>
              <Text style={styles.codeTimeDonHang_content_time}>
                03-03-2024
              </Text>
            </View>
            <View style={styles.codeTimeDonHang_content}>
              <Text style={styles.codeTimeDonHang_content_text}>
                Thời gian thanh toán
              </Text>
              <Text style={styles.codeTimeDonHang_content_time}>
                03-03-2024
              </Text>
            </View>
            <View style={styles.codeTimeDonHang_content}>
              <Text style={styles.codeTimeDonHang_content_text}>
                Thời gian giao hàng cho vận chuyển
              </Text>
              <Text style={styles.codeTimeDonHang_content_time}>
                04-03-2024
              </Text>
            </View>
            <View style={styles.codeTimeDonHang_content}>
              <Text style={styles.codeTimeDonHang_content_text}>
                Thời gian hoàn thành
              </Text>
              <Text style={styles.codeTimeDonHang_content_time}>
                06-03-2024
              </Text>
            </View>
          </View>
          <View style={styles.buttonDonHang}>
            <TouchableOpacity style={styles.buttonDonHang_btn}>
              <Ionicons
                style={styles.buttonDonHang_btn_icon}
                name="chatbubble-ellipses-outline"
              />
              <Text style={styles.buttonDonHang_btn_text}>Liện hệ shop</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonDonHang_btn}>
              <Ionicons
                style={styles.buttonDonHang_btn_icon}
                name="cart-outline"
              />
              <Text style={styles.buttonDonHang_btn_text}>Mua Lại</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productLike}>
            <Text style={styles.productLike_title}>Có thể bạn cũng thích</Text>
          </View>
          <View style={styles.productListLike}>
            <View style={{paddingLeft: 10}}>
              <ProductList2 />
            </View>
          </View>
        </View>
      );
    } else if (item.type === 'Repeat') {
      return <View></View>;
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Navbar}>
        <View style={styles.SearchMessengerPlus2}>
          <TouchableOpacity style={styles.BgIcon} onPress={handleGoBack}>
            <Text style={styles.StyleIcon}>
              <Ionicons style={styles.IconIcon} name="arrow-back-sharp" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.User_name}>
          <Text style={styles.name}>Thông tin đơn hàng</Text>
        </View>
        <View style={styles.SearchMessengerPlus}>
          <View style={styles.BgIcon}>
            <Text style={styles.StyleIcon}>
              <Ionicons style={styles.IconIcon} name="help-sharp" />
            </Text>
          </View>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.informartionLine_btn}>
        <TouchableOpacity style={styles.informartionLine_btn_btn}>
          <Text style={styles.informartionLine_btn_btn_text}>
            Yêu cầu trả hàng/Hoàn tiền
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.informartionLine_btn_btn}>
          <Text style={styles.informartionLine_btn_btn_text}>Đánh giá</Text>
        </TouchableOpacity>
      </View>
      {/* <Menu
        goRecommend={navigateRecommend}
        goMall={navigateMall}
        goVideo={navigateVideo}
        goLive={navigateLive}
        goInformation={navigateInformation}
        goLogin={navigateLogin}
      /> */}
    </SafeAreaView>
  );
};

export default ScreenInformation;
