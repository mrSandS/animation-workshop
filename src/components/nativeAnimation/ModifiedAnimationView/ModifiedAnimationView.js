import React, {useRef} from 'react';
import {Animated} from 'react-native';

import Layout from 'components/layouts/TranslatedViewContainer/TranslatedViewContainer';

const ModifiedAnimationView = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const startAnimation = () => {
    Animated.sequence([
      Animated.spring(opacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.spring(translateX, {
        toValue: 100,
        useNativeDriver: true,
      }),
      Animated.delay(300),
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
      }),
      Animated.spring(opacity, {
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  };
  return (
    <Layout
      AnimatedComponent={Animated}
      onStartAnimationPress={startAnimation}
      animatedStyle={{opacity, transform: [{translateX}]}}
    />
  );
};

export default ModifiedAnimationView;
