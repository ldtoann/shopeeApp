import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linengang: {
    height: 0.5,
    marginHorizontal: 10,
    backgroundColor: 'gray',
  },
  Navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 5,
    position: 'relative',
    height: 56.9,
  },
  User_name: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: 'black',
    fontSize: 22,
    fontWeight: '600',
    margin: 5,
  },
  arrowdow: {
    color: 'white',
    fontSize: 17,
  },
  SearchMessengerPlus: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
  },
  SearchMessengerPlus2: {
    flexDirection: 'row',
    position: 'absolute',
    left: 10,
  },
  BgIcon: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  StyleIcon: {},
  IconIcon: {
    color: '#EF4C29',
    fontSize: 27,
  },
  information_title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  information_title_left: {
    fontWeight: '700',
  },
  information_title_right: {},

  information_list: {
    backgroundColor: 'white',
  },
  information_item: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  information_item_left: {},
  information_item_left_image: {
    width: 60,
    height: 60,
  },
  information_item_right: {
    width: 315,
  },
  information_item_right_title: {
    fontWeight: '600',
    fontSize: 16,
    color: 'black',
  },
  information_item_right_content: {
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 5,
  },
  information_item_right_date: {
    fontSize: 11,
  },
  informartionLine_btn: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  informartionLine_btn_btn: {
    borderWidth: 1,
    borderColor: '#EF4C29',
    width: '48.5%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  informartionLine_btn_btn_text: {
    fontSize: 14,
    alignItems: 'center',
    fontWeight: '800',
    color: '#EF4C29',
  },
  tinhTrangDonHang: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#26AA99',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  tinhTrangDonHang_left: {
    maxWidth: '80%',
    gap: 5,
  },
  tinhTrangDonHang_left_title: {
    fontSize: 17,
    color: 'white',
    fontWeight: '800',
  },
  tinhTrangDonHang_left_content: {
    maxWidth: '100%',
    fontSize: 15,
    color: 'white',
  },
  tinhTrangDonHang_right: {},
  tinhTrangDonHang_right_icon: {
    fontSize: 50,
    color: 'white',
  },
  luuYKhiNhanHang: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 10,
  },
  luuYKhiNhanHang_icon: {
    fontSize: 20,
    color: '#EF4C29',
  },
  luuYKhiNhanHang_content: {
    gap: 3,
    width: '92%',
  },
  luuYKhiNhanHang_content_title: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
  },
  luuYKhiNhanHang_content_text: {
    fontSize: 15,
  },
  thongTinVanChuyen: {
    marginTop: 10,
    gap: 5,
    backgroundColor: 'white',
  },
  thongTinVanChuyen_1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 7,
  },
  thongTinVanChuyen_1_left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  thongTinVanChuyen_1_left_icon: {
    fontSize: 17,
    color: 'gray',
  },
  thongTinVanChuyen_1_left_content: {
    fontSize: 17,
    color: 'black',
    fontWeight: '600',
  },
  thongTinVanChuyen_1_right: {},
  thongTinVanChuyen_1_right_content: {
    fontSize: 17,
    fontWeight: '500',
    color: '#26AA99',
    marginRight: 10,
  },
  thongTinVanChuyen_2: {
    paddingLeft: 40,
  },
  thongTinVanChuyen_2_title: {
    fontSize: 15,
  },
  thongTinVanChuyen_2_text: {
    fontSize: 15,
  },
  thongTinVanChuyen_3: {
    borderTopWidth: 0.3,
    borderColor: 'gray',
    marginTop: 10,
  },
  thongTinVanChuyen_3_1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 7,
  },
  thongTinVanChuyen_3_1_left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  thongTinVanChuyen_3_1_left_icon: {
    fontSize: 17,
    color: 'gray',
  },
  thongTinVanChuyen_3_1_left_content: {
    fontSize: 17,
    color: 'black',
    fontWeight: '600',
  },
  thongTinVanChuyen_3_1_right: {},
  thongTinVanChuyen_3_1_right_content: {
    fontSize: 17,
    fontWeight: '500',
    color: '#26AA99',
    marginRight: 10,
  },
  thongTinVanChuyen_3_2: {
    paddingLeft: 40,
    width: '95%',
    paddingBottom: 20,
  },
  thongTinVanChuyen_3_2_name: {
    fontSize: 15,
  },
  thongTinVanChuyen_3_2_phone: {
    fontSize: 15,
  },
  thongTinVanChuyen_3_2_location: {
    fontSize: 15,
  },
  chiTietDonHang: {
    marginTop: 10,
    backgroundColor: 'white',
  },
  chiTietDonHang_infoShop: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chiTietDonHang_infoShop_left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  chiTietDonHang_infoShop_left_icon: {
    fontSize: 25,
  },
  chiTietDonHang_infoShop_left_name: {
    fontSize: 17,
    color: 'black',
    fontWeight: '600',
  },
  chiTietDonHang_infoShop_right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  chiTietDonHang_infoShop_right_button: {
    fontSize: 14,
  },
  chiTietDonHang_infoShop_right_icon: {
    fontSize: 25,
  },
  chiTietDonHang_productList: {},
  chiTietDonHang_productList_item: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  chiTietDonHang_productList_item_image: {
    width: 100,
    height: 100,
  },
  chiTietDonHang_productList_item_content: {
    width: '70%',
    gap: 5,
  },
  chiTietDonHang_productList_item_content_name: {
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
  },
  chiTietDonHang_productList_item_content_size: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chiTietDonHang_productList_item_content_size_info: {},
  chiTietDonHang_productList_item_content_size_soluong: {},
  chiTietDonHang_productList_item_content_price: {
    textAlign: 'right',
    fontSize: 15,
    color: '#EF4C29',
    fontWeight: '500',
  },
  chiTietDonHang_total: {
    paddingVertical: 13,
    gap: 5,
  },
  chiTietDonHang_total_top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    // gap: 5,
  },
  chiTietDonHang_total_top_left: {},
  chiTietDonHang_total_top_left_text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  chiTietDonHang_total_top_right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  chiTietDonHang_total_top_right_price: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
  },
  chiTietDonHang_total_top_right_icon: {
    fontSize: 20,
  },
  chiTietDonHang_total_bottom: {
    paddingLeft: 10,
  },
  chiTietDonHang_total_bottom_text: {
    fontSize: 15,
  },
  phuongThucTHanhToan: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 15,
    backgroundColor: 'white',
    marginTop: 10,
    gap: 10,
  },
  phuongThucTHanhToan_icon: {
    fontSize: 30,
    color: '#EF4C29',
  },
  phuongThucTHanhToan_content: {
    gap: 5,
  },
  phuongThucTHanhToan_content_title: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
  },
  phuongThucTHanhToan_content_text: {
    fontSize: 15,
  },
  codeTimeDonHang: {
    padding: 12,
    backgroundColor: 'white',
    marginTop: 10,
    gap: 5,
  },
  codeTimeDonHang_title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  codeTimeDonHang_title_left: {},
  codeTimeDonHang_title_left_text: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  codeTimeDonHang_title_right: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  codeTimeDonHang_title_right_code: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
  },
  codeTimeDonHang_title_right_text: {
    fontSize: 15,
    color: '#26AA99',
    fontWeight: '500',
  },
  codeTimeDonHang_content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  codeTimeDonHang_content_text: {},
  codeTimeDonHang_content_time: {},
  buttonDonHang: {
    padding: 12,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 0.3,
    borderColor: 'gray',
  },
  buttonDonHang_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '48.5%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
  },
  buttonDonHang_btn_icon: {
    fontSize: 20,
    color: '#EF4C29',
  },
  buttonDonHang_btn_text: {
    fontSize: 17,
  },
  productLike: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productLike_title: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
});
export default styles;
