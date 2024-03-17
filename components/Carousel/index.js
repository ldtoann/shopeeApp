import React, {useState, useRef, useEffect} from 'react';
import {
  FlatList,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const Index = () => {
  const screenWidth = Dimensions.get('window').width;
  const flatlistRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselData = [
    {id: '01', image: require('../../src/public/bnqc2.png')},
    {id: '02', image: require('../../src/public/bnqc1.png')},
    {id: '03', image: require('../../src/public/bnqc3.png')},
    {id: '04', image: require('../../src/public/bnqc4.png')},
    {id: '05', image: require('../../src/public/bnqc5.png')},
    {id: '06', image: require('../../src/public/bnqc6.png')},
    {id: '07', image: require('../../src/public/bnqc7.png')},
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex >= carouselData.length) {
        nextIndex = 0; // Nếu đã ở ảnh cuối cùng, chuyển về ảnh đầu tiên
      }
      flatlistRef.current.scrollToIndex({
        animated: true,
        index: nextIndex,
      });
      setActiveIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]); // Sử dụng activeIndex để đảm bảo effect được gọi mỗi khi activeIndex thay đổi

  const renderItem = ({item}) => {
    return (
      <View>
        <Image source={item.image} style={{width: screenWidth, height: 200}} />
      </View>
    );
  };

  const handleDotPress = index => {
    flatlistRef.current.scrollToIndex({animated: true, index});
    setActiveIndex(index);
  };

  const renderDotIndicators = () => {
    return carouselData.map((_, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => handleDotPress(index)}
        style={{
          backgroundColor: activeIndex === index ? 'red' : 'white',
          opacity: 0.8,
          height: 8,
          width: 8,
          borderRadius: 5,
          marginHorizontal: 6,
          borderWidth: 2,
          borderColor: activeIndex === index ? 'white' : 'white',
        }}
      />
    ));
  };

  return (
    <View>
      <FlatList
        ref={flatlistRef}
        data={carouselData}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        onScroll={event => {
          const scrollPosition = event.nativeEvent.contentOffset.x;
          const index = Math.round(scrollPosition / screenWidth);
          setActiveIndex(index);
        }}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: -25,
          marginBottom: 15,
        }}>
        {renderDotIndicators()}
      </View>
    </View>
  );
};

export default Index;
