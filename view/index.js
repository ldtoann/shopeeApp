import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HelloScreen from './helloScreen';
import Recommend from './RecommendScreen/recommend';
import Information from './InformationScreen/information';
import Cart from './CartScreen/cart';
import User from './UserScreen/user';
import Video from './VideoScreen/video';
import Mall from './MallScreen/mall';
import Live from './LiveScreen/live';
import Khuyenmai from './InformationScreen/InformationScreen(khuyenmai)/khuyenmai';
import Informationline from './InformationLineScreen/informationline';

const Stack = createNativeStackNavigator();

const RootComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="helloScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="helloScreen" component={HelloScreen} />
        <Stack.Screen name="recommend" component={Recommend} />
        <Stack.Screen name="mall" component={Mall} />
        <Stack.Screen name="video" component={Video} />
        <Stack.Screen name="live" component={Live} />
        <Stack.Screen name="information" component={Information} />
        <Stack.Screen name="user" component={User} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="khuyenmai" component={Khuyenmai} />
        <Stack.Screen name="informationline" component={Informationline} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootComponent;
