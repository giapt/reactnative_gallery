/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Gallery from './src/components/Gallery/Gallery';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    let images = [
      require('./src/images/1.jpg'),
      require('./src/images/2.jpg'),
      require('./src/images/3.jpg'),
      require('./src/images/4.png'),
      require('./src/images/5.jpg'),
      require('./src/images/6.jpg'),
      require('./src/images/7.jpg'),
      require('./src/images/8.jpg'),
      require('./src/images/1.jpg'),
      require('./src/images/2.jpg'),
      require('./src/images/3.jpg'),
      require('./src/images/4.png'),
      require('./src/images/5.jpg'),
      require('./src/images/6.jpg'),
      require('./src/images/7.jpg'),
      require('./src/images/8.jpg'),
      require('./src/images/1.jpg'),
      require('./src/images/2.jpg'),
      require('./src/images/3.jpg'),
      require('./src/images/4.png'),
      require('./src/images/5.jpg'),
      require('./src/images/6.jpg'),
      require('./src/images/7.jpg'),
      require('./src/images/8.jpg'),
    ];
    return (
      <Gallery 
        data={images}
      />
    );
  }
};
