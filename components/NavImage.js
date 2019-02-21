
import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';

const remote = 'https://goo.gl/images/287n9L';

const styles = StyleSheet.create({
  navBarImage: {
    height: 175,
    width: 375,
    resizeMode: 'contain',
  }
});

export default class NavImage extends Component {
  render() {

    return (
      <Image style={styles.navBarImage}
        source={require('../assets/images/navBar.png')}
      />
    );
  }
}
