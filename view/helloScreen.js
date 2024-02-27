import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HelloScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('recommend'); // Chuyển hướng đến màn hình chính
    }, 3000); // 3000 milliseconds = 3 giây
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#EF4C29'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
              fontWeight: '800',
              // fontStyle: 'italic',
            }}>
            <Icon
              style={{
                fontSize: 100,
                color: 'white',
                fontWeight: '800',
                // fontStyle: 'italic',
              }}
              name="shopify"
              solid
            />
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HelloScreen;
