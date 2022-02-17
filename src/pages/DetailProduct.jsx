import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  IconBackBlack,
  IconButtonBack,
  IconCartBlack,
  IconLiveChat,
  LoveButtonPrimary,
  LoveButtonSecondary,
  Shoes1,
  Shoes4,
} from '../assets';
import Gap from '../components/Gap';

const DetailProduct = ({navigation}) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <View style={styles.page}>
      <ImageBackground style={styles.containerImage} source={Shoes1}>
        <View style={[styles.row, styles.header]}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.buttonHeader}>
            <IconBackBlack />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonHeader}>
            <IconCartBlack />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <View style={styles.row}>
          <View>
            <Text style={styles.titleText}>TEREX URBAN LOW</Text>
            <Text style={styles.categoryText}>Hiking</Text>
          </View>
          <TouchableOpacity
            onPress={() => setIsClicked(!isClicked)}
            activeOpacity={0.7}>
            {!isClicked ? (
              <Image style={styles.iconButton} source={LoveButtonSecondary} />
            ) : (
              <Image style={styles.iconButton} source={LoveButtonPrimary} />
            )}
          </TouchableOpacity>
        </View>
        <Gap height={20} />
        <View style={styles.containerPrice}>
          <Text style={styles.titlePrice}>Price starts from</Text>
          <Text style={styles.price}>$143,98</Text>
        </View>
        <Gap height={30} />
        <Text style={styles.desc}>Description</Text>
        <Gap height={12} />
        <Text style={styles.textDesc}>
          Unpaved trails and mixed surfaces are easy when you have the traction
          and support you need. Casual enough for the daily commute.
        </Text>

        <View style={styles.position}>
          <Text style={styles.desc}>Fimiliar Shoes</Text>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.containerShoes}>
                <Image source={Shoes4} style={styles.shoesFimiliar} />
                <Image source={Shoes4} style={styles.shoesFimiliar} />
                <Image source={Shoes4} style={styles.shoesFimiliar} />
                <Image source={Shoes4} style={styles.shoesFimiliar} />
                <Image source={Shoes4} style={styles.shoesFimiliar} />
                <Image source={Shoes4} style={styles.shoesFimiliar} />
              </View>
            </ScrollView>
          </View>
          <Gap height={30} />
          <View style={styles.row}>
            <Pressable style={styles.buttonLiveChat}>
              <IconLiveChat />
            </Pressable>
            <TouchableOpacity
              onPress={() => navigation.navigate('MainApp', {screen: 'Cart'})}
              style={styles.buttonAdd}>
              <Text style={styles.textButton}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailProduct;

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#999',
  },
  containerImage: {
    width,
    height: 350,
    backgroundColor: '#999',
  },
  container: {
    flex: 1,
    backgroundColor: '#1F1D2B',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    marginTop: -20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: 46,
    height: 46,
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#F1F0F2',
  },
  categoryText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#999',
  },
  containerPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2B2937',
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  titlePrice: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#F1F0F2',
  },
  price: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#2C96F1',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#F1F0F2',
  },
  textDesc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#999',
  },
  shoesFimiliar: {
    width: 54,
    height: 54,
    marginRight: 20,
  },
  containerShoes: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  buttonLiveChat: {
    width: 54,
    height: 54,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#6C5ECF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  buttonAdd: {
    flex: 1,
    backgroundColor: '#6C5ECF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    borderRadius: 12,
  },
  textButton: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#F1F0F2',
  },
  position: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 30,
    marginHorizontal: 30,
  },
  buttonHeader: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: 50,
    marginHorizontal: 10,
  },
});
