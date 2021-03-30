import React from 'react';

import FadingAnimationView from 'components/reanimatedAnimation/FadingAnimationView/FadingAnimationView';
import ModifiedAnimationView from 'components/reanimatedAnimation/ModifiedAnimationView/ModifiedAnimationView';
import GestureHandledAnimationView from 'components/reanimatedAnimation/GestureHandledAnimationView/GestureHandledAnimationView';
import BouncingAnimationView from 'components/reanimatedAnimation/BouncingAnimationView/BouncingAnimationView';
import ScreenContainer from 'components/layouts/ScreenContainer/ScreenContainer';

const ReanimatedAnimationScreen = ({...props}) => {
  return (
    <ScreenContainer
      navbarTitle="Reanimated Animation"
      navbarColor="tomato"
      {...{
        FadingAnimationView,
        ModifiedAnimationView,
        GestureHandledAnimationView,
        BouncingAnimationView,
      }}
      {...props}
    />
  );
};

export default ReanimatedAnimationScreen;
