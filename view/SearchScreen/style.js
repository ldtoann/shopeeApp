import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  recommend_header_input: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'gray',
    borderRadius: 5,
  },
  recommend_header_search: {
    width: 250,
    height: 37,
    fontSize: 13,
    fontWeight: '700',
    paddingHorizontal: 10,
    borderRadius: 3,
    backgroundColor: 'white',
  },
  icon_eye: {
    fontSize: 25,
    marginRight: 10,
  },
  recommend_header_nav_icon: {
    fontSize: 25,
    color: '#EE4E2E',
  },
  recommend_header_nav_img: {},
  recommend_header_nav_icon_btn: {
    backgroundColor: '#EE4E2E',
    padding: 5,
    borderRadius: 10,
  },
  recommend_header_nav_icon_img: {
    fontSize: 25,
    color: 'white',
  },
});
export default styles;
