import React from 'react';
import {Button, StyleSheet} from 'react-native';

import appStyles from 'styles';

const TranslatedViewContainer = ({
  AnimatedComponent,
  onStartAnimationPress,
  animatedStyle,
}) => {
  return (
    <>
      <AnimatedComponent.View
        style={[appStyles.animatedView, styles.animatedView, animatedStyle]}
      />
      <Button title="Start animation" onPress={onStartAnimationPress} />
    </>
  );
};

export default TranslatedViewContainer;

const styles = StyleSheet.create({
  animatedView: {
    marginVertical: 25,
  },
});
