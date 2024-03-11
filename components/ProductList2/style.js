import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  product_row: {
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  product_item: {
    width: 190,
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  product_image: {
    width: '100%',
    height: 190,
    objectFit: 'cover',
    marginBottom: 5,
  },
  product_name: {
    fontSize: 14,
    color: 'black',
    fontWeight: '500',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  product_price: {
    fontSize: 15,
    color: '#EF4C29',
    fontWeight: '700',
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  product_Evaluate: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  product_star: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  linedoc: {
    height: '80%',
    width: 1,
    backgroundColor: 'gray',
  },
  product_star_icon: {
    fontSize: 15,
    color: '#F6A420',
  },
  product_star_soluong: {
    fontSize: 13,
    color: 'black',
  },
  product_luotdanhgia: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  product_luotdanhgia_text: {
    fontSize: 13,
    color: 'black',
  },
  product_location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  product_location_icon: {
    fontSize: 15,
  },
  product_location_name: {
    fontSize: 13,
  },
});

export default styles;
