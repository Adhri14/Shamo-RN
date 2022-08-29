import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {
  IconBackBlack,
  IconButtonBack,
  IconCartBlack,
  IconCheck,
  IconCloseX,
  IconLiveChat,
  LoveButtonPrimary,
  LoveButtonSecondary,
  Shoes1,
  Shoes4,
} from '../assets';
import Gap from '../components/Gap';
import showMessage from '../utils/showMessage';
import axios from 'axios';
import {API} from '../config';
import {useDispatch, useSelector} from 'react-redux';

const DetailProduct = ({navigation, route}) => {
  const {cartReducer} = useSelector(state => state);
  const dispatch = useDispatch();
  const {item: itemData} = route.params;
  // console.log(item);
  const [isClicked, setIsClicked] = useState(false);
  const flatList = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    const index = viewableItems[0].index;
    setCurrentSlide(index);
  }).current;

  useEffect(() => {
    getAllShoes();
  }, []);

  const getAllShoes = () => {
    setLoading(true);
    axios
      .get(`${API.base_url}api/products`)
      .then(res => {
        setLoading(false);
        const array = res.data.data.data;
        console.log(array);
        if (Array.isArray(array)) {
          setData(array);
        }
      })
      .catch(err => {
        setLoading(false);
        showMessage({
          message: err.message,
        });
      });
  };

  const onCart = () => {
    setModalVisible(true);
    // cartReducer?.cart?.filter((_, i) => {
    //   if (e.id === itemData.id) {
    //     const payload = {
    //       ...e,
    //       quantity: e.quantity + 1,
    //     };
    //     dispatch({type: 'ADD_TO_CART', value: payload});
    //   } else {
    //     const payload = {
    //       id: itemData.id,
    //       title: itemData.name,
    //       price: itemData.price,
    //       image: itemData.galleries[0].url,
    //       quantity: 1,
    //     };
    //     dispatch({type: 'ADD_TO_CART', value: payload});
    //   }
    // });
    if (cartReducer.cart.length > 0) {
      cartReducer?.cart?.map((e, i) => {
        if (e.id === itemData.id) {
          const payload = {
            ...e,
            quantity: e.quantity + 1,
          };
          dispatch({type: 'ADD_TO_CART', value: payload});
        }
      });
      return;
    }
    if (cartReducer.cart.length === 0) {
      const payload = {
        id: itemData.id,
        title: itemData.name,
        price: itemData.price,
        image: itemData.galleries[0].url,
        quantity: 1,
      };
      dispatch({type: 'ADD_TO_CART', value: payload});
      // axios.post(`${API.base_url}api/checkout`);
      return;
    }
    return;
  };

  return (
    <>
      <View style={styles.page}>
        <Pressable onPress={() => setModalVisible(!modalVisible)}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Pressable
                  onPress={() => setModalVisible(!modalVisible)}
                  style={{position: 'absolute', top: 30, left: 30}}>
                  <IconCloseX />
                </Pressable>
                <IconCheck />
                <Text style={styles.modalText}>Hurray :)</Text>
                <Text style={styles.modalTextSub}>Item added successfully</Text>
                <Pressable
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    navigation.push('MainApp', {screen: 'Cart'});
                  }}
                  style={[styles.button, styles.buttonClose]}>
                  <Text style={styles.textStyle}>View My Cart</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </Pressable>
        <View style={styles.containerImage}>
          <View style={[styles.row, styles.header]}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[styles.buttonHeader, {marginLeft: 20}]}>
              <IconBackBlack />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonHeader, {marginRight: 20}]}>
              <IconCartBlack />
            </TouchableOpacity>
          </View>

          <FlatList
            onViewableItemsChanged={onViewableItemsChanged}
            data={itemData.galleries}
            keyExtractor={_ => _.id.toString()}
            horizontal
            pagingEnabled
            renderItem={({item}) => (
              <View style={styles.wrapperImage}>
                <Image style={styles.image} source={{uri: item.url}} />
              </View>
            )}
          />
          <View style={styles.containerDot}>
            {itemData.galleries.map((item, index) => {
              return (
                <View
                  key={item.id.toString()}
                  style={currentSlide === index ? styles.dotActive : styles.dot}
                />
              );
            })}
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.row}>
            <View>
              <Text style={styles.titleText}>{itemData.name}</Text>
              <Text style={styles.categoryText}>{itemData.category.name}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setIsClicked(!isClicked);
                if (isClicked) {
                  showMessage({
                    message: 'Has been removed from the Whislist!',
                  });
                } else {
                  showMessage({
                    message: 'Has been added to the Whislist!',
                    type: 'success',
                  });
                }
              }}
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
            <Text style={styles.price}>${itemData.price}</Text>
          </View>
          <Gap height={30} />
          <Text style={styles.desc}>Description</Text>
          <Gap height={12} />
          <Text style={styles.textDesc}>{itemData.description}</Text>

          <View style={styles.position}>
            <Text style={styles.desc}>Fimiliar Shoes</Text>
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.containerShoes}>
                  {data.map(item => {
                    console.log(item.galleries);
                    if (itemData.category.name === item.category.name) {
                      return (
                        <Pressable
                          key={item.id.toString()}
                          onPress={() =>
                            navigation.navigate('DetailProduct', {item})
                          }>
                          <Image
                            source={{uri: item.galleries[0].url}}
                            style={styles.shoesFimiliar}
                          />
                        </Pressable>
                      );
                    }
                  })}
                </View>
              </ScrollView>
            </View>
            <Gap height={30} />
            <View style={styles.row}>
              <Pressable style={styles.buttonLiveChat}>
                <IconLiveChat />
              </Pressable>
              <TouchableOpacity
                onPress={() => onCart()}
                style={styles.buttonAdd}>
                <Text style={styles.textButton}>Add To Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default DetailProduct;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#999',
  },
  containerImage: {
    width,
    height: 350,
    backgroundColor: '#fff',
  },
  image: {width, height: 350},
  // wrapperImage: {
  //   backgroundColor: 'red',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'absolute',
  // },
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
    position: 'absolute',
    width,
    top: 50,
    zIndex: 999,
  },
  containerDot: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: 50,
    width: width / 8,
    justifyContent: 'space-between',
  },
  dotActive: {
    width: 16,
    height: 4,
    borderRadius: 10,
    backgroundColor: '#6C5ECF',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 10,
    backgroundColor: '#C4C4C4',
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(31, 29, 43, 0.8)',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height,
    zIndex: 1000,
  },
  modalView: {
    marginHorizontal: 30,
    backgroundColor: '#242231',
    borderRadius: 20,
    padding: 30,
    paddingBottom: 20,
    alignItems: 'center',
    zIndex: 999,
    width: 315,
    height: 286,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  buttonClose: {
    backgroundColor: '#6C5ECF',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#F1F0F2',
  },
  modalText: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#F1F0F2',
    marginVertical: 12,
  },
  modalTextSub: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#999',
    marginBottom: 20,
  },
});
