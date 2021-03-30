import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const Row = ({children, title}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <TouchableOpacity style={styles.row} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      {isOpen && <View style={styles.viewArea}>{children}</View>}
    </>
  );
};

export default Row;

const styles = StyleSheet.create({
  row: {
    paddingVertical: 25,
    paddingLeft: 15,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {fontSize: 16, color: '#444'},
  viewArea: {height: 500, justifyContent: 'center', alignItems: 'center'},
});
