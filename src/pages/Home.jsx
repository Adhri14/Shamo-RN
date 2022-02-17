import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import {DmProfile, Shoes1, Shoes2, Shoes3} from '../assets';
import Gap from '../components/Gap';
import Card from '../components/Card';
import Category, {titleCategory} from '../components/Category';
import ItemProduct from '../components/ItemProduct';
import {useRoute} from '@react-navigation/native';
import Users from '../model/User.json';

const AllShoes = ({onPress}) => {
  return (
    <>
      <Text style={styles.title}>Popular Products</Text>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.carousel}>
            <Card
              img={Shoes1}
              title="COURT VISION 2.0"
              category="Hiking"
              price="$58,67"
              onPress={onPress}
            />
            <Card
              img={Shoes1}
              title="TERREX URBAN LOW"
              category="Hiking"
              price="$143,98"
            />
            <Card
              img={Shoes3}
              title="SL 20 SHOES"
              category="Running"
              price="$123,82"
            />
          </View>
        </ScrollView>
      </View>
      <Gap height={16} />
      <Text style={styles.title}>New Arrivals</Text>
      <Gap height={14} />
      <View style={styles.container}>
        <ItemProduct />
        <Gap height={30} />
        <ItemProduct />
        <Gap height={30} />
        <ItemProduct />
        <Gap height={30} />
        <ItemProduct />
        <Gap height={30} />
      </View>
    </>
  );
};

const Running = ({onPress}) => {
  return (
    <>
      <Text style={styles.title}>For You</Text>
      <Gap height={14} />
      <View style={styles.container}>
        <ItemProduct onPress={onPress} />
        <Gap height={30} />
        <ItemProduct />
        <Gap height={30} />
        <ItemProduct />
        <Gap height={30} />
        <ItemProduct />
        <Gap height={30} />
        <ItemProduct />
        <Gap height={30} />
      </View>
    </>
  );
};
const Training = ({onPress}) => {
  return (
    <>
      <Text style={styles.title}>For You</Text>
      <Gap height={14} />
      <View style={styles.container}>
        <ItemProduct onPress={onPress} />
        <Gap height={30} />
        <ItemProduct />
        <Gap height={30} />
        <ItemProduct />
        <Gap height={30} />
        <ItemProduct />
        <Gap height={30} />
        <ItemProduct />
        <Gap height={30} />
      </View>
    </>
  );
};
const Basketball = ({onPress}) => {
  return (
    <>
      <Text style={styles.title}>For You</Text>
      <Gap height={14} />
      <View style={styles.container}>
        <ItemProduct />
        <Gap height={30} />
        <ItemProduct />
        <Gap height={30} />
        <ItemProduct />
        <Gap height={30} />
        <ItemProduct />
        <Gap height={30} />
        <ItemProduct />
        <Gap height={30} />
      </View>
    </>
  );
};
const Hiking = ({onPress}) => {
  return (
    <>
      <Text style={styles.title}>For You</Text>
      <Gap height={14} />
      <View style={styles.container}>
        <ItemProduct onPress={onPress} />
        <Gap height={30} />
        <ItemProduct />
        <Gap height={30} />
        <ItemProduct />
        <Gap height={30} />
        <ItemProduct />
        <Gap height={30} />
        <ItemProduct />
        <Gap height={30} />
      </View>
    </>
  );
};

const Home = ({navigation}) => {
  const route = useRoute();
  const {token} = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [user, setUser] = useState({});

  useEffect(() => {
    Users.Users.filter(item => {
      if (item.token === token) {
        setUser(item);
      }
    });
  }, []);

  console.log(user);

  const renderData = () => {
    switch (currentIndex) {
      case 0:
        return (
          <AllShoes onPress={() => navigation.navigate('DetailProduct')} />
        );
      case 1:
        return <Running onPress={() => navigation.navigate('DetailProduct')} />;
      case 2:
        return (
          <Training onPress={() => navigation.navigate('DetailProduct')} />
        );
      case 3:
        return (
          <Basketball onPress={() => navigation.navigate('DetailProduct')} />
        );
      case 4:
        return <Hiking onPress={() => navigation.navigate('DetailProduct')} />;

      default:
        return <View />;
    }
  };

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar barStyle="light-content" backgroundColor="#1F1D2B" />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <Gap height={20} />
        <View style={styles.container}>
          <Header title={`Halo, ${user.fullname}`} desc={`@${user.username}`}>
            {user.profile === '' ? (
              <DmProfile />
            ) : (
              <Image source={{uri: user.profile}} style={styles.profile} />
            )}
          </Header>
        </View>
        <Gap height={30} />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.tab}>
              {titleCategory.map((item, index) => (
                <Category
                  onPress={() => setCurrentIndex(index)}
                  key={item.id.toString()}
                  title={item.name}
                  bg={index === currentIndex ? '#6C5ECF' : 'transparent'}
                  brcr={index === currentIndex ? '#6C5ECF' : '#302F37'}
                  cr={index === currentIndex ? '#F1F0F2' : '#504F5E'}
                />
              ))}
            </View>
          </ScrollView>
        </View>
        <Gap height={30} />
        {renderData()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  container: {
    paddingHorizontal: 30,
  },
  scroll: {
    flexGrow: 1,
    paddingBottom: Platform.OS === 'ios' ? 60 : 90,
  },
  carousel: {
    paddingVertical: 14,
    marginLeft: 30,
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    color: '#F1F0F2',
    marginHorizontal: 30,
  },
  tab: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 14,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
});
