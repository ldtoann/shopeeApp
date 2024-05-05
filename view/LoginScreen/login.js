import React, {useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [getPasswordVisible, setPasswordVisible] = useState(false);

  const handleLoginPress = () => {
    axios
      .get(
        `https://660d12f03a0766e85dbf7afb.mockapi.io/ShopeeAppClone/account?search=${email}`,
      )
      .then(response => {
        console.log(response.data);
        if (response.data.length > 0) {
          const user = response.data[0];
          if (user.password === password) {
            // Lưu thông tin người dùng vào AsyncStorage
            AsyncStorage.setItem('userInfo', JSON.stringify(user))
              .then(() => {
                console.log('User info saved successfully');
                Alert.alert('Đăng nhập thành công');
                navigation.navigate('recommend', {userInfo: user});
              })
              .catch(error => {
                console.error('Error saving user info:', error);
                Alert.alert('Đã xảy ra lỗi trong quá trình đăng nhập');
              });
          } else {
            Alert.alert('Đăng nhập thất bại', 'Mật khẩu không chính xác');
          }
        } else {
          Alert.alert('Đăng nhập thất bại', 'Email không tồn tại');
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
        Alert.alert('Đã xảy ra lỗi trong quá trình đăng nhập');
      });
  };

  return (
    <View>
      <ImageBackground
        style={styles.bg_login}
        source={require('../../src/public/bnqc1.png')}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.section_login}>
            <View style={styles.from_login}>
              <View style={styles.section_logo}>
                <Text style={styles.section_logo_logo}>Shopee</Text>
              </View>
              <View style={styles.section_input}>
                <View style={styles.box_input}>
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    placeholder="Email hoặc số điện thoại"
                  />
                </View>
                <View style={styles.box_input}>
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    placeholder="Mật khẩu"
                    autoCapitalize="none"
                    secureTextEntry={getPasswordVisible ? false : true} // Đảm bảo mật khẩu được ẩn
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setPasswordVisible(!getPasswordVisible);
                    }}>
                    {getPasswordVisible ? (
                      <Ionicons style={styles.icon_eye} name="eye-sharp" />
                    ) : (
                      <Ionicons style={styles.icon_eye} name="eye-off-sharp" />
                    )}
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.section_button}>
                <TouchableOpacity
                  style={styles.section_button_login}
                  onPress={handleLoginPress}>
                  <Text style={styles.section_button_login_text}>
                    ĐĂNG NHẬP
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.section_more}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('register');
                }}>
                <Text style={styles.section_more_register}>Đăng ký</Text>
              </TouchableOpacity>
              <Text style={styles.section_more_register}>Cần trợ giúp?</Text>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default Login;
