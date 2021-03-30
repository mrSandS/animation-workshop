import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Row from 'components/layouts/ListRow/ListRow';

export const REANIMATED_ANIMATION_SCREEN = 'reanimatedAnimationScreen';
export const NATIVE_ANIMATION_SCREEN = 'nativeAnimationScreen';

const Tab = ({title, onPress, isFocused}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tabContainer}>
      <Text style={{color: isFocused ? 'orange' : 'gray'}}>{title}</Text>
    </TouchableOpacity>
  );
};

const TabBar = ({currentScreen, onTabPress}) => (
  <View style={styles.tabBarContainer}>
    <Tab
      isFocused={currentScreen === REANIMATED_ANIMATION_SCREEN}
      onPress={() => onTabPress(REANIMATED_ANIMATION_SCREEN)}
      title="Reanimated Animation"
    />
    <Tab
      isFocused={currentScreen === NATIVE_ANIMATION_SCREEN}
      onPress={() => onTabPress(NATIVE_ANIMATION_SCREEN)}
      title="Native Animation"
    />
  </View>
);

const ScreenContainer = ({
  navbarTitle,
  navbarColor,
  FadingAnimationView,
  ModifiedAnimationView,
  GestureHandledAnimationView,
  BouncingAnimationView,
  currentScreen,
  onTabPress,
}) => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={[styles.navbar, {backgroundColor: navbarColor}]}>
          {navbarTitle}
        </Text>
        <Row title="Fading animation">
          <FadingAnimationView />
        </Row>
        <Row title="Modified animation">
          <ModifiedAnimationView />
        </Row>
        <Row title="Progress animation view">
          <BouncingAnimationView />
        </Row>
        <Row title="Gesture handled animation">
          <GestureHandledAnimationView />
        </Row>
      </ScrollView>
      <TabBar {...{currentScreen, onTabPress}} />
    </>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  navbar: {
    paddingVertical: 25,
    alignSelf: 'stretch',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  tabBarContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 75,
  },
  tabContainer: {alignItems: 'center', justifyContent: 'center', flex: 1},
});
