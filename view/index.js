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
import Flashsale from './FlashsaleScreen/flashsale';
import Login from './LoginScreen/login';
import Register from './RegisterScreen/register';
import Product from './ProductScreen/product';
import EditUser from './UserScreen/EdirUserScreen/edituser';
import Search from './SearchScreen/search';

const Stack = createNativeStackNavigator();

const RootComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="helloScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="helloScreen" component={HelloScreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="recommend" component={Recommend} />
        <Stack.Screen name="mall" component={Mall} />
        <Stack.Screen name="video" component={Video} />
        <Stack.Screen name="live" component={Live} />
        <Stack.Screen name="information" component={Information} />
        <Stack.Screen name="user" component={User} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="khuyenmai" component={Khuyenmai} />
        <Stack.Screen name="informationline" component={Informationline} />
        <Stack.Screen name="flashsale" component={Flashsale} />
        <Stack.Screen name="product" component={Product} />
        <Stack.Screen name="edituser" component={EditUser} />
        <Stack.Screen name="search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootComponent;
