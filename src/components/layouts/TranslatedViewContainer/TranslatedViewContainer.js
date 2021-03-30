import React from 'react';
import {StyleSheet} from 'react-native';

import appStyles from 'styles';
import Button from 'components/layouts/Button/Button';

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
