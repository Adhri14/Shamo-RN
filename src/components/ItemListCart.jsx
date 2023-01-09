import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';
import {IconAdd, IconMin, IconTrash, Shoes4} from '../assets';

const ItemListCart = ({
    img,
    title,
    price,
    onPressAdd,
    onPressMin,
    qty = 0,
    onPressRemove,
    type,
    totalItem,
}) => {
    if (type === 'checkout-detail') {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.content}>
                        <Image source={img} style={styles.image} />
                        <View style={styles.wrapper}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.price}>{price}</Text>
                        </View>
                    </View>
                    <Text
                        style={{
                            fontSize: 12,
                            fontFamily: 'Poppins-Regular',
                            color: '#999',
                        }}>
                        {totalItem} Items
                    </Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.content}>
                    <Image
                        source={img}
                        style={[styles.image, {borderRadius: 10}]}
                    />
                    <View style={styles.wrapper}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.price}>{price}</Text>
                    </View>
                </View>
                <View style={styles.counter}>
                    <TouchableOpacity
                        onPress={onPressAdd}
                        style={styles.button}>
                        <IconAdd />
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{qty}</Text>
                    <TouchableOpacity
                        onPress={onPressMin}
                        style={styles.button}>
                        <IconMin />
                    </TouchableOpacity>
                </View>
            </View>
            <Pressable onPress={onPressRemove} style={styles.buttonTrash}>
                <IconTrash />
                <Text style={styles.textButton}>Remove</Text>
            </Pressable>
        </View>
    );
};

export default ItemListCart;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#252836',
        borderRadius: 12,
        paddingVertical: 16,
        paddingHorizontal: 12,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    wrapper: {
        marginLeft: 16,
        width: 180,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 5,
    },
    title: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        color: '#F1F0F2',
    },
    price: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#2C96F1',
        marginTop: 2,
    },
    counter: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantity: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: '#F1F0F2',
    },
    buttonTrash: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 70,
        marginTop: 12,
    },
    textButton: {
        fontSize: 12,
        fontFamily: 'Poppins-Light',
        color: '#ED6363',
        marginLeft: 4,
    },
});
