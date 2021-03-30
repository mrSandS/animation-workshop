import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from 'components/layouts/Button/Button';

const ButtonsGroup = ({
  leftButtonTitle,
  rightButtonTitle,
  onLeftButtonPress,
  onRightButtonPress,
}) => (
  <View style={styles.container}>
    <Button title={leftButtonTitle} onPress={onLeftButtonPress} />
    <Button title={rightButtonTitle} onPress={onRightButtonPress} />
  </View>
);

export default ButtonsGroup;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
  },
});
