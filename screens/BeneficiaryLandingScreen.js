import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import NavImage from '../components/NavImage';

const styles = StyleSheet.create({
	screen: {
		display: 'flex',
	},
	textInputWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
	},
	title: {
    color: '#009CA6',
    textAlign: 'center',
    width: 375,
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  subTitle: {
    textAlign: 'center',
    width: 320,
    marginTop: 20,
    color: '#434344',
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: -0.19,
    lineHeight: 23,
	},
  continueButtonWrapper: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#001871',
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#fff'
  },
  continueButton: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    lineHeight: 16,
    color:'#fff',
    textAlign:'center',
	},
	cancelButtonWrapper: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#B9C6D4'
  },
  cancelButton: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    lineHeight: 16,
		color: '#002554',
    textAlign:'center',
	},
	skipLink: {
		height: 23,
		width: 95,
		color: '#001871',
		fontSize: 18,
		fontWeight: 'bold',
		letterSpacing: -0.23,
		lineHeight: 23,
		textAlign: 'center',
		marginTop: 50,
  },
  beniGroupPlanImage: {
    width: 375,
    resizeMode: 'contain',
  }
})

export default class BeneficiaryLandingScreen extends React.Component {
  render() {
    const { style } = this.props;
    const { navigate } = this.props.navigation;

		return (
			<View style={styles.screen}>
				<NavImage />

				<View style={styles.textInputWrapper}>
					<Text style={styles.title}>Beneficiaries</Text>
					<Text style={styles.subTitle}>You don't have any beneficiaries designated to this plan yet. It's important to designate beneficiaries to make sure your assets get passed to the right recipient. Start by creating your first profile.</Text>
          <Image style={styles.beniGroupPlanImage}
            source={require('../assets/images/beniGroupPlan.png')}
          />
				</View>

				<View style={styles.continueButtonWrapper}>
					<Text
						style={styles.continueButton}
						onPress={() => navigate('AddBeneficiary')}
					>
						ADD A BENEFICIARY
					</Text>
				</View>
				<View style={styles.cancelButtonWrapper}>
					<Text
						style={styles.cancelButton}
						onPress={() => navigate('PlanElections')}
					>
						CANCEL
					</Text>
				</View>
				<View style={styles.textInputWrapper}>
					<Text
							style={styles.skipLink}
							onPress={() => navigate('Login')}
						>
							Skip for now
						</Text>
				</View>
			</View >
		);
  }
}