
import React, { Component } from 'react';
import {
  // AppRegistry,
  Image,
} from 'react-native';

const remote = 'https://goo.gl/images/287n9L';

export default class NavImage extends Component {
  render() {
    const resizeMode = 'center';

    return (
      <Image
        style={{
          flex: 1,
          height: 43,
          width: 251,
          resizeMode,
        }}
        source={{ uri: remote }}
      />
    );
  }
}

// AppRegistry.registerComponent('BackgroundImage', () => BackgroundImage);