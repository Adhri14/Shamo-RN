import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IconLove, LoveButtonPrimary, LoveButtonSecondary} from '../assets';
import HeaderBack from '../components/HeaderBack';
import Gap from '../components/Gap';
import Button from '../components/Button';
import ItemListWhislist from '../components/ItemListWhislist';
import {useSelector} from 'react-redux';
import showMessage from '../utils/showMessage';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

const EmptyState = ({onPress}) => {
    return (
        <View style={styles.emptyState}>
            <IconLove />
            <Gap height={20} />
            <Text style={styles.title}> You don't have dream shoes?</Text>
            <Gap height={12} />
            <Text style={styles.text}>Let's find your favorite shoes</Text>
            <Gap height={20} />
            <View style={{width: 152}}>
                <Button type="btn-sm" title="Explore Store" onPress={onPress} />
            </View>
        </View>
    );
};

const Whislist = ({navigation}) => {
    const {reducerWhislist} = useSelector(state => state);
    const dispatch = useDispatch();

    const removeWhislist = itemData => {
        const newData = reducerWhislist.whislist.filter(
            item => item.id !== itemData.id,
        );
        dispatch({
            type: 'ADD_WHISLIST',
            value: newData,
        });
        showMessage({
            message: 'Has been removed from the Whislist!',
        });
    };

    return (
        <View style={styles.page}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />
            <HeaderBack title="Whislist" />
            <ScrollView
                contentContainerStyle={{flexGrow: 1}}
                showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    {!reducerWhislist.whislist.length ? (
                        <EmptyState
                            onPress={() => navigation.navigate('Home')}
                        />
                    ) : (
                        reducerWhislist.whislist.map(item => (
                            <View key={item.id}>
                                <Gap height={33} />
                                <ItemListWhislist
                                    title={item.name}
                                    price={item.price}
                                    img={{uri: item.galleries[0].url}}
                                    onPressRemove={() => removeWhislist(item)}
                                    onPress={() =>
                                        navigation.navigate('DetailProduct', {
                                            item,
                                        })
                                    }
                                />
                            </View>
                        ))
                    )}
                    {/* <EmptyState /> */}
                </View>
            </ScrollView>
        </View>
    );
};

export default Whislist;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#1F1D2B',
    },
    container: {
        flex: 1,
        backgroundColor: '#242231',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
    },
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: '#F1F0F2',
    },
    text: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#999',
    },
    iconButton: {
        width: 30,
        height: 30,
    },
});
