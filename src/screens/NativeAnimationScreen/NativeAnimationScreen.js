import React from 'react';

import FadingAnimationView from 'components/nativeAnimation/FadingAnimationView/FadingAnimationView';
import ModifiedAnimationView from 'components/nativeAnimation/ModifiedAnimationView/ModifiedAnimationView';
import GestureHandledAnimationView from 'components/nativeAnimation/GestureHandledAnimationView/GestureHandledAnimationView';
import BouncingAnimationView from 'components/nativeAnimation/BouncingAnimationView/BouncingAnimationView';
import ScreenContainer from 'components/layouts/ScreenContainer/ScreenContainer';

const NativeAnimationScreen = ({...props}) => {
  return (
    <ScreenContainer
      navbarTitle="React Native Animation"
      navbarColor="lightblue"
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

export default NativeAnimationScreen;
