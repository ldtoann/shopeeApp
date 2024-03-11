import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user_main: {
    borderTopWidth: 5,
    borderColor: '#cdced1',
    backgroundColor: 'white',
  },
  linengang: {
    height: 0.5,
    marginHorizontal: 10,
    backgroundColor: 'gray',
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
    gap: 15,
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
  user_main_napthedichvu_btn_left_content_text: {
    // gap: 1,
  },
  user_main_napthedichvu_btn_left_text: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
  user_main_napthedichvu_btn_left_text01: {
    fontSize: 14,
    fontWeight: '400',
  },
  user_main_napthedichvu_btn_right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  user_main_napthedichvu_btn_right_text: {
    fontSize: 13,
    fontWeight: '600',
    color: 'white',
  },
  user_main_napthedichvu_btn_right_bgbg: {
    width: 25,
    height: 25,
    backgroundColor: '#EF4C29',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user_main_napthedichvu_btn_right_icon: {
    fontSize: 15,
  },
  Navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 5,
    position: 'relative',
    height: 56.9,
    borderBottomWidth: 1,
    borderColor: 'gray',
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
});
export default styles;
