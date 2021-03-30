import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({title, ...props}) => (
  <TouchableOpacity style={styles.container} {...props}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 6,
    paddingHorizontal: 8,
    minWidth: 80,
    minHeight: 35,
    backgroundColor: 'dodgerblue',
    borderRadius: 6,
  },
  text: {color: 'white', fontWeight: 'bold'},
});
