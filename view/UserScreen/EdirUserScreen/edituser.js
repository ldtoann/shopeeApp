import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScreenInformation = ({navigation}) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Đọc thông tin người dùng từ AsyncStorage khi truy cập
    AsyncStorage.getItem('userInfo')
      .then(userInfo => {
        if (userInfo) {
          setUserInfo(JSON.parse(userInfo));
          setIsLoggedIn(true); // Đã đăng nhập
        }
      })
      .catch(error => console.error('Error retrieving user info:', error));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Navbar}>
        <View style={styles.SearchMessengerPlus2}>
          <TouchableOpacity style={styles.BgIcon} onPress={handleGoBack}>
            <Text style={styles.StyleIcon}>
              <Ionicons style={styles.IconIcon} name="arrow-back-sharp" />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.User_name}>
          <Text style={styles.name}>Sửa Hồ Sơ</Text>
        </View>
        <View style={styles.SearchMessengerPlus}>
          <View>
            <TouchableOpacity>
              <Text style={styles.StyleIcon_text}>Lưu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {isLoggedIn ? (
        <View style={styles.edit_user_main}>
          <View style={{position: 'relative'}}>
            <Image
              style={{
                width: '100%',
                height: 200,
                resizeMode: 'cover',
                opacity: 0.7,
              }}
              source={{uri: userInfo.avatar}}
            />
            <View
              style={{
                position: 'absolute',
                width: '100%',
                alignItems: 'center',
                top: 50,
              }}>
              <View
                style={{
                  position: 'relative',
                }}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                    borderRadius: 50,
                    borderWidth: 1,
                    borderColor: 'white',
                  }}
                  source={{uri: userInfo.avatar}}
                />
                <TouchableOpacity>
                  <Text
                    style={{
                      position: 'absolute',
                      width: 98,
                      height: 49,
                      bottom: 1,
                      marginLeft: 1,
                      textAlign: 'center',
                      paddingTop: 10,
                      backgroundColor: 'black',
                      color: 'white',
                      borderBottomLeftRadius: 50,
                      borderBottomRightRadius: 50,
                      opacity: 0.5,
                      fontWeight: '900',
                    }}>
                    Sửa
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginBottom: 1,
            }}>
            <Text style={{color: 'black', fontSize: 15, fontWeight: '400'}}>
              Tên
            </Text>
            <View>
              <TextInput
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: '400',
                  textAlign: 'right',
                  width: 250,
                  height: 45,
                }}
                placeholder={userInfo.name}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginBottom: 1,
            }}>
            <Text style={{color: 'black', fontSize: 15, fontWeight: '400'}}>
              Giới tính
            </Text>
            <View>
              <TextInput
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: '400',
                  textAlign: 'right',
                  width: 250,
                  height: 45,
                }}
                placeholder={userInfo.sex}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginBottom: 20,
            }}>
            <Text style={{color: 'black', fontSize: 15, fontWeight: '400'}}>
              Ngày sinh
            </Text>
            <View>
              <TextInput
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: '400',
                  textAlign: 'right',
                  width: 250,
                  height: 45,
                }}
                placeholder={userInfo.date}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginBottom: 1,
            }}>
            <Text style={{color: 'black', fontSize: 15, fontWeight: '400'}}>
              Email
            </Text>
            <View>
              <TextInput
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: '400',
                  textAlign: 'right',
                  width: 250,
                  height: 45,
                }}
                placeholder={userInfo.email}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginBottom: 20,
            }}>
            <Text style={{color: 'black', fontSize: 15, fontWeight: '400'}}>
              Mật Khẩu
            </Text>
            <View>
              <TextInput
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: '400',
                  textAlign: 'right',
                  width: 250,
                  height: 45,
                }}
                placeholder={userInfo.password}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginBottom: 1,
            }}>
            <Text style={{color: 'black', fontSize: 15, fontWeight: '400'}}>
              Số điện thoại
            </Text>
            <View>
              <TextInput
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: '400',
                  textAlign: 'right',
                  width: 250,
                  height: 45,
                }}
                placeholder={userInfo.phone}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginBottom: 20,
            }}>
            <Text style={{color: 'black', fontSize: 15, fontWeight: '400'}}>
              Địa chỉ
            </Text>
            <View>
              <TextInput
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: '400',
                  textAlign: 'right',
                  width: 250,
                  height: 45,
                }}
                placeholder={userInfo.location}
              />
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default ScreenInformation;
