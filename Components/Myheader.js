import React,{Component} from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView,TextInput,TouchableOpacity, Alert,Modal, ScrollView} from 'react-native';
import {Header,Icon } from "react-native-elements"
const Myheader=props=>{
    return(<Header 
        leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => props.navigation.toggleDrawer()}/>}
        centerComponenet={{text:props.title, style:{color:"red", fontWeight:"bold",fontSize:20}}}
    backgroundColor="pink"/> )
}
export default Myheader