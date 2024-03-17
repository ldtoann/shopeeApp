import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  product_list: {
    paddingVertical: 15,
  },
  product_item: {
    width: 160,
    marginRight: 7,
    padding: 2,
    gap: 2,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: 'white',
  },
  product_item_top: {},
  product_item_top_img: {
    width: '100%',
    height: 160,
    objectFit: 'cover',
  },
  product_item_bottom: {
    padding: 3,
    gap: 5,
  },
  product_item_bottom_title: {
    fontSize: 13,
    color: 'black',
    fontWeight: '500',
  },
  product_item_bottom_bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  product_item_bottom_price: {
    fontSize: 15,
    color: '#EF4C29',
    fontWeight: '500',
  },
  product_item_bottom_icon_bg: {
    backgroundColor: '#EF4C29',
    paddingVertical: 2,
    paddingHorizontal: 3,
    marginRight: 3,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  product_item_bottom_icon: {
    fontSize: 16,
    color: 'white',
  },
  product_more: {
    width: 120,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  product_content: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
  },
  product_more_icon: {
    fontSize: 25,
    color: '#EF4C29',
  },
  product_more_text: {
    fontSize: 15,
    color: '#EF4C29',
  },
});
export default styles;
