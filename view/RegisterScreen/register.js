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
// import FontAwesome, {SolidIcons} from 'react-native-fontawesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const Login = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkEmail, setCheckEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const [rank, setRank] = useState('');
  const onSubmit = () => {
    let formData = {
      name: name,
      email: email,
      password: password,
      avatar: avatar,
      rank: rank,
    };
    axios
      .post(
        'https:660d12f03a0766e85dbf7afb.mockapi.io/ShopeeAppClone/account',
        formData,
      )
      .then(res => {
        console.log(res);
        Alert.alert('Registered Successfull!!');
        navigation.navigate('login');
      })
      .catch(e => console.log(e));
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
                    onChangeText={text => setName(text)}
                    value={name}
                    placeholder="Họ và tên"
                  />
                </View>
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
                  />
                </View>
                <View style={styles.box_input}>
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setConfirmPassword(text)}
                    value={confirmPassword}
                    placeholder="Xác Nhận Mật khẩu"
                  />
                </View>
                <View style={styles.box_input}>
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setAvatar(text)}
                    value={avatar}
                    placeholder="Ảnh đại diện"
                  />
                </View>
                <View style={styles.box_input}>
                  <TextInput
                    style={styles.input}
                    onChangeText={text => setRank(text)}
                    value={rank}
                    placeholder="rank thành viên"
                  />
                </View>
              </View>
              <View style={styles.section_button}>
                <TouchableOpacity
                  style={styles.section_button_login}
                  // onPress={() => {
                  //   navigation.navigate('Facebook');
                  // }}
                  onPress={onSubmit}>
                  <Text style={styles.section_button_login_text}>ĐĂNG KÝ</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.section_more}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('login');
                }}>
                <Text style={styles.section_more_register}>Đăng Nhập</Text>
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
