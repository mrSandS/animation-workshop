import React from 'react';

import appStyles from 'styles';
import ButtonsGroup from 'components/layouts/ButtonsGroup/ButtonsGroup';

const BouncingViewContainer = ({
  AnimatedComponent,
  TextComponent,
  onStartAnimation,
  onStopAnimation,
  animatedStyle,
}) => {
  return (
    <>
      <AnimatedComponent.View style={[appStyles.animatedView, animatedStyle]} />
      {TextComponent}
      <ButtonsGroup
        leftButtonTitle="Start Animation"
        rightButtonTitle="Stop Animation"
        onLeftButtonPress={onStartAnimation}
        onRightButtonPress={onStopAnimation}
      />
    </>
  );
};

export default BouncingViewContainer;
