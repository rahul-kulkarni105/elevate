import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';

export default class TermsOfUseScreen extends React.Component {
  render() {
    const { style } = this.props;

    return (
      <View style={style}>
        <Text>TermsOfUseScreen</Text>
      </View>
    )
  }
}