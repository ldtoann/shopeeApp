import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import Menu from '../../components/Menu/index';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Recommend = ({navigation}) => {
  const navigateRecommend = () => {
    navigation.navigate('recommend');
  };
  const navigateMall = () => {
    navigation.navigate('mall');
  };
  const navigateVideo = () => {
    navigation.navigate('video');
  };
  const navigateLive = () => {
    navigation.navigate('live');
  };
  const navigateInformation = () => {
    navigation.navigate('information');
  };
  const navigateUser = () => {
    navigation.navigate('user');
  };

  const data = [{type: 'NoScroll'}, {type: 'Scroll'}];

  const renderItem = ({item, index}) => {
    if (item.type === 'NoScroll') {
      return <View></View>;
    } else if (item.type === 'Scroll') {
      return (
        <View>
          <View style={styles.Notification_Title}>
            <Text style={styles.Notification_Title_Text}>Gợi ý</Text>
            <Text style={styles.Notification_Title_Text}>Bạn bè</Text>
          </View>
          <View style={styles.horizontalLine}>
            <View style={styles.Line}></View>
          </View>
          <View style={styles.Notification_Title2}>
            <Text style={styles.Notification_Title2_Text1}>
              Lời mời kết bạn
            </Text>
            <TouchableOpacity>
              <Text style={styles.Notification_Title2_Text2}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.recommend_header}>
        <View style={styles.recommend_header_input}>
          <TextInput
            placeholder="Tìm kiếm sản phẩm ..."
            placeholderTextColor="#EE4E2E"
            style={styles.recommend_header_search}
          />
        </View>
        <View style={styles.recommend_header_nav}>
          <TouchableOpacity>
            <Ionicons
              style={styles.recommend_header_nav_icon}
              name="cart-outline"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={styles.recommend_header_nav_icon}
              name="chatbubbles-outline"
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <Menu
        goRecommend={navigateRecommend}
        goMall={navigateMall}
        goVideo={navigateVideo}
        goLive={navigateLive}
        goInformation={navigateInformation}
        goUser={navigateUser}
      />
    </SafeAreaView>
  );
};

export default Recommend;
