import React,{Component} from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView,TextInput,TouchableOpacity, Alert,Modal, ScrollView} from 'react-native';
import firebase from "firebase"
import db from "../Config"
import Myheader from "../Components/Myheader"
export default class Settingscreen extends Component{
    constructor(){
        super();
        this.state={
            emailid:"",
            firstname:"",
            lastname:"",
            address:"",
            contact:"",
            docid:"",
        }
    }
    GetUserDetails=()=>{
        var email=firebase.auth().currentUser.email;
        db.collection("users").where("emailid","==",email).get().then(snapshot=>{
            snapshot.forEach(doc=>{
                var data=doc.data();
                this.setState({emailid:data.emailid,firstname:data.firstname,lastname:data.lastname,address:data.address,contact:data.contact,docid:doc.id})
            })
        })
    }
    Updatedetails=()=>{
        db.collection("users").doc(this.state.docid).update({
            firstname:this.state.firstname, lastname:this.state.lastname, address:this.state.address,contact:this.state.contact
        })
    }
    componentDidMount(){
        this.GetUserDetails()
    }
    render(){
        return(
            <View style={styles.container}>
            <Myheader title="Settings" navigation ={this.props.navigation}
            />
            <View style={styles.formContainer}>
            <TextInput style={styles.formTextInput}
            placeholder={"firstname"}
            maxLength={8}
            onChangeText={(text)=>{
                this.setState({firstname:text})
            }}
            value={this.state.firstname}
            />
             <TextInput style={styles.formTextInput}
            placeholder={"lastname"}
            maxLength={8}
            onChangeText={(text)=>{
                this.setState({lastname:text})
            }}
            value={this.state.lastname}
            />
             <TextInput style={styles.formTextInput}
            placeholder={"contact"}
            keyboardType={"numeric"}
            maxLength={10}
            onChangeText={(text)=>{
                this.setState({contact:text})
            }}
            value={this.state.contact}
            />
             <TextInput style={styles.formTextInput}
            placeholder={"address"}
            multiline={true}
            onChangeText={(text)=>{
                this.setState({address:text})
            }}
            value={this.state.address}
            />
             <TouchableOpacity style={styles.button}
             onPress={()=>{
                 this.Updatedetails()
             }}>
                 <Text style={styles.buttonText}>Save</Text>
             </TouchableOpacity>
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({ 
container : { flex:1, alignItems: 'center', justifyContent: 'center' }, 
formContainer:{ flex:1, width:'100%', alignItems: 'center' },
 formTextInput:{ width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:10, },
  button:{ width:"75%", height:50, justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:"#ff5722", shadowColor: "#000", 
  shadowOffset: { width: 0, height: 8, },
 shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16, marginTop:20 },
  buttonText:{ fontSize:25, fontWeight:"bold", color:"#fff" } })