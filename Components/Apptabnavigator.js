import React,{Component} from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView,TextInput,TouchableOpacity, Alert,Modal, ScrollView} from 'react-native';
import {createBottomTabNavigator} from  "react-navigation-tabs"
import Donatescreen from "../Screens/Donatescreen"
import Requestscreen from "../Screens/requestscreen"

export const AppTabNavigator= createBottomTabNavigator({
    DonateBooks:{screen:Donatescreen,navigationOptions:{
        tabBarIcon:<Image source={require("../assets/request-list.png")}
        style={{width:20 ,height:30}}/>,
        tabBarLabel:"DonateBooks"
    }},
    BookRequest:{screen:Requestscreen,navigationOptions:{
        tabBarIcon:<Image source={require("../assets/request-book.png")}
        style={{width:20 ,height:30}}/>,
        tabBarLabel:"BookRequest"
    }},
})