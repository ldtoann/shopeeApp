import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  // user_top---------------------------
  user_top: {
    position: 'relative',
  },
  user_top_bg: {},
  user_top_bg_image: {
    width: '100%',
    height: 170,
    objectFit: 'cover',
  },
  user_top_content: {
    position: 'absolute',
    width: '100%',
    height: 170,
    gap: 20,
    bottom: 0,
  },
  user_top_content_nav: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingVertical: 15,
    paddingRight: 15,
    gap: 15,
  },
  user_header_nav_icon: {
    color: 'white',
    fontSize: 25,
  },
  user_top_content_info: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  user_top_content_info_ava: {},
  user_top_ava: {
    width: 75,
    height: 75,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white',
  },
  user_top_content_info_info: {
    gap: 5,
  },
  user_top_content_info_info_name: {
    color: 'white',
    fontSize: 22,
    fontWeight: '900',
  },
  user_top_content_info_info_rank: {
    color: 'black',
    backgroundColor: 'white',
    padding: 2,
    fontSize: 12,
    width: 140,
    textAlign: 'center',
    borderRadius: 10,
    fontWeight: '600',
  },
  user_top_content_info_info_follower: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  linedoc: {
    width: 2,
    height: '80%', // Chiều cao phù hợp
    backgroundColor: 'white', // Màu sắc của đường kẻ
  },
  user_top_content_info_info_follower_member: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  user_top_content_info_info_follower_member_text: {
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
  },
  user_top_content_info_info_follower_member_number: {
    color: 'white',
    fontSize: 13,
    fontWeight: '800',
  },
  // user_main---------------------------
  user_main: {
    borderTopWidth: 5,
    borderColor: '#cdced1',
  },
  linengang: {
    height: 0.5,
    marginHorizontal: 10,
    backgroundColor: 'gray',
  },
  user_main_livesieusale: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  user_main_livesieusale_icon: {
    fontSize: 30,
    color: '#EF4C29',
  },
  user_main_livesieusale_text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  user_main_livesieusale_iconlist: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  user_main_livesieusale_iconlist_item: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  user_main_livesieusale_iconlist_item_iconBG: {
    backgroundColor: '#EF4C29',
    borderRadius: 30,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user_main_livesieusale_iconlist_item_icon: {
    fontSize: 20,
    color: 'white',
  },
  user_main_livesieusale_iconlist_item_text1: {
    fontSize: 13,
    color: 'black',
    fontWeight: '600',
  },
  user_main_livesieusale_iconlist_item_text2: {
    fontSize: 12,
    fontWeight: '600',
  },
  user_main_button: {},
  user_main_napthedichvu_btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  user_main_napthedichvu_btn_left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  user_main_napthedichvu_btn_left_icon: {
    color: '#26AA99',
    // màu xanh lá
    fontSize: 20,
  },
  user_main_donmua_btn_left_icon: {
    color: '#487FC3',
    // màu xanh biển
    fontSize: 20,
  },
  user_main_food_btn_left_icon: {
    color: '#EF4C29',
    // màu cam shopee
    fontSize: 20,
  },
  user_main_napthedichvu_btn_left_text: {
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
  },
  user_main_napthedichvu_btn_right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  user_main_napthedichvu_btn_right_text: {
    fontSize: 13,
  },
  user_main_napthedichvu_btn_right_icon: {
    fontSize: 15,
  },
  user_main_tienich_iconlist: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 17,
    width: '100%',
  },
  user_main_tienich_iconlist_item: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    width: '20%',
  },
  user_main_listdonmua_iconlist_item_iconBG: {
    backgroundColor: 'transparent',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user_main_Listdonmua_iconlist_item_icon: {
    color: 'gray',
    fontSize: 20,
  },
  user_main_tienich_iconlist_item_icon: {
    color: '#EF4C29',
    fontSize: 20,
  },
  user_main_tienich_iconlist_item_text1: {
    fontSize: 12,
    color: 'black',
    fontWeight: '500',
  },
  user_main_listdonmua_iconlist_item_text1: {
    fontSize: 12,
    color: 'black',
    fontWeight: '500',
  },
  user_main_naplai_btn_left_icon: {
    color: '#F2BB3C',
    // màu vàng
    fontSize: 20,
  },
  user_main_sale_btn_left_icon: {
    color: '#EF4C29',
    fontSize: 20,
  },
  user_main_sale_btn_left_text: {
    fontSize: 15,
    color: '#EF4C29',
    fontWeight: '400',
  },
  user_main_button_sale: {
    backgroundColor: '#FACBC1',
  },
  user_top_content_info_admin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
  },
  user_top_content_info_ava_admin: {},
  user_top_ava_admin: {
    width: 75,
    height: 75,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white',
  },
  user_top_content_info_info_admin: {
    flexDirection: 'row',
    gap: 10,
  },
  user_top_content_info_info_btn_admin: {
    width: 100,
    height: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
  },
  user_top_content_info_info_btn_admin_text: {
    color: '#EF4C29',
    fontWeight: '700',
    fontSize: 13,
  },
});
export default styles;
