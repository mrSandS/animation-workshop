import React, {useRef, useState} from 'react';
import {Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import appStyles from 'styles';

const GestureHandledAnimationView = () => {
  const pos = useRef(new Animated.ValueXY()).current;
  const [isPressed, setIsPressed] = useState(false);
  const onPanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: pos.x,
          translationY: pos.y,
        },
      },
    ],
    {useNativeDriver: true},
  );
  const handleStateChange = ({nativeEvent}) => {
    if (nativeEvent.state === State.ACTIVE) {
      setIsPressed(true);
    } else if (nativeEvent.state === State.END) {
      Animated.spring(pos, {
        toValue: {x: 0, y: 0},
        useNativeDriver: true,
      }).start();
      setIsPressed(false);
    }
  };
  // useEffect(() => {
  //   setInterval(() => {
  //     new Array(10 ** 8).map((el) => el);
  //   }, 1000);
  // }, []);
  return (
    <PanGestureHandler
      onHandlerStateChange={handleStateChange}
      onGestureEvent={onPanGestureEvent}>
      <Animated.View
        style={[
          appStyles.animatedView,
          {backgroundColor: isPressed ? 'orange' : 'powderblue'},
          {
            transform: [
              {
                translateX: pos.x,
              },
              {
                translateY: pos.y,
              },
            ],
          },
        ]}
      />
    </PanGestureHandler>
  );
};

export default GestureHandledAnimationView;
