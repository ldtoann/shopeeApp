import React from 'react';
import {Text, View} from 'react-native';
import Menu from '../../components/Menu/index';

const Mall = ({navigation}) => {
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
  return (
    <View>
      <Text>Mall page</Text>
      <Menu
        goRecommend={navigateRecommend}
        goMall={navigateMall}
        goVideo={navigateVideo}
        goLive={navigateLive}
        goInformation={navigateInformation}
        goUser={navigateUser}
      />
    </View>
  );
};

export default Mall;
