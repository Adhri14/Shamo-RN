import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import {IconFavorite, Shoes1, Shoes4} from '../assets';

const ItemListWhislist = ({onPress, title, img, price, onPressRemove}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={styles.row}>
                <Image source={img} style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.price}>${price}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={onPressRemove} activeOpacity={0.7}>
                <IconFavorite />
            </TouchableOpacity>
        </Pressable>
    );
};

export default ItemListWhislist;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#252836',
        borderRadius: 12,
        padding: 12,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 5,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        width: 180,
        marginLeft: 16,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: '#F1F0F2',
    },
    price: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: '#2C96F1',
    },
});
