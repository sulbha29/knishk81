import React from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView,TextInput,TouchableOpacity, Alert,Modal, ScrollView} from 'react-native';
import {createDrawerNavigator} from "react-navigation-drawer";
import {AppTabNavigator} from "./Apptabnavigator";
import CustomsideBar from "./Customsidebymenu";
import Settingscreen from '../Screens/Settingscreen'
export const AppDrawerNavigator=createDrawerNavigator({
    home:{screen:AppTabNavigator},
    Setting : {
        screen : Settingscreen
      },
    
    },
   
    {contentComponent:CustomsideBar},{
        initialRouteName:"home"
})