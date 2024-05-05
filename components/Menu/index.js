'use strict';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';

const Index = ({goRecommend, goMall, goInformation, goLogin, goFlashsale}) => {
  const [activeTab, setActiveTab] = useState('Recommend');
  const handlePress = tab => {
    setActiveTab(tab);
    switch (tab) {
      case 'Recommend':
        goRecommend();
        break;
      case 'Mall':
        goMall();
        break;
      case 'Flashsale':
        goFlashsale();
        break;
      case 'Information':
        goInformation();
        break;
      case 'User':
        goLogin();
        break;
      // case 'User':
      //   goLogin();
      //   break;
      // Các trang khác
      default:
        break;
    }
  };

  // const handlePressCHANGE = () => {
  //   if (isLoggedIn) {
  //     navigation.navigate('user'); // Điều hướng tới trang User nếu đã đăng nhập
  //   } else {
  //     navigation.navigate('login'); // Điều hướng tới trang Login nếu chưa đăng nhập
  //   }
  // };

  return (
    <View style={styles.NavMenu}>
      <TouchableOpacity
        style={[styles.Menu_tab, activeTab === 'Recommend' && styles.activeTab]}
        onPress={() => handlePress('Recommend')}>
        <Text style={styles.Menu_tab_Icon}>
          <Icon
            style={[
              styles.Menu_tab_Icon_IconIcon,
              activeTab === 'Mall' && styles.activeIcon,
            ]}
            name="thumbs-up"
            solid
          />
        </Text>
        <Text
          style={[
            styles.Menu_tab_Text,
            activeTab === 'Recommend' && styles.activeText,
          ]}>
          Gợi ý
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.Menu_tab, activeTab === 'Mall' && styles.activeTab]}
        onPress={() => handlePress('Mall')}>
        <Text style={styles.Menu_tab_Icon}>
          <Icon
            style={[
              styles.Menu_tab_Icon_IconIcon,
              activeTab === 'Mall' && styles.activeIcon,
            ]}
            name="shopping-bag"
            solid
          />
        </Text>
        <Text
          style={[
            styles.Menu_tab_Text,
            activeTab === 'Mall' && styles.activeText,
          ]}>
          Mall
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.Menu_tab, activeTab === 'Flashsale' && styles.activeTab]}
        onPress={() => handlePress('Flashsale')}>
        <Text style={styles.Menu_tab_Icon}>
          <Icon
            style={[
              styles.Menu_tab_Icon_IconIcon,
              activeTab === 'Mall' && styles.activeIcon,
            ]}
            name="bolt"
            solid
          />
        </Text>
        <Text
          style={[
            styles.Menu_tab_Text,
            activeTab === 'Flashsale' && styles.activeText,
          ]}>
          Flash sale
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.Menu_tab,
          activeTab === 'Information' && styles.activeTab,
        ]}
        onPress={() => handlePress('Information')}>
        <Text style={styles.Menu_tab_Icon}>
          <Icon
            style={[
              styles.Menu_tab_Icon_IconIcon,
              activeTab === 'Mall' && styles.activeIcon,
            ]}
            name="bell"
            solid
          />
        </Text>
        <Text
          style={[
            styles.Menu_tab_Text,
            activeTab === 'Information' && styles.activeText,
          ]}>
          Thông báo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.Menu_tab, activeTab === 'Login' && styles.activeTab]}
        onPress={() => handlePress('User')}>
        <Text style={styles.Menu_tab_Icon}>
          <Icon
            style={[
              styles.Menu_tab_Icon_IconIcon,
              activeTab === 'Mall' && styles.activeIcon,
            ]}
            name="user"
            solid
          />
        </Text>
        <Text
          style={[
            styles.Menu_tab_Text,
            activeTab === 'Login' && styles.activeText,
          ]}>
          Tôi
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={[styles.Menu_tab, activeTab === 'Login' && styles.activeTab]}
        onPress={handlePressCHANGE}>
        <Text style={styles.Menu_tab_Icon}>
          <Icon
            style={[
              styles.Menu_tab_Icon_IconIcon,
              activeTab === 'Mall' && styles.activeIcon,
            ]}
            name="user"
            solid
          />
        </Text>
        <Text
          style={[
            styles.Menu_tab_Text,
            activeTab === 'Login' && styles.activeText,
          ]}>
          Tôi
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Index;
