import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  horizontalLine: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#242526',
  },
  linengang: {
    height: 0.3,
    marginHorizontal: 10,
    backgroundColor: 'gray',
  },
  linedoc: {
    height: '10%',
    width: 10,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
  },
  Line: {
    height: 0.3,
    backgroundColor: 'white',
  },

  recommend_header: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 10,
  },
  recommend_header_input: {},
  recommend_header_search: {
    width: 240,
    height: 37,
    fontSize: 13,
    fontWeight: '700',
    paddingHorizontal: 10,
    borderRadius: 3,
    backgroundColor: '#D2D2D2',
  },
  recommend_header_nav: {
    flexDirection: 'row',
    gap: 10,
    paddingRight: 5,
  },
  recommend_header_nav_icon: {
    fontSize: 25,
    color: '#EE4E2E',
  },
  titleProductList: {
    backgroundColor: 'white',
    padding: 12,
    marginTop: 10,
  },
  titleProductList_text: {
    fontSize: 18,
    color: '#EE4E2E',
    fontWeight: '700',
  },
  productItem_image: {
    width: '100%',
    height: 400,
  },
  productItem_image_image: {
    // width: '100%',
    // height: 400,
    resizeMode: 'contain',
  },
  productItem_price: {
    padding: 10,
    gap: 1,
    backgroundColor: 'white',
  },
  productItem_price_price: {
    fontSize: 30,
    color: '#EE4E2E',
    fontWeight: '700',
    marginBottom: 5,
  },
  productItem_price_spaylater: {
    fontSize: 13,
    color: '#EE4E2E',
  },
  productItem_price_giff: {
    paddingVertical: 1,
    borderWidth: 1,
    borderColor: '#EE4E2E',
    color: '#EE4E2E',
    fontSize: 12,
    width: 100,
    textAlign: 'center',
    marginTop: 5,
  },
  productItem_name: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  productItem_name_name: {
    fontSize: 18,
    color: '#000',
    fontWeight: '500',
    marginBottom: 5,
  },
  productItem_vote: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  productItem_vote_left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  productItem_rate: {
    color: 'black',
    fontSize: 14,
  },
  luotban: {
    color: 'black',
    fontSize: 14,
  },
  productItem_vote_right: {
    flexDirection: 'row',
    gap: 12,
  },
  productItem_vote_right_icon: {
    fontSize: 30,
    color: '#EE4E2E',
  },
  inforShop: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginTop: 10,
  },
  inforShop_left: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inforShop_left_avaShop: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    objectFit: 'cover',
  },
  inforShop_left_content: {
    gap: 1,
  },
  inforShop_name: {
    fontSize: 17,
    color: 'black',
    fontWeight: '600',
  },
  inforShop_online: {
    fontSize: 14,
  },
  inforShop_location: {
    fontSize: 14,
  },
  inforShop_right: {},
  inforShop_right_btn: {
    borderWidth: 1,
    borderColor: '#EE4E2E',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  inforShop_right_content: {
    fontSize: 16,
    color: '#EE4E2E',
  },
  inforShopMore: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 10,
  },
  inforShopMore_item: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  inforShopMore_item_1: {
    fontSize: 14,
    color: '#EE4E2E',
  },
  inforShopMore_item_2: {
    fontSize: 14,
    color: '#000',
  },
  shopHot: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  shopHot_btn: {
    paddingVertical: 7,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: '#EE4E2E',
  },
  shopHot_btn_left: {},
  shopHot_btn_left_text: {
    fontSize: 15,
    fontWeight: '700',
    color: '#EE4E2E',
  },
  shopHot_btn_right: {},
  shopHot_btn_right_text: {
    fontSize: 15,
    fontWeight: '500',
    color: '#EE4E2E',
  },
  productshop_more: {
    marginTop: 10,
    backgroundColor: 'white',
    paddingBottom: 5,
  },
  productshop_more_top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  productshop_more_top_left: {},
  productshop_more_top_left_content: {
    fontSize: 17,
    color: 'black',
    fontWeight: '500',
  },
  productshop_more_top_right: {},
  productshop_more_top_right_btn: {},
  productshop_more_top_right_content: {
    fontSize: 15,
    color: '#EE4E2E',
  },
  productshop_more_bottom: {
    paddingLeft: 10,
  },
  productshop_parameter: {
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  productshop_parameter_content: {
    fontSize: 15,
  },
  parameter_btn: {
    width: 390,
  },
  parameter_btn_text: {
    color: '#EE4E2E',
    padding: 10,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    borderWidth: 0.7,
    borderColor: '#EE4E2E',
    borderRadius: 5,
    marginTop: 20,
  },
});
export default styles;
