import React from 'react';
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

const Recommend = ({navigation}) => {
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

  const data = [{type: 'NoRepeat'}, {type: 'Repeat'}];
  const renderItem = ({item, index}) => {
    if (item.type === 'NoRepeat') {
      return (
        <View>
          <View style={styles.user_top}>
            <View style={styles.user_top_bg}>
              <Image
                style={styles.user_top_bg_image}
                source={require('../../src/public/userBG.png')}
              />
            </View>
            <View style={styles.user_top_content}>
              <View style={styles.user_top_content_nav}>
                <TouchableOpacity>
                  <Ionicons style={styles.user_header_nav_icon} name="cog" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons style={styles.user_header_nav_icon} name="cart" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons
                    style={styles.user_header_nav_icon}
                    name="chatbubbles"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.user_top_content_info}>
                <View style={styles.user_top_content_info_ava}>
                  <Image
                    style={styles.user_top_ava}
                    source={require('../../src/public/userAVA.png')}
                  />
                </View>
                <View style={styles.user_top_content_info_info}>
                  <Text style={styles.user_top_content_info_info_name}>
                    ToanLee1311
                  </Text>
                  <TouchableOpacity>
                    <Text style={styles.user_top_content_info_info_rank}>
                      Thành viên kim cương
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.user_top_content_info_info_follower}>
                    <TouchableOpacity
                      style={styles.user_top_content_info_info_follower_member}>
                      <Text
                        style={
                          styles.user_top_content_info_info_follower_member_text
                        }>
                        Người theo
                      </Text>
                      <Text
                        style={
                          styles.user_top_content_info_info_follower_member_number
                        }>
                        99.999
                      </Text>
                    </TouchableOpacity>
                    <View style={styles.linedoc}></View>
                    <TouchableOpacity
                      style={styles.user_top_content_info_info_follower_member}>
                      <Text
                        style={
                          styles.user_top_content_info_info_follower_member_text
                        }>
                        Đang theo dõi
                      </Text>
                      <Text
                        style={
                          styles.user_top_content_info_info_follower_member_number
                        }>
                        10.000
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.user_main}>
            <View style={styles.user_main_livesieusale}>
              <Icon
                style={styles.user_main_livesieusale_icon}
                name="shopify"
                solid
              />
              <Text style={styles.user_main_livesieusale_text}>
                3.3 Shopee Live - Siêu Sale
              </Text>
            </View>
            <View style={styles.linengang}></View>
            <View style={styles.user_main_livesieusale_iconlist}>
              <TouchableOpacity
                style={styles.user_main_livesieusale_iconlist_item}>
                <View
                  style={styles.user_main_livesieusale_iconlist_item_iconBG}>
                  <Icon
                    style={styles.user_main_livesieusale_iconlist_item_icon}
                    name="shopify"
                    solid
                  />
                </View>
                <Text style={styles.user_main_livesieusale_iconlist_item_text1}>
                  Trang
                </Text>
                <Text style={styles.user_main_livesieusale_iconlist_item_text2}>
                  Chính
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.user_main_livesieusale_iconlist_item}>
                <View
                  style={styles.user_main_livesieusale_iconlist_item_iconBG}>
                  <Icon
                    style={styles.user_main_livesieusale_iconlist_item_icon}
                    name="bolt"
                    solid
                  />
                </View>
                <Text style={styles.user_main_livesieusale_iconlist_item_text1}>
                  Khung Giờ
                </Text>
                <Text style={styles.user_main_livesieusale_iconlist_item_text2}>
                  Săn Sale
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.user_main_livesieusale_iconlist_item}>
                <View
                  style={styles.user_main_livesieusale_iconlist_item_iconBG}>
                  <Icon
                    style={styles.user_main_livesieusale_iconlist_item_icon}
                    name="video"
                    solid
                  />
                </View>
                <Text style={styles.user_main_livesieusale_iconlist_item_text1}>
                  Shopee
                </Text>
                <Text style={styles.user_main_livesieusale_iconlist_item_text2}>
                  Live
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.user_main_livesieusale_iconlist_item}>
                <View
                  style={styles.user_main_livesieusale_iconlist_item_iconBG}>
                  <Icon
                    style={styles.user_main_livesieusale_iconlist_item_icon}
                    name="shopify"
                    solid
                  />
                </View>
                <Text style={styles.user_main_livesieusale_iconlist_item_text1}>
                  Sale
                </Text>
                <Text style={styles.user_main_livesieusale_iconlist_item_text2}>
                  Ưu Đãi
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.linengang}></View>
            <View style={styles.user_main_button}>
              <TouchableOpacity style={styles.user_main_napthedichvu_btn}>
                <View style={styles.user_main_napthedichvu_btn_left}>
                  <Icon
                    style={styles.user_main_napthedichvu_btn_left_icon}
                    name="mobile"
                    solid
                  />
                  <Text style={styles.user_main_napthedichvu_btn_left_text}>
                    Đơn Nạp Thẻ và Dịch Vụ
                  </Text>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
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
                    name="clipboard"
                    solid
                  />
                  <Text style={styles.user_main_napthedichvu_btn_left_text}>
                    Đơn Mua
                  </Text>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <Text style={styles.user_main_napthedichvu_btn_right_text}>
                    Xem lịch sử mua hàng
                  </Text>
                  <Icon
                    style={styles.user_main_napthedichvu_btn_right_icon}
                    name="chevron-right"
                    solid
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.linengang}></View>
            <View style={styles.user_main_livesieusale_iconlist}>
              <TouchableOpacity
                style={styles.user_main_livesieusale_iconlist_item}>
                <View style={styles.user_main_listdonmua_iconlist_item_iconBG}>
                  <Icon
                    style={styles.user_main_Listdonmua_iconlist_item_icon}
                    name="wallet"
                    solid
                  />
                </View>
                <Text style={styles.user_main_listdonmua_iconlist_item_text1}>
                  Chờ xác nhận
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.user_main_livesieusale_iconlist_item}>
                <View style={styles.user_main_listdonmua_iconlist_item_iconBG}>
                  <Icon
                    style={styles.user_main_Listdonmua_iconlist_item_icon}
                    name="box-open"
                    solid
                  />
                </View>
                <Text style={styles.user_main_listdonmua_iconlist_item_text1}>
                  Chờ lấy hàng
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.user_main_livesieusale_iconlist_item}>
                <View style={styles.user_main_listdonmua_iconlist_item_iconBG}>
                  <Icon
                    style={styles.user_main_Listdonmua_iconlist_item_icon}
                    name="truck"
                    solid
                  />
                </View>
                <Text style={styles.user_main_listdonmua_iconlist_item_text1}>
                  Chờ giao hàng
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.user_main_livesieusale_iconlist_item}>
                <View style={styles.user_main_listdonmua_iconlist_item_iconBG}>
                  <Icon
                    style={styles.user_main_Listdonmua_iconlist_item_icon}
                    name="star"
                    solid
                  />
                </View>
                <Text style={styles.user_main_listdonmua_iconlist_item_text1}>
                  đánh giá
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.linengang}></View>
            <View style={styles.user_main_button}>
              <TouchableOpacity style={styles.user_main_napthedichvu_btn}>
                <View style={styles.user_main_napthedichvu_btn_left}>
                  <Icon
                    style={styles.user_main_food_btn_left_icon}
                    name="utensils"
                    solid
                  />
                  <Text style={styles.user_main_napthedichvu_btn_left_text}>
                    Đơn ShopeeFood
                  </Text>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <Text
                    style={styles.user_main_napthedichvu_btn_right_text}></Text>
                  <Icon
                    style={styles.user_main_napthedichvu_btn_right_icon}
                    name="chevron-right"
                    solid
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.user_main}>
            <View style={styles.user_main_button}>
              <TouchableOpacity style={styles.user_main_napthedichvu_btn}>
                <View style={styles.user_main_napthedichvu_btn_left}>
                  <Icon
                    style={styles.user_main_food_btn_left_icon}
                    name="wallet"
                    solid
                  />
                  <Text style={styles.user_main_napthedichvu_btn_left_text}>
                    Tiện ích của tôi
                  </Text>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <Text
                    style={styles.user_main_napthedichvu_btn_right_text}></Text>
                  <Icon
                    style={styles.user_main_napthedichvu_btn_right_icon}
                    name="chevron-right"
                    solid
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.linengang}></View>
            <View style={styles.user_main_tienich_iconlist}>
              <TouchableOpacity style={styles.user_main_tienich_iconlist_item}>
                <View style={styles.user_main_listdonmua_iconlist_item_iconBG}>
                  <Icon
                    style={styles.user_main_tienich_iconlist_item_icon}
                    name="wallet"
                    solid
                  />
                </View>
                <Text style={styles.user_main_tienich_iconlist_item_text1}>
                  Ví ShopeePay
                </Text>
                <Text style={styles.user_main_livesieusale_iconlist_item_text2}>
                  Giảm đến 40.000Đ
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.user_main_tienich_iconlist_item}>
                <View style={styles.user_main_listdonmua_iconlist_item_iconBG}>
                  <Icon
                    style={styles.user_main_tienich_iconlist_item_icon}
                    name="coins"
                    solid
                  />
                </View>
                <Text style={styles.user_main_tienich_iconlist_item_text1}>
                  Shopee Xu
                </Text>
                <Text style={styles.user_main_livesieusale_iconlist_item_text2}>
                  Nhấn để nhận xu mỗi ngày !
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.user_main_tienich_iconlist_item}>
                <View style={styles.user_main_listdonmua_iconlist_item_iconBG}>
                  <Icon
                    style={styles.user_main_tienich_iconlist_item_icon}
                    name="money-bill-wave"
                    solid
                  />
                </View>
                <Text style={styles.user_main_tienich_iconlist_item_text1}>
                  SPayLater
                </Text>
                <Text style={styles.user_main_livesieusale_iconlist_item_text2}>
                  đ 3.500.000
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.user_main_tienich_iconlist_item}>
                <View style={styles.user_main_listdonmua_iconlist_item_iconBG}>
                  <Icon
                    style={styles.user_main_tienich_iconlist_item_icon}
                    name="ticket-alt"
                    solid
                  />
                </View>
                <Text style={styles.user_main_tienich_iconlist_item_text1}>
                  Kho Voucher
                </Text>
                <Text style={styles.user_main_livesieusale_iconlist_item_text2}>
                  50+ Voucher
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.linengang}></View>
            <View style={styles.user_main_button}>
              <TouchableOpacity style={styles.user_main_napthedichvu_btn}>
                <View style={styles.user_main_napthedichvu_btn_left}>
                  <Icon
                    style={styles.user_main_food_btn_left_icon}
                    name="check"
                    solid
                  />
                  <Text style={styles.user_main_napthedichvu_btn_left_text}>
                    Bảo hiểm của tôi
                  </Text>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <Text
                    style={styles.user_main_napthedichvu_btn_right_text}></Text>
                  <Icon
                    style={styles.user_main_napthedichvu_btn_right_icon}
                    name="chevron-right"
                    solid
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.user_main}>
            <View style={styles.user_main_button}>
              <TouchableOpacity style={styles.user_main_napthedichvu_btn}>
                <View style={styles.user_main_napthedichvu_btn_left}>
                  <Icon
                    style={styles.user_main_naplai_btn_left_icon}
                    name="shopping-bag"
                    solid
                  />
                  <Text style={styles.user_main_napthedichvu_btn_left_text}>
                    Mua lại
                  </Text>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <Text style={styles.user_main_napthedichvu_btn_right_text}>
                    Xem thêm sản phẩm
                  </Text>
                  <Icon
                    style={styles.user_main_napthedichvu_btn_right_icon}
                    name="chevron-right"
                    solid
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.linengang}></View>
            <View style={{paddingLeft: 10}}>
              <ProductList1 />
            </View>
          </View>
          <View style={styles.user_main}>
            <View style={styles.user_main_button_sale}>
              <TouchableOpacity style={styles.user_main_napthedichvu_btn}>
                <View style={styles.user_main_napthedichvu_btn_left}>
                  <Icon
                    style={styles.user_main_sale_btn_left_icon}
                    name="store"
                    solid
                  />
                  <Text style={styles.user_main_sale_btn_left_text}>
                    Bắt đầu bán
                  </Text>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <Text style={styles.user_main_napthedichvu_btn_right_text}>
                    Đăng kí miễn phí
                  </Text>
                  <Icon
                    style={styles.user_main_napthedichvu_btn_right_icon}
                    name="chevron-right"
                    solid
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.user_main}>
            <View style={styles.user_main_button}>
              <TouchableOpacity style={styles.user_main_napthedichvu_btn}>
                <View style={styles.user_main_napthedichvu_btn_left}>
                  <Icon
                    style={styles.user_main_food_btn_left_icon}
                    name="award"
                    solid
                  />
                  <Text style={styles.user_main_napthedichvu_btn_left_text}>
                    Khách hàng thân thiết
                  </Text>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <Text
                    style={styles.user_main_napthedichvu_btn_right_text}></Text>
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
                    name="heart"
                    solid
                  />
                  <Text style={styles.user_main_napthedichvu_btn_left_text}>
                    Đã thích
                  </Text>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <Text
                    style={styles.user_main_napthedichvu_btn_right_text}></Text>
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
                    style={styles.user_main_naplai_btn_left_icon}
                    name="store"
                    solid
                  />
                  <Text style={styles.user_main_napthedichvu_btn_left_text}>
                    Shop đang theo dõi
                  </Text>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <Text
                    style={styles.user_main_napthedichvu_btn_right_text}></Text>
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
                  <Text style={styles.user_main_napthedichvu_btn_left_text}>
                    Săn thưởng Shopee
                  </Text>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <Text style={styles.user_main_napthedichvu_btn_right_text}>
                    Lấy ngay 1.000 Xu
                  </Text>
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
                    name="clock"
                    solid
                  />
                  <Text style={styles.user_main_napthedichvu_btn_left_text}>
                    Đã xem gần đây
                  </Text>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <Text
                    style={styles.user_main_napthedichvu_btn_right_text}></Text>
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
                    name="money-bill-wave-alt"
                    solid
                  />
                  <Text style={styles.user_main_napthedichvu_btn_left_text}>
                    Số dư tài khoản Shopee
                  </Text>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <Text
                    style={styles.user_main_napthedichvu_btn_right_text}></Text>
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
                    style={styles.user_main_naplai_btn_left_icon}
                    name="coins"
                    solid
                  />
                  <Text style={styles.user_main_napthedichvu_btn_left_text}>
                    Shopee Xu
                  </Text>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <Text style={styles.user_main_napthedichvu_btn_right_text}>
                    Nhấn để nhận xu mỗi ngày !
                  </Text>
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
                    name="star"
                    solid
                  />
                  <Text style={styles.user_main_napthedichvu_btn_left_text}>
                    Đánh giá của tôi
                  </Text>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <Text
                    style={styles.user_main_napthedichvu_btn_right_text}></Text>
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
                  <Text style={styles.user_main_napthedichvu_btn_left_text}>
                    Shopee tiếp thị liên kết
                  </Text>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <Text
                    style={styles.user_main_napthedichvu_btn_right_text}></Text>
                  <Icon
                    style={styles.user_main_napthedichvu_btn_right_icon}
                    name="chevron-right"
                    solid
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.user_main}>
            <View style={styles.user_main_button}>
              <TouchableOpacity style={styles.user_main_napthedichvu_btn}>
                <View style={styles.user_main_napthedichvu_btn_left}>
                  <Icon
                    style={styles.user_main_donmua_btn_left_icon}
                    name="user"
                    solid
                  />
                  <Text style={styles.user_main_napthedichvu_btn_left_text}>
                    Thiết lập tài khoản
                  </Text>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <Text
                    style={styles.user_main_napthedichvu_btn_right_text}></Text>
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
                    name="question-circle"
                    solid
                  />
                  <Text style={styles.user_main_napthedichvu_btn_left_text}>
                    Trung tâm trợ giúp
                  </Text>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <Text
                    style={styles.user_main_napthedichvu_btn_right_text}></Text>
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
                    name="headset"
                    solid
                  />
                  <Text style={styles.user_main_napthedichvu_btn_left_text}>
                    Trò chuyện với Shopee
                  </Text>
                </View>
                <View style={styles.user_main_napthedichvu_btn_right}>
                  <Text
                    style={styles.user_main_napthedichvu_btn_right_text}></Text>
                  <Icon
                    style={styles.user_main_napthedichvu_btn_right_icon}
                    name="chevron-right"
                    solid
                  />
                </View>
              </TouchableOpacity>
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

export default Recommend;
