import React, {useRef, useState, useEffect} from 'react';
import {Animated, Text} from 'react-native';

import appStyles from 'styles';
import Layout from 'components/layouts/BouncingViewContainer/BouncingViewContainer';

const ProgressText = ({animatedValue, initialValue}) => {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    const id = animatedValue.addListener((pos) => {
      setValue(Math.round(pos.value));
    });
    return () => animatedValue.removeListener(id);
  }, []);
  return <Text style={appStyles.bouncingViewText}>{value}</Text>;
};

const BouncingAnimationView = () => {
  const translateX = useRef(new Animated.Value(-100)).current;
  const scaleX = translateX.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: [1, 0.75, 1],
  });
  const startAnimation = () => {
    const options = {
      mass: 5,
      damping: 100,
      useNativeDriver: true,
    };
    Animated.loop(
      Animated.sequence([
        Animated.spring(translateX, {
          toValue: 100,
          ...options,
        }),
        Animated.spring(translateX, {
          toValue: -100,
          ...options,
        }),
      ]),
      {iterations: 10},
    ).start();
  };
  const stopAnimation = () => {
    translateX.stopAnimation();
  };
  return (
    <Layout
      onStartAnimation={startAnimation}
      onStopAnimation={stopAnimation}
      AnimatedComponent={Animated}
      animatedStyle={{
        transform: [{translateX}, {scaleX}],
      }}
      TextComponent={
        <ProgressText animatedValue={translateX} initialValue={-100} />
      }
    />
  );
};

export default BouncingAnimationView;
