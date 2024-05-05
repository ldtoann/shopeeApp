import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  IconIcon: {
    color: '#EF4C29',
    fontSize: 27,
  },
  StyleIcon_text: {
    color: '#EF4C29',
    fontSize: 17,
    fontWeight: '700',
    marginRight: 20,
  },
});
export default styles;
