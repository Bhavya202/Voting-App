import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import StartScreen from './screens/StartScreen';
import VoteScreen from './screens/VoteScreen';
import EndScreen from './screens/EndScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  StartScreen: StartScreen,
  VoteScreen: VoteScreen,
  EndScreen: EndScreen
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    background: 'linear-gradient(to top, #1fa2ff, #12d8fa, #a6ffcb)',
    backgroundSize: 'cover',
    paddingBottom: 100,
  },
});
