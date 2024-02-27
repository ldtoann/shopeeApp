'use strict';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './style';

const Index = ({
  goRecommend,
  goMall,
  goVideo,
  goLive,
  goInformation,
  goUser,
}) => {
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
      case 'Video':
        goVideo();
        break;
      case 'Live':
        goLive();
        break;
      case 'Information':
        goInformation();
        break;
      case 'User':
        goUser();
        break;
      // Các trang khác
      default:
        break;
    }
  };
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
        style={[styles.Menu_tab, activeTab === 'Video' && styles.activeTab]}
        onPress={() => handlePress('Video')}>
        <Text style={styles.Menu_tab_Icon}>
          <Icon
            style={[
              styles.Menu_tab_Icon_IconIcon,
              activeTab === 'Mall' && styles.activeIcon,
            ]}
            name="tv"
            solid
          />
        </Text>
        <Text
          style={[
            styles.Menu_tab_Text,
            activeTab === 'Video' && styles.activeText,
          ]}>
          Video
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.Menu_tab, activeTab === 'Live' && styles.activeTab]}
        onPress={() => handlePress('Live')}>
        <Text style={styles.Menu_tab_Icon}>
          <Icon
            style={[
              styles.Menu_tab_Icon_IconIcon,
              activeTab === 'Mall' && styles.activeIcon,
            ]}
            name="video"
            solid
          />
        </Text>
        <Text
          style={[
            styles.Menu_tab_Text,
            activeTab === 'Live' && styles.activeText,
          ]}>
          Live
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
        style={[styles.Menu_tab, activeTab === 'User' && styles.activeTab]}
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
            activeTab === 'User' && styles.activeText,
          ]}>
          Tôi
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
