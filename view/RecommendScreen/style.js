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
    backgroundColor: '#FFD404',
    position: 'relative',
  },
  recommend_menuList1: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    flexDirection: 'row',
    gap: 15,
    paddingVertical: 17,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    top: -11,
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
    height: 300,
    paddingHorizontal: 10,
    marginTop: 70,
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
    width: 160,
    position: 'relative',
    alignItems: 'center',
  },
  recommend_menuList2_2_item_image: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    objectFit: 'cover',
    borderWidth: 1,
    borderColor: 'white',
  },
  recommend_menuList2_button: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    position: 'absolute',
    bottom: -12,
    borderRadius: 15,
    paddingVertical: 2,
    width: 90,
  },
  recommend_menuList2_button_text: {
    fontSize: 13,
    color: '#EE4E2E',
    fontWeight: '500',
    textAlign: 'center',
  },
  recommend_menuList2_1: {
    // paddingHorizontal: 2,
    paddingVertical: 15,
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
    borderRadius: 5,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recommend_menuList2_List_item_icon: {
    fontSize: 25,
    color: '#EE4E2E',
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
    backgroundColor: 'black',
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
});
export default styles;
