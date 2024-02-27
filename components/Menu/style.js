import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  NavMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  Menu_tab_Active: {
    alignItems: 'center',
    flex: 1,
    height: 'auto',
    borderTopWidth: 1.5,
    borderColor: '#216BFF',
    paddingVertical: 10,
  },
  Menu_tab: {
    paddingVertical: 10,
    alignItems: 'center',
    flex: 1,
    borderTopWidth: 1.5,
    borderColor: 'white',
  },
  Menu_tab_Icon: {
    marginBottom: 3,
  },
  Menu_tab_Icon_IconIcon: {
    fontSize: 23,
    color: '#EE4E2E',
  },
  Menu_tab_Text: {
    fontSize: 11,
    color: '#EE4E2E',
    fontWeight: '800',
  },
  Menu_tab_Icon_IconIcon_active: {
    color: '#216BFF',
  },
  Menu_tab_Text_active: {
    color: '#216BFF',
  },
});
export default styles;
