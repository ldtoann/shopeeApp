import React from 'react';
import {Text, View} from 'react-native';
import Menu from '../../components/Menu/index';

const Live = ({navigation}) => {
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
      <Text>Live page</Text>
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

export default Live;
