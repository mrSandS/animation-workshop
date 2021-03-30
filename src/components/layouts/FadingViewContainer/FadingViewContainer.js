import React from 'react';

import appStyles from 'styles';
import ButtonsGroup from 'components/layouts/ButtonsGroup/ButtonsGroup';

const FadingViewContainer = ({
  AnimatedComponent,
  onFadeInPress,
  onFadeOutPress,
  animatedStyle,
}) => {
  return (
    <>
      <AnimatedComponent.View style={[appStyles.animatedView, animatedStyle]} />
      <ButtonsGroup
        leftButtonTitle="Fade in"
        rightButtonTitle="Fade out"
        onLeftButtonPress={onFadeInPress}
        onRightButtonPress={onFadeOutPress}
      />
    </>
  );
};

export default FadingViewContainer;
