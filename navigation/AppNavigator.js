import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import PlanFinderScreen from '../screens/PlanFinderScreen';

export default createAppContainer(createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: 'Login',
    })
  },
  PlanFinderScreen: {
    screen: PlanFinderScreen,
    navigationOptions: () => ({
      title: 'PlanFinder',
    })
  }
}));