import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import NativeAnimationScreen from './src/screens/NativeAnimationScreen/NativeAnimationScreen';
import ReanimatedAnimationScreen from './src/screens/ReanimatedAnimationScreen/ReanimatedAnimationScreen';
import {
  REANIMATED_ANIMATION_SCREEN,
  NATIVE_ANIMATION_SCREEN,
} from './src/components/layouts/ScreenContainer/ScreenContainer';

const App = () => {
  const [screen, setScreen] = useState(REANIMATED_ANIMATION_SCREEN);
  const components = {
    [NATIVE_ANIMATION_SCREEN]: NativeAnimationScreen,
    [REANIMATED_ANIMATION_SCREEN]: ReanimatedAnimationScreen,
  };
  const Component = components[screen];
  return (
    <SafeAreaView style={styles.container}>
      <Component onTabPress={setScreen} currentScreen={screen} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
