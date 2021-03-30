import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
  useAnimatedProps,
  withSpring,
  withRepeat,
  interpolate,
  cancelAnimation,
} from 'react-native-reanimated';
import appStyles from 'styles';

import Layout from 'components/layouts/BouncingViewContainer/BouncingViewContainer';

const AnimatedText = Animated.createAnimatedComponent(TextInput);

const BouncingAnimationView = () => {
  const translateX = useSharedValue(-100);
  const animatedStyles = useAnimatedStyle(() => {
    const scaleX = interpolate(translateX.value, [-100, 0, 100], [1, 0.75, 1]);
    return {
      transform: [{translateX: translateX.value}, {scaleX: withSpring(scaleX)}],
    };
  });
  const pos = useDerivedValue(() => {
    return Math.round(translateX.value);
  });
  const animatedProps = useAnimatedProps(() => {
    const value = String(pos.value);
    return {
      text: value,
      value,
    };
  });
  const startAnimation = () => {
    translateX.value = withRepeat(
      withSpring(100, {mass: 1, stiffness: 25}),
      10,
      true,
    );
  };
  const stopAnimation = () => cancelAnimation(translateX);

  return (
    <Layout
      animatedStyle={animatedStyles}
      AnimatedComponent={Animated}
      onStartAnimation={startAnimation}
      onStopAnimation={stopAnimation}
      TextComponent={
        <AnimatedText
          animatedProps={animatedProps}
          style={appStyles.bouncingViewText}
        />
      }
    />
  );
};

export default BouncingAnimationView;
