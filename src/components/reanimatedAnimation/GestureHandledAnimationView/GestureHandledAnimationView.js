import React from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withTiming,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

import appStyles from 'styles';

const GestureHandledAnimationView = () => {
  const startingPosition = 0;
  const x = useSharedValue(startingPosition);
  const y = useSharedValue(startingPosition);
  const pressed = useSharedValue(false);

  const uas = useAnimatedStyle(() => {
    return {
      backgroundColor: pressed.value ? 'orange' : 'powderblue',
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });

  const eventHandler = useAnimatedGestureHandler({
    onStart: () => {
      pressed.value = true;
    },
    onActive: (event) => {
      x.value = startingPosition + event.translationX;
      y.value = startingPosition + event.translationY;
    },
    onEnd: () => {
      pressed.value = false;
      x.value = withTiming(startingPosition);
      y.value = withTiming(startingPosition);
    },
  });
  return (
    <PanGestureHandler onGestureEvent={eventHandler}>
      <Animated.View style={[appStyles.animatedView, uas]} />
    </PanGestureHandler>
  );
};

export default GestureHandledAnimationView;
