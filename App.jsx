import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet
} from 'react-native';
import Home from './scenes/Home';

export default class Expenses extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{
          component: Home,
          title: 'Expenses'
        }}
        style={styles.container}
        renderScene={(route, navigator) => <route.component title={route.title} navigator={navigator} />}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
