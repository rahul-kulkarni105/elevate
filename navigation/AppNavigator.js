import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import PlanFinderScreen from '../screens/PlanFinderScreen';
import PlanElectionsScreen from '../screens/PlanElectionsScreen';
import TermsOfUseScreen from '../screens/TermsOfUseScreen';
import PlanCopiedConfirmationScreen from '../screens/PlanCopiedConfirmationScreen';
import BeneficiaryLandingScreen from '../screens/BeneficiaryLandingScreen';
import AddBeneficiaryScreen from '../screens/AddBeneficiaryScreen';

export default createAppContainer(createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  PlanFinder: {
    screen: PlanFinderScreen,
  },
  PlanElections: {
    screen: PlanElectionsScreen,
  },
  TermsOfUse: {
    screen: TermsOfUseScreen,
  },
  PlanCopiedConfirmation: {
    screen: PlanCopiedConfirmationScreen,
  },
  BeneficiaryLanding: {
    screen: BeneficiaryLandingScreen,
  },
  AddBeneficiary: {
    screen: AddBeneficiaryScreen,
  }
}));