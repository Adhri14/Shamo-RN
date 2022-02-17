import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
export const titleCategory = [
  {id: 1, name: 'All Shoes'},
  {id: 2, name: 'Running'},
  {id: 3, name: 'Training'},
  {id: 4, name: 'Basketball'},
  {id: 5, name: 'Hiking'},
];
const Category = ({onPress, title, bg, cr, brcr}) => {
  return (
    <Pressable onPress={onPress} style={styles.button(bg, brcr)}>
      <Text style={styles.textButton(cr)}>{title}</Text>
    </Pressable>
  );
};

export default Category;

const styles = StyleSheet.create({
  button: (bg, brcr) => ({
    backgroundColor: bg,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginRight: 16,
    borderWidth: 0.5,
    borderColor: brcr,
  }),
  textButton: cr => ({
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    color: cr,
  }),
});
