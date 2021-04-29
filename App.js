
import React from 'react';
import {createAppContainer,createSwitchNavigator } from 'react-navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { AppDrawerNavigator } from './components/appDrawer';
import {AppTabNavigator}from './components/tabNavigator';

import LogIn from './screens/logIn'

export default function App() {
  return (
    <SafeAreaProvider>
   <AppContainer/>
   </SafeAreaProvider>
  );
}
const switchNavigator=createSwitchNavigator({
  LogIn:{screen:LogIn},
  Drawer:{screen:AppDrawerNavigator},
  BottomTab:{screen:AppTabNavigator}
}) 
const AppContainer=createAppContainer(switchNavigator)
