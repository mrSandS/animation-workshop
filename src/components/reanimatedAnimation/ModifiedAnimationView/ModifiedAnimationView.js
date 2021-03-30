import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import Layout from 'components/layouts/TranslatedViewContainer/TranslatedViewContainer';

const ModifiedAnimationView = () => {
  const opacity = useSharedValue(0);
  const translateX = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });
  const onTranslateEnd = () => {
    'worklet';
    opacity.value = withTiming(0);
  };
  const onFadeInEnd = () => {
    'worklet';
    translateX.value = withRepeat(withSpring(100), 2, true, onTranslateEnd);
  };
  const startAnimation = () => {
    opacity.value = withTiming(1, {}, onFadeInEnd);
  };
  return (
    <Layout
      AnimatedComponent={Animated}
      onStartAnimationPress={startAnimation}
      animatedStyle={animatedStyles}
    />
  );
};

export default ModifiedAnimationView;
