import React, {useState} from 'react';
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
import ProductList1 from '../../components/ProductList1/index';
import ProductList2 from '../../components/ProductList2/index';
import ProductList3 from '../../components/ProductList3/index';
import ProductList_thuonghieu1 from '../../components/ProductList_thuonghieu1/index';
import ProductList_thuonghieu2 from '../../components/ProductList_thuonghieu2/index';
import Carousel from '../../components/Carousel/index';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Product = ({route, navigation}) => {
  const {productName, price, image1} = route.params;
  const [showFullContent, setShowFullContent] = useState(false);
  const handleToggleContent = () => {
    setShowFullContent(!showFullContent);
  };
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
  const handleGoBack = () => {
    navigation.goBack();
  };
  const data = [{type: 'NoScroll'}, {type: 'Scroll'}];

  const renderItem = ({item, index}) => {
    if (item.type === 'NoScroll') {
      return <View></View>;
    } else if (item.type === 'Scroll') {
      return (
        <View>
          <View style={styles.productItem_image}>
            <Image source={image1} style={styles.productItem_image_image} />
          </View>
          <View style={styles.productItem_price}>
            <Text style={styles.productItem_price_price}>đ{price}</Text>
            <Text style={styles.productItem_price_spaylater}>
              Giảm giá khi mua với voucher 🏷
            </Text>
            <Text style={styles.productItem_price_spaylater}>
              Trả góp lên đến 12 tháng với SpayLater 💳
            </Text>
            <Text style={styles.productItem_price_giff}>Mua để nhận quà</Text>
          </View>
          <View style={styles.productItem_name}>
            <Text style={styles.productItem_name_name}>{productName}</Text>
          </View>
          <View style={styles.productItem_vote}>
            <View style={styles.productItem_vote_left}>
              <Text style={styles.productItem_rate}>⭐ 5/5</Text>
              <Text>|</Text>
              <Text style={styles.luotban}>Đã bán 91.000</Text>
            </View>
            <View style={styles.productItem_vote_right}>
              <TouchableOpacity>
                <Ionicons
                  style={styles.productItem_vote_right_icon}
                  name="heart-outline"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  style={styles.productItem_vote_right_icon}
                  name="chatbubble-ellipses-outline"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inforShop}>
            <View style={styles.inforShop_left}>
              <Image source={image1} style={styles.inforShop_left_avaShop} />
              <View style={styles.inforShop_left_content}>
                <Text style={styles.inforShop_name}>Lavis.store</Text>
                <Text style={styles.inforShop_online}>
                  Online 33 phút trước
                </Text>
                <Text style={styles.inforShop_location}>TP.Hồ Chí Minh📍</Text>
              </View>
            </View>
            <View style={styles.inforShop_right}>
              <TouchableOpacity style={styles.inforShop_right_btn}>
                <Text style={styles.inforShop_right_content}>Xem Shop</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inforShopMore}>
            <View style={styles.inforShopMore_item}>
              <Text style={styles.inforShopMore_item_1}>315</Text>
              <Text style={styles.inforShopMore_item_2}>Sản phẩm</Text>
            </View>
            <View style={styles.inforShopMore_item}>
              <Text style={styles.inforShopMore_item_1}>5.5</Text>
              <Text style={styles.inforShopMore_item_2}>Đánh giá</Text>
            </View>
            <View style={styles.inforShopMore_item}>
              <Text style={styles.inforShopMore_item_1}>97%</Text>
              <Text style={styles.inforShopMore_item_2}>Phản hồi Chat</Text>
            </View>
          </View>
          <View style={styles.shopHot}>
            <TouchableOpacity style={styles.shopHot_btn}>
              <View style={styles.shopHot_btn_left}>
                <Text style={styles.shopHot_btn_left_text}>
                  🏪 Shop Nổi Bật
                </Text>
              </View>
              <View style={styles.shopHot_btn_right}>
                <Text style={styles.shopHot_btn_right_text}>
                  Sản phẩm tương tự ▶️
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.productshop_more}>
            <View style={styles.productshop_more_top}>
              <View style={styles.productshop_more_top_left}>
                <Text style={styles.productshop_more_top_left_content}>
                  Các sản phẩm khác của Shop
                </Text>
              </View>
              <View style={styles.productshop_more_top_right}>
                <TouchableOpacity style={styles.productshop_more_top_right_btn}>
                  <Text style={styles.productshop_more_top_right_content}>
                    Xem tất cả
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.linengang}></View>
            <View style={styles.productshop_more_bottom}>
              <ProductList1 />
            </View>
          </View>
          <View style={styles.productshop_more}>
            <View style={styles.productshop_more_top}>
              <View style={styles.productshop_more_top_left}>
                <Text style={styles.productshop_more_top_left_content}>
                  Chi tiết sản phẩm
                </Text>
              </View>
              <View style={styles.productshop_more_top_right}>
                <TouchableOpacity style={styles.productshop_more_top_right_btn}>
                  <Text style={styles.productshop_more_top_right_content}>
                    Thông tin
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.linengang}></View>
            <View style={styles.productshop_parameter}>
              <Text style={styles.productshop_parameter_content}>
                {showFullContent
                  ? `🔰 THÔNG TIN CHI TIẾT\n\nÁo khoác Work Jacket Form Boxy 5 Màu LEE Xuất Nhật Bản Chính Hãng\n\n+ Màu sắc: Đen - Nâu - Rêu - Be - Navy\n+ Xuất xứ: Việt Nam\n\n+ Size: S - M - L - Xl\nS Fit 45 - 65kg\nM Fit 60 - 70 kg\nL Fit 68 - 75kg\nXL Fit 74 - 90kg\n\nDài - ngang\nS: 64 - 56\nM: 65 - 58\nL: 67 - 61\nXl: 70 - 63\n\nĐây là bảng size tham khảo, tùy thuộc vào mỗi khách hàng mà có thể + hoặc - 1 size.\n\n+ Thông Số Size Shop Đưa Ra Chỉ Mang Tính Chất Tham Khảo Không Thể Chính Xác Tuyệt Đối Còn Tuỳ Vào Nhu Cầu Và Sở Thích Từng Người Xin Nhắn Tin Cho Shop Để Được Tư Vấn Cụ Thể Hơn Nhé\n\n+ Khách Có Bụng Bia Hoặc Đùi To Do Chơi Thể Thao Nhiều Nhớ Lấy Lên 1 Size Nhé\n\n+ Nhắn Tin Cho Shop Để Được Tư Vấn Size Tận Tình Và Cụ Thể Hơn\n\n👉 Đường may tinh tế, tỉ mỉ trong từng chi tiết\n\n👉 Chất lượng sản phẩm tốt, giá cả hợp lý\n\nSHOP CAM KẾT: Sản phẩm giống với hình ảnh đăng tải (Do màn hình và điều kiện ánh sáng khác nhau, màu sắc bên ngoài có thể sẽ chênh lệch 1 chút so với trên hình)\n\n➡️ Hỗ trợ khách hàng đổi size nếu mặc không vừa\n\n➡️ Đổi/trả hàng/giao lại miễn phí nếu: lỗi sản xuất, giao nhầm  mẫu, nhầm size, giao thiếu sản phẩm\n\n➡️ Thực hiện đúng các quy định trả hàng/hoàn tiền của Shopee Điều kiện đổi/trả hàng\n\n➡️ Trong vòng 7 ngày kể từ khi nhận hàng\n\n➡️ Quần chưa qua sử dụng, chưa giặt\n\n➡️ Tag và mác quần còn nguyên, chưa cắt\n\n➡️ Không hỗ trợ đổi/trả hàng nếu: không thích, không hợp, đặt nhầm mẫu, nhầm màu.\n\n#aokhoac #aodai #aojacket #aocrop #aoden #aoreu #aobe #aolee\n`
                  : `🔰 THÔNG TIN CHI TIẾT\n\nÁo khoác Work Jacket Form Boxy 5 Màu LEE Xuất Nhật Bản Chính Hãng\n\n+ Màu sắc: Đen - Nâu - Rêu - Be - Navy\n+ Xuất xứ: Việt Nam\n\n+ Size: S - M - L - Xl\nS Fit 45 - 65kg\nM Fit 60 - 70 kg\nL Fit 68 - 75kg\nXL Fit 74 - 90kg\n\nDài - ngang\nS: 64 - 56\nM: 65 - 58\nL: 67 - 61\nXl: 70 - 63\n`}
                {!showFullContent ? (
                  <TouchableOpacity
                    onPress={handleToggleContent}
                    style={styles.parameter_btn}>
                    <Text style={styles.parameter_btn_text}>Xem thêm</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={handleToggleContent}
                    style={styles.parameter_btn}>
                    <Text style={styles.parameter_btn_text}>Thu gọn</Text>
                  </TouchableOpacity>
                )}
              </Text>
            </View>
          </View>
          <View style={styles.productshop_reviews}></View>
          <View style={styles.titleProductList}>
            <Text style={styles.titleProductList_text}>GỢI Ý HÔM NAY</Text>
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
        <View style={styles.recommend_header_nav}>
          <TouchableOpacity onPress={handleGoBack}>
            <Ionicons
              style={styles.recommend_header_nav_icon}
              name="arrow-undo-outline"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.recommend_header_input}>
          <TextInput
            placeholder="Tên sản phẩm"
            placeholderTextColor="#EE4E2E"
            style={styles.recommend_header_search}
          />
        </View>
        <View style={styles.recommend_header_nav}>
          <TouchableOpacity>
            <Ionicons
              style={styles.recommend_header_nav_icon}
              name="arrow-redo-sharp"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={styles.recommend_header_nav_icon}
              name="cart-outline"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={styles.recommend_header_nav_icon}
              name="ellipsis-vertical-circle-sharp"
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

export default Product;
