import React from 'react';
import { Button, Image, Text, TextInput, View, StyleSheet, navigate } from 'react-native';
// import TopNavBar from '../components/TopNavBar';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    fontSize: 16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    textAlign: 'center'
  },
  titleWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
  },
  title: {
    marginTop: 20,
    color: 'darkblue',
    textAlign: 'center',
    // height: 40,
    width: 375,
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 40,
  },
  subTitle: {
    textAlign: 'center',
    // height: 62,
    width: 320,
    color: '#434344',
    fontSize: 18,
    letterSpacing: -0.19,
    lineHeight: 26,
  },
  textInputWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    height: 56,
    width: 300,
    borderWidth: 1,
    borderColor: '#B9C6D4',
    borderStyle: 'solid',
    backgroundColor: '#FFFFFF',
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: 'darkblue',
    borderRadius: 12
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  navbar: {
    flex: 1,
    height: 20,
    // flexDirection: 'row',
    // justifyContent: 'space-evenly'
  }
});

export default class LoginScreen extends React.Component {
  _handleLoginButtonPress(event) {
      // TODO: Authenticate user
      // TODO: Handle valid or invalid authentiation correctly
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.screen}>
        {/* <TopNavBar style={styles.navbar} /> */}

        <View style={styles.titleWrapper}>
          <Text style={styles.title}>For your Security...</Text>
          <Text style={styles.subTitle}>Just give us a few details and we will get you started.</Text>
        </View>

        <View style={styles.textInputWrapper}>
          <TextInput style={styles.textInput} placeholder='Your SSN' />
          <TextInput style={styles.textInput} placeholder='First Name' />
          <TextInput style={styles.textInput} placeholder='Last Name' />
          <TextInput style={styles.textInput} placeholder='Date of Birth' />
        </View>

          {/* <Button title='Secure Log In'
            onPress={this._handleLoginButtonPress}
            style={styles.loginButton} />

        <Text style={styles.center}>Forgot
          <Text style={styles.linkText}
            onPress={() => navigate()}>
            username
          </Text> or
          <Text style={styles.linkText}
            onPress={() => navigate()}>
            password
          </Text>
        </Text> */}

        <Text
          style={styles.linkText}
          onPress={() => navigate('PlanFinder')}>
          Continue
        </Text>

        <View style={styles.imageSection}>
          {/* <Image source /> */}
        </View>
      </View >
    );
  }
}