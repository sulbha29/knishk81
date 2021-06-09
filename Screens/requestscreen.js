import React,{Component} from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView,TextInput,TouchableOpacity, Alert,Modal, ScrollView} from 'react-native';
import  firebase from "firebase";
import db from '../Config';
import Myheader from "../Components/Myheader"
import { ThemeProvider } from 'react-native-elements';
export default class Requestscreen extends  Component{
    constructor(){
        super()
        this.state={
            userid:firebase.auth().currentUser.email,
            bookname:"",reason:""
        }
    }
    createUniquesid(){
        return Math.random().toString(36).substring(7)
    }
    AddRequest=(bookname,reason)=>{
        var userid=this.state.userid
        var randomrequestid=this.createUniquesid()
        db.collection("Requested_Books").add({
            "userid":userid,
            "bookname":bookname,
            "reason":reason,
            "requestid":randomrequestid
        })
        this.setState({
        bookname:"",reason:reason
        })
        return Alert.alert("book requested successfully")
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Myheader title="RequestBook"/>
                <KeyboardAvoidingView style={styles.keyBoardStyle}>
                    <TextInput
                    style={styles.formTextInput}
                    placeholder={"enterbookname"}
                    onChangeText={(text)=>{
                        this.setState({bookname:text})
                    }}
                    value={this.state.bookname}/>
                        <TextInput
                    style={[styles.formTextInput,{height:300}]}
                    placeholder={"Why you need the book?"}
                    multiline
                    numberOfLines={8}
                    onChangeText={(text)=>{
                        this.setState({reason:text})
                    }}
                    value={this.state.reason}/>
                    <TouchableOpacity style={styles.button} onPress={()=>{this.AddRequest(this.state.bookname,this.state.reason)}}><Text>Request</Text></TouchableOpacity>
                </KeyboardAvoidingView>
               </View>
        )
    }
}
const styles = StyleSheet.create({ keyBoardStyle : { flex:1, alignItems:'center', justifyContent:'center' },
formTextInput:{ width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:10, },
button:{ width:"75%", height:50, justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:"#ff5722", shadowColor: "#000",
shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16, marginTop:20 }, } )