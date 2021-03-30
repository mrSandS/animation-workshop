import React, {useRef} from 'react';
import {Animated} from 'react-native';

import Layout from 'components/layouts/FadingViewContainer/FadingViewContainer';

const ANIMATION_TIME = 300;

const FadingAnimationView = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: ANIMATION_TIME,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: ANIMATION_TIME,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Layout
      AnimatedComponent={Animated}
      onFadeInPress={fadeIn}
      onFadeOutPress={fadeOut}
      animatedStyle={{opacity: opacity}}
    />
  );
};

export default FadingAnimationView;
