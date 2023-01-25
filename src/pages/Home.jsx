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
import React, {useCallback, useEffect, useState} from 'react';
import Header from '../components/Header';
import {DmProfile} from '../assets';
import Gap from '../components/Gap';
import Card from '../components/Card';
import Category, {titleCategory} from '../components/Category';
import ItemProduct from '../components/ItemProduct';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {getData} from '../utils/localstorage';
import axios from 'axios';
import {API} from '../config';
import showMessage from '../utils/showMessage';

const AllShoes = ({children}) => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

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
    return (
        <>
            <Text style={styles.title}>Popular Products</Text>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.carousel}>
                        {data.map(item => {
                            if (!data) {
                                return <Text>Data is empty</Text>;
                            }
                            return (
                                <Card
                                    key={item.id.toString()}
                                    img={{uri: item.galleries[0].url}}
                                    title={item.name}
                                    category={item.category.name}
                                    price={`$${item.price}`}
                                    onPress={() =>
                                        navigation.navigate('DetailProduct', {
                                            item,
                                        })
                                    }
                                />
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
            <Gap height={16} />

            <Text style={styles.title}>New Arrivals</Text>
            <Gap height={14} />
            <View style={styles.container}>
                {data.map((item, index) => {
                    if (data.length > 0) {
                        if (index + 1 <= 5) {
                            return (
                                <>
                                    <ItemProduct
                                        key={item.id.toString()}
                                        title={item.name}
                                        category={item.category.name}
                                        price={item.price}
                                        image={{uri: item.galleries[0].url}}
                                        onPress={() =>
                                            navigation.navigate(
                                                'DetailProduct',
                                                {item},
                                            )
                                        }
                                    />
                                    <Gap height={30} />
                                </>
                            );
                        }
                    }
                })}
            </View>
        </>
    );
};

const Running = ({onPress}) => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

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
    return (
        <>
            <Text style={styles.title}>For You</Text>
            <Gap height={14} />
            <View style={styles.container}>
                {data.map((item, index) => {
                    if (item.categories_id === 5) {
                        return (
                            <>
                                <ItemProduct
                                    key={item.id.toString()}
                                    title={item.name}
                                    category={item.category.name}
                                    price={item.price}
                                    image={{uri: item.galleries[0].url}}
                                    onPress={() =>
                                        navigation.navigate('DetailProduct', {
                                            item,
                                        })
                                    }
                                />
                                <Gap height={30} />
                            </>
                        );
                    }
                })}
            </View>
        </>
    );
};
const Training = ({onPress}) => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

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
    return (
        <>
            <Text style={styles.title}>For You</Text>
            <Gap height={14} />
            <View style={styles.container}>
                {data.map((item, index) => {
                    if (item.categories_id === 4) {
                        return (
                            <>
                                <ItemProduct
                                    key={item.id.toString()}
                                    title={item.name}
                                    category={item.category.name}
                                    price={item.price}
                                    image={{uri: item.galleries[0].url}}
                                    onPress={() =>
                                        navigation.navigate('DetailProduct', {
                                            item,
                                        })
                                    }
                                />
                                <Gap height={30} />
                            </>
                        );
                    }
                })}
            </View>
        </>
    );
};
const Basketball = ({onPress}) => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

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
    return (
        <>
            <Text style={styles.title}>For You</Text>
            <Gap height={14} />
            <View style={styles.container}>
                {data.map((item, index) => {
                    if (item.categories_id === 3) {
                        return (
                            <>
                                <ItemProduct
                                    key={item.id.toString() + index}
                                    title={item.name}
                                    category={item.category.name}
                                    price={item.price}
                                    image={{uri: item.galleries[0].url}}
                                    onPress={() =>
                                        navigation.navigate('DetailProduct', {
                                            item,
                                        })
                                    }
                                />
                                <Gap height={30} />
                            </>
                        );
                    }
                })}
            </View>
        </>
    );
};
const Hiking = ({onPress}) => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

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
    return (
        <>
            <Text style={styles.title}>For You</Text>
            <Gap height={14} />
            <View style={styles.container}>
                {data.map((item, index) => {
                    if (item.categories_id === 2) {
                        return (
                            <>
                                <ItemProduct
                                    key={item.id.toString() + index}
                                    title={item.name}
                                    category={item.category.name}
                                    price={item.price}
                                    image={{uri: item.galleries[0].url}}
                                    onPress={() =>
                                        navigation.navigate('DetailProduct', {
                                            item,
                                        })
                                    }
                                />
                                <Gap height={30} />
                            </>
                        );
                    }
                })}
            </View>
        </>
    );
};

const Home = ({navigation}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [user, setUser] = useState({});

    useFocusEffect(
        useCallback(() => {
            getData('userProfile').then(res => {
                setUser(res.user);
            });
        }, []),
    );

    const renderData = () => {
        switch (currentIndex) {
            case 0:
                return <AllShoes />;
            case 1:
                return (
                    <Running
                        onPress={() => navigation.navigate('DetailProduct')}
                    />
                );
            case 2:
                return (
                    <Training
                        onPress={() => navigation.navigate('DetailProduct')}
                    />
                );
            case 3:
                return (
                    <Basketball
                        onPress={() => navigation.navigate('DetailProduct')}
                    />
                );
            case 4:
                return (
                    <Hiking
                        onPress={() => navigation.navigate('DetailProduct')}
                    />
                );

            default:
                return <View />;
        }
    };

    return (
        <SafeAreaView style={styles.page}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />
            <ScrollView
                contentContainerStyle={styles.scroll}
                showsVerticalScrollIndicator={false}>
                <Gap height={Platform.OS === 'ios' ? 20 : 50} />
                <View style={styles.container}>
                    <Header
                        title={`Halo, ${user.name}`}
                        desc={`@${user.username}`}>
                        {/* <DmProfile /> */}
                        {user.profile_photo_url === null ? (
                            <DmProfile />
                        ) : (
                            <Image
                                source={{uri: user.profile_photo_url}}
                                style={styles.profile}
                            />
                        )}
                    </Header>
                </View>
                <Gap height={30} />
                <View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}>
                        <View style={styles.tab}>
                            {titleCategory.map((item, index) => (
                                <Category
                                    onPress={() => setCurrentIndex(index)}
                                    key={item.id.toString()}
                                    title={item.name}
                                    bg={
                                        index === currentIndex
                                            ? '#6C5ECF'
                                            : 'transparent'
                                    }
                                    brcr={
                                        index === currentIndex
                                            ? '#6C5ECF'
                                            : '#302F37'
                                    }
                                    cr={
                                        index === currentIndex
                                            ? '#F1F0F2'
                                            : '#504F5E'
                                    }
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
