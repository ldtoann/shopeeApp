import React, {useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  PermissionsAndroid,
} from 'react-native';
import ProductList2 from '../../components/ProductList2/index';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Search = ({navigation}) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  const [imgSearch, setImgSearch] = useState('');

  const searchcamera = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
        const result = await launchCamera({
          mediaType: 'photo',
          cameraType: 'front',
        });
        if (result.assets && result.assets.length > 0) {
          setImgSearch(result.assets[0].uri);
        } else {
          console.log('No image selected or taken');
        }
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const searchphoto = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Album permission given');
        const result = await launchImageLibrary({mediaType: 'photo'});
        if (result.assets && result.assets.length > 0) {
          setImgSearch(result.assets[0].uri);
        } else {
          console.log('No image selected from gallery');
        }
      } else {
        console.log('Album permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const data = [{type: 'NoScroll'}, {type: 'Scroll'}];

  const renderItem = ({item, index}) => {
    if (item.type === 'NoScroll') {
      return <View></View>;
    } else if (item.type === 'Scroll') {
      return (
        <View>
          {imgSearch != '' ? (
            <View>
              <Image
                source={{uri: imgSearch}}
                style={{
                  width: '100%',
                  height: 540,
                  resizeMode: 'contain',
                  marginBottom: 15,
                }}
              />
              <View
                style={{
                  paddingLeft: 10,
                  paddingTop: 10,
                }}>
                <ProductList2 />
              </View>
            </View>
          ) : null}
        </View>
      );
    }
    return null;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.recommend_header}>
        <View style={styles.recommend_header_nav}>
          <TouchableOpacity onPress={handleGoBack}>
            <Ionicons
              style={styles.recommend_header_nav_icon}
              name="arrow-back"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.recommend_header_input}>
          <TextInput
            style={styles.recommend_header_search}
            placeholder="Tìm kiếm sản phẩm ..."
            placeholderTextColor="#EE4E2E"
          />
          <TouchableOpacity onPress={() => searchcamera()}>
            <Ionicons style={styles.icon_eye} name="camera" />
          </TouchableOpacity>
        </View>
        <View style={styles.recommend_header_nav_img}>
          <TouchableOpacity
            style={styles.recommend_header_nav_icon_btn}
            onPress={() => searchphoto()}>
            <Ionicons
              style={styles.recommend_header_nav_icon_img}
              name="image"
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default Search;
