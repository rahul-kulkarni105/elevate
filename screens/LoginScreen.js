import React from 'react';
import {
  Button,
  Image,
  Text,
  TextInput,
  View,
  StyleSheet,
  navigate,
} from 'react-native';
// import TopNavBar from '../components/TopNavBar';
import NavImage from '../components/NavImage';
import TextInput2 from '../components/TextInput2';

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    // // fontSize: 16,
    // flexDirection: 'column',
    // height: 180,
    // justifyContent: 'center',
    // alignItems: 'center',
    display: 'flex',
  },
  title: {
    // marginTop: 20,
    color: 'darkblue',
    textAlign: 'center',
    // height: 40,
    width: 375,
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 30,
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
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // height: 30,
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
  continueButtonWrapper: {
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#001871',
    borderRadius:32,
    borderWidth: 1,
    borderColor: '#fff'
  },
  continueButton: {
    // textDecorationLine: 'underline',
    // textAlign: 'center',
    // height: 56,
    // width: 285,
    // borderRadius: 32.5,
    // backgroundColor: '#001871',
    color:'#fff',
    textAlign:'center',
  },
});

export default class LoginScreen extends React.Component {

  state = {
    dateOfBirth: 'Date of Birth',
  }

  _handleLoginButtonPress(event) {
      // TODO: Authenticate user
      // TODO: Handle valid or invalid authentiation correctly
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.screen}>
        <NavImage />

        <View style={styles.textInputWrapper}>
          <Text style={styles.title}>For Your Security...</Text>
          <Text style={styles.subTitle}>Just give us a few details and we will get you started.</Text>
          <TextInput style={styles.textInput} placeholder='Your SSN' />
          <TextInput style={styles.textInput} placeholder='First Name' />
          <TextInput style={styles.textInput} placeholder='Last Name' />
          <TextInput style={styles.textInput} placeholder='Date of Birth' />
          {/* <TextInput2
            text={this.state.dateOfBirth}
            placeholderStyle={{ fontFamily: "AnotherFont", borderColor: 'red' }}
            placeholderStyle={{ fontFamily: "AnotherFont", borderColor: 'red' }}
          /> */}
        </View>

        <View style={styles.continueButtonWrapper}>
          <Text
            style={styles.continueButton}
            onPress={() => navigate('PlanFinder')}
          >
            Continue
          </Text>
        </View>

        <View style={styles.imageSection}>
          {/* <Image source /> */}
        </View>
      </View >
    );
  }
}