import React,{Component} from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView,TextInput,TouchableOpacity, Alert,Modal, ScrollView,FlatList} from 'react-native';
import  firebase from "firebase";
import db from '../Config';
import {ListItem} from "react-native-elements"
import Myheader from "../Components/Myheader"
export default class Donatescreen extends  Component{
    constructor(){
        super()
        this.state={
            requestedbooklist:[]
        }
        this.requestref=null
    }
    Getrequestedbooklist=()=>{
        this.requestref=db.collection("Requested_Books").onSnapshot((snapshot)=>{
            var requestedbooklist=snapshot.docs.map(document=>document.data())
            this.setState({
                requestedbooklist:requestedbooklist
            })
        })
    }
    componentDidMount(){
        this.Getrequestedbooklist()
    }
    componentWillUnmount(){
        this.requestref()
    }
renderItem=({item,i})=>{
    return(
        <ListItem 
        key={i}
        title={item.bookname}
        subtitle={item.reason}
        titleStyle={{color:"black", fontWeight:"bold"}}
        rightElement={
            <TouchableOpacity style={styles.button}><Text style={{color:"red"}}>View</Text></TouchableOpacity>
        } 
        bottomDivider
        />
    )
}
keyExtractor=(item,index)=>index.toString()
    render(){
        return(
            <View style={{flex:1}}>
                <Myheader title="Donate Book"/>
                <View style={{flex:1}}>
                    {this.state.requestedbooklist.length==0?(<View style={styles.subContainer}><Text style={{fontSize:20}}>List of All Requested Books</Text></View>):
                    (<FlatList keyExtractor={this.keyExtractor}
                    data={this.state.requestedbooklist}
                    renderItem={this.renderItem}/>)}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({ subContainer:{ flex:1, fontSize: 20, justifyContent:'center', alignItems:'center' },
 button:{ width:100, height:30, justifyContent:'center', alignItems:'center', backgroundColor:"#ff5722", shadowColor: "#000",
  shadowOffset: { width: 0, height: 8 } } })