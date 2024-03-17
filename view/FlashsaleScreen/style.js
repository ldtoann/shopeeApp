import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  horizontalLine: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#242526',
  },
  linedoc: {
    height: '80%',
    width: 1,
    backgroundColor: 'gray',
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
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 6,
    gap: 10,
  },
  recommend_header_input: {},
  recommend_header_search: {
    width: 300,
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
  recommend_menuList: {
    backgroundColor: 'white',
  },
  recommend_menuList1_icon: {
    fontSize: 26,
  },
  recommend_pay: {},
  recommend_pay_top: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
  },
  recommend_pay_top_icon: {
    fontSize: 15,
    color: '#EE4E2E',
  },
  recommend_pay_top_text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  recommend_pay_top_contentt: {
    fontSize: 11,
  },
  recommend_menuList2: {
    height: 210,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  recommend_menuList2_2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  recommend_menuList2_2_item: {
    width: 105,
    position: 'relative',
    alignItems: 'center',
  },
  recommend_menuList2_2_item2: {
    width: '100%',
    position: 'relative',
    alignItems: 'center',
  },
  recommend_menuList2_2_item_image: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    objectFit: 'cover',
    borderWidth: 1,
    borderColor: 'gray',
  },
  recommend_menuList2_button: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    position: 'absolute',
    bottom: -12,
    borderRadius: 15,
    paddingVertical: 2,
    width: 190,
    borderWidth: 1,
    borderColor: 'gray',
  },
  recommend_menuList2_button_text: {
    fontSize: 13,
    color: '#EE4E2E',
    fontWeight: '500',
    textAlign: 'center',
  },
  recommend_menuList2_1: {
    // paddingHorizontal: 2,
    paddingVertical: 5,
    gap: 15,
  },
  recommend_menuList2_List: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  recommend_menuList2_List_item: {
    width: 75,
    alignItems: 'center',
    gap: 2,
  },
  recommend_menuList2_List_item_top_icon: {},
  recommend_menuList2_List_item_bg_icon: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 39,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  recommend_menuList2_List_item_icon: {
    fontSize: 25,
    color: '#BB0F0F',
  },
  recommend_menuList2_List_item_text: {
    fontSize: 12,
    color: 'black',
  },
  recommend_flashSale: {
    backgroundColor: 'white',
    marginVertical: 10,
  },
  recommend_flashSale_top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  recommend_flashSale_top_2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: 'white',
  },
  recommend_flashSale_top_left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  recommend_flashSale_top_left_text: {
    fontSize: 18,
    color: '#EE4E2E',
    fontWeight: '700',
  },
  recommend_flashSale_top_left_time: {
    fontSize: 15,
    color: 'white',
    backgroundColor: 'gray',
    fontWeight: '500',
    paddingHorizontal: 5,
  },
  recommend_flashSale_top_right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  recommend_flashSale_top_right_text: {},
  recommend_flashSale_top_right_icon: {},
  recommend_flashSale_bottom: {
    paddingLeft: 10,
  },
  mall_uudai_hotro: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  mall_uudai_hotro_item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  mall_uudai_hotro_item_icon: {
    fontSize: 17,
    color: '#BB0F0F',
  },
  mall_uudai_hotro_item_text: {
    fontSize: 12,
  },
  thuonghieu_bn: {
    width: '100%',
    height: 100,
    objectFit: 'cover',
  },
  titleProductList: {
    backgroundColor: 'white',
    padding: 12,
  },
  titleProductList_text: {
    fontSize: 18,
    color: '#EE4E2E',
    fontWeight: '700',
  },
  mall_danhmuc: {
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  mall_danhmuc_item: {
    width: 100,
    marginLeft: 15,
  },
  mall_danhmuc_item_image: {
    width: '100%',
    height: 100,
    objectFit: 'cover',
  },
  mall_danhmuc_item_text: {
    textAlign: 'center',
  },
});
export default styles;
