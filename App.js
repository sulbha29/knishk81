import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loginscreen from './Screens/Loginscreen'
import {createAppContainer, createSwitchNavigator} from "react-navigation"
import {AppTabNavigator} from "./Components/Apptabnavigator"
import {AppDrawerNavigator} from "./Components/Appdrawnavigator"
export default function App() {
  return (
  <AppContainer/>
  );
}
const SwitchNavigator= createSwitchNavigator({
  Loginscreen:{screen:Loginscreen},
  Drawer:{screen:AppDrawerNavigator}
})
const AppContainer= createAppContainer(SwitchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
