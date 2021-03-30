import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import Layout from 'components/layouts/FadingViewContainer/FadingViewContainer';

const FadingAnimationView = () => {
  const opacity = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: withSpring(opacity.value),
    };
  });
  const fadeIn = () => {
    opacity.value = 1;
  };
  const fadeOut = () => {
    opacity.value = 0;
  };
  return (
    <Layout
      AnimatedComponent={Animated}
      onFadeInPress={fadeIn}
      onFadeOutPress={fadeOut}
      animatedStyle={animatedStyles}
    />
  );
};

export default FadingAnimationView;
