import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

export default class UniversalApp extends Component {
  render() {
    const routes = [
      {title: 'First Scene', index: 0},
      {title: 'Second Scene', index: 1},
    ];

    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) =>
          <View style={styles.container}>
            <Text style={styles.welcome}>
              UniversalApp for all environments huuh
            </Text>
            <Text style={styles.instructions}>
              Palma
            </Text>
            <Text style={styles.instructions}>
              ohyeah
            </Text>
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});