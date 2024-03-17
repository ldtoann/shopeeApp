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
    position: 'relative',
  },
  product_item_title_sale: {
    position: 'absolute',
    backgroundColor: 'red',
    color: 'white',
    paddingHorizontal: 5,
    paddingVertical: 3,
    fontSize: 10,
    fontWeight: '500',
    top: 5,
    left: -2,
    letterSpacing: 2,
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
  product_item_bottom_price: {
    textAlign: 'center',
    color: '#EF4C29',
    fontSize: 17,
    fontWeight: '700',
  },
  product_item_bottom_title: {
    marginBottom: 5,
    paddingHorizontal: 8,
  },
  product_item_bottom_title_content: {
    textAlign: 'center',
    backgroundColor: '#EF4C29',
    color: 'white',
    borderRadius: 15,
    fontSize: 13,
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
