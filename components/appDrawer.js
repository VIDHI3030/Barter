import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SettingScreen from '../screens/settingScreen';
import { AppTabNavigator } from './tabNavigator'
import CustomSideBarMenu  from './SideBar';
import MyDonationScreen from '../screens/myDonationScreen';
import NotificationScreen from '../screens/notificationScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
    MyDonations:{screen:MyDonationScreen},
    Notification:{screen:NotificationScreen},
    Settings:{
        screen:SettingScreen
    }
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })