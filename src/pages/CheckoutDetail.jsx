import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderBack from '../components/HeaderBack';
import ItemListCart from '../components/ItemListCart';
import {IconAddress, IconLine, IconLocation} from '../assets';
import Gap from '../components/Gap';
import Button from '../components/Button';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios';
import {API} from '../config';
import showMessage from '../utils/showMessage';
import {useDispatch} from 'react-redux';
import {getData} from '../utils/localstorage';

const CheckoutDetail = ({navigation}) => {
    const {cartReducer} = useSelector(state => state);
    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [shippingPrice, setShippingPrice] = useState(100);
    const [dataItems, setDataItems] = useState([]);
    const [token, setToken] = useState('');

    useEffect(() => {
        let newData = [];
        cartReducer.cart.map(item => {
            return newData.push({id: item.id, quantity: item.quantity});
        });
        getData('token').then(res => setToken(res.token));
        setDataItems(newData);
        sumProduct();
    }, [isFocused]);

    const sumProduct = () => {
        const totalItem = cartReducer.cart.reduce((prev, itemData) => {
            return prev + itemData.quantity;
        }, 0);
        const totalAllPrice = cartReducer.cart.reduce((prev, itemData) => {
            return prev + itemData.quantity * itemData.price;
        }, 0);
        setTotalItems(totalItem);
        setTotalPrice(totalAllPrice);
    };

    const onCheckout = () => {
        const data = {
            address: 'Jl. Bau Baharuddin',
            items: dataItems,
            status: 'PENDING',
            total_price: totalPrice,
            shipping_price: shippingPrice,
        };

        axios
            .post(`${API.base_url}api/checkout`, data, {
                headers: {Authorization: token},
            })
            .then(res => {
                navigation.replace('CheckoutSuccess');
                dispatch({type: 'CLEAR_CART'});
            })
            .catch(err => {
                showMessage({message: err.message});
            });
    };

    return (
        <View style={styles.page}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />
            <HeaderBack
                title="Checkout Details"
                onPress={() => navigation.goBack()}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.container}>
                    <Text style={styles.title}>List Items</Text>
                    {cartReducer.cart.map(item => (
                        <ItemListCart
                            type="checkout-detail"
                            title={item.title}
                            price={`$${item.price}`}
                            totalItem={item.quantity}
                            img={{uri: item.image}}
                        />
                    ))}
                    <Gap height={10} />
                    <View>
                        <View style={styles.content}>
                            <Text style={styles.title}>Address Detail</Text>
                            <View>
                                <View style={styles.rowPin}>
                                    <View style={styles.circle}>
                                        <IconAddress />
                                    </View>
                                    <View>
                                        <Text style={styles.titlePin}>
                                            Store Location
                                        </Text>
                                        <Text style={styles.subtitlePin}>
                                            Adidas Core
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.lineHorizontal}>
                                    <IconLine />
                                </View>
                                <View style={styles.rowPin}>
                                    <View style={styles.circle}>
                                        <IconLocation />
                                    </View>
                                    <View>
                                        <Text style={styles.titlePin}>
                                            Your Addres
                                        </Text>
                                        <Text style={styles.subtitlePin}>
                                            Jl. Bau Baharuddin
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Gap height={30} />
                    <View>
                        <View style={styles.content}>
                            <Text style={styles.title}>Payment Summary</Text>

                            <View style={styles.rowItem}>
                                <Text style={styles.key}>Product Quantity</Text>
                                <Text style={styles.value}>
                                    {totalItems} Items
                                </Text>
                            </View>
                            <View style={styles.rowItem}>
                                <Text style={styles.key}>Product Price</Text>
                                <Text style={styles.value}>${totalPrice}</Text>
                            </View>
                            <View style={styles.rowItem}>
                                <Text style={styles.key}>Shipping</Text>
                                <Text style={styles.value}>
                                    ${shippingPrice}
                                </Text>
                            </View>
                            <View style={styles.line} />
                            <View style={styles.rowItemTotal}>
                                <Text style={styles.total}>Total</Text>
                                <Text style={styles.total}>${totalPrice}</Text>
                            </View>
                        </View>
                    </View>
                    <Gap height={30} />
                    <View style={styles.line} />
                    <Gap height={30} />
                    <Button title="Checkout Now" onPress={onCheckout} />
                </View>
            </ScrollView>
        </View>
    );
};

export default CheckoutDetail;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#1F1D2B',
    },
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#242231',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: '#F1F0F2',
        marginBottom: 12,
    },
    content: {
        borderRadius: 12,
        padding: 20,
        backgroundColor: '#252836',
    },
    rowPin: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        backgroundColor: '#2F3344',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    lineHorizontal: {
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titlePin: {
        fontSize: 12,
        fontFamily: 'Poppins-Light',
        color: '#999',
    },
    subtitlePin: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: '#F1F0F2',
    },
    rowItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    rowItemTotal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    key: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: '#999',
    },
    value: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: '#F1F0F2',
    },
    line: {
        height: 1,
        backgroundColor: '#2E3141',
    },
    total: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: '#2C96F1',
    },
});
