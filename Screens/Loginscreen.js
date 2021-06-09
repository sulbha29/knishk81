import React,{Component} from 'react'
import { StyleSheet, Text, View, Image, KeyboardAvoidingView,TextInput,TouchableOpacity, Alert,Modal, ScrollView} from 'react-native';
import  firebase from "firebase";
import db from '../Config';
export default class Loginscreen extends Component{
    constructor(){
    super();
    this.state={emailid:"",
                password:"",
                firstname:"",
                lastname:"",
                address:"",
                contact:"",
                confirmpassword:"",
                isModalvisible:false}
    }
    login=(emailid,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailid,password).then(()=>{
            this.props.navigation.navigate("DonateBooks")
            return Alert.alert("successfully logined")
        })
        .catch(function(error){
            var Errorcode=error.code;
            var Errormessage=error.message;
             return Alert.alert(Errormessage);
        })
    }
    signup=(emailid,password,confirmpassword)=>{
        if(password!==confirmpassword){
            return Alert.alert("Password Doesn't Match")
        }
        else{
       firebase.auth().createUserWithEmailAndPassword(emailid,password).then(()=>{
           db.collection("users").add({
               firtsname:this.state.firstname,
               lastname:this.state.lastname,
               contact:this.state.contact,
               emailid:this.state.emailid,
               address:this.state.address
           })
           return Alert.alert( 'User Added Successfully', '', 
           [ {text: 'OK', onPress: () => this.setState({"isModalvisible" : false})}, ] ); }) 
           
       .catch(function(error){
           var Errorcode=error.code;
           var Errormessage=error.message;
            return Alert.alert(Errormessage);
       })
    }}
    ShowModal=()=>{
        return(
            <Modal animationType="fade" 
            transparent={true}
            visible={this.state.isModalvisible}>
                <View style={styles.modalContainer}>
                    <ScrollView style={{width:"100%"}}>
                    <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                    <Text style={styles.modalTitle}>Registration </Text>
                    <TextInput style={styles.loginBox}
                    placeholder={"FirstName"}
                    placeholderTextColor="#FFFF02"
                   maxLength={8}
                    onChangeText={(text)=>{
                        this.setState({
                    firstname:text                        
                    })
                    }}/>  <TextInput style={styles.loginBox}
                    placeholder={"Last Name"}
                    placeholderTextColor="#FFFF02"
                   maxLength={8}
                    onChangeText={(text)=>{
                        this.setState({
                    lastname:text                        
                    })
                    }}/>
                      <TextInput style={styles.loginBox}
                    placeholder={"Contact"}
                    placeholderTextColor="#FFFF02"
                   maxLength={10}
                   keyboardType={"numeric"}
                    onChangeText={(text)=>{
                        this.setState({
                    contact:text                        
                    })
                    }}/>
                      <TextInput style={styles.loginBox}
                    placeholder={"Address"}
                    placeholderTextColor="#FFFF02"
                   multiline={true}
                    onChangeText={(text)=>{
                        this.setState({
                    address:text                        
                    })
                    }}/>
                       <TextInput style={styles.loginBox}
                    placeholder="abc@gmail.com"
                    placeholderTextColor="#FFFF02"
                    keyboardType="email-address"
                    onChangeText={(text)=>{
                        this.setState({
                            emailid:text
                        })
                    }}/>
                         <TextInput style={styles.loginBox}
                    placeholder="password"
                    secureTextEntry={true}
                    placeholderTextColor="#FFFF02"
                    onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}/>
                         <TextInput style={styles.loginBox}
                    placeholder="Confirm password"
                    secureTextEntry={true}
                    placeholderTextColor="#FFFF02"
                    onChangeText={(text)=>{
                        this.setState({
                            confirmpassword:text
                        })
                    }}/>
                    <View>
                        <TouchableOpacity style={styles.registerButton} onPress={()=>{this.signup(this.state.emailid,this.state.password,this.state.confirmpassword)}}>
                        <Text style={styles.registerButtonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.cancelButton} onPress={()=>{this.setState({isModalvisible:false})}}>
                        <Text style={styles.registerButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                  </KeyboardAvoidingView>

                    </ScrollView>
                 
                </View>
            </Modal>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    {this.ShowModal()}
                    <Text style={styles.title}>BookSanta</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TextInput style={styles.loginBox}
                    placeholder="abc@gmail.com"
                    placeholderTextColor="#FFFF02"
                    keyboardType="email-address"
                    onChangeText={(text)=>{
                        this.setState({
                            emailid:text
                        })
                    }}/>
                         <TextInput style={styles.loginBox}
                    placeholder="password"
                    secureTextEntry={true}
                    placeholderTextColor="#FFFF02"
                    onChangeText={(text)=>{
                        this.setState({
                            password:text
                        })
                    }}/>
                    <TouchableOpacity style={[styles.button,{marginBottom:30,marginTop:30}]} onPress={()=>{this.login(this.state.emailid,this.state.password)}}><Text style={styles.buttonText}>Login</Text></TouchableOpacity> 
                    <TouchableOpacity style={styles.button}><Text style={styles.buttonText} onPress={()=>{this.setState({isModalvisible:true})}}>Sign up </Text></TouchableOpacity>
                    
                </View>
                <Text>Loginscreen</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({ container:{ flex:1, backgroundColor:'#F8BE85', alignItems: 'center', justifyContent: 'center' },
 profileContainer:{ flex:1, justifyContent:'center', alignItems:'center', },
  title :{ fontSize:65, fontWeight:'300', paddingBottom:30, color : '#ff3d00' },
   loginBox:{ width: 300, height: 40, borderBottomWidth: 1.5, borderColor : '#ff8a65', fontSize: 20, margin:10, paddingLeft:10 },
    KeyboardAvoidingView:{ flex:1, justifyContent:'center', alignItems:'center' },
     modalTitle :{ justifyContent:'center', alignSelf:'center', fontSize:30, color:'#ff5722', margin:50 },
      modalContainer:{ flex:1, borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:"#ffff", marginRight:30, marginLeft : 30, marginTop:80, marginBottom:80, },
      formTextInput:{ width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:10 }, registerButton:{ width:200, height:40, alignItems:'center', justifyContent:'center', borderWidth:1, borderRadius:10, marginTop:30 }, registerButtonText:{ color:'#ff5722', fontSize:15, fontWeight:'bold' }, cancelButton:{ width:200, height:30, justifyContent:'center', alignItems:'center', marginTop:5, }, button:{ width:300, height:50, justifyContent:'center', alignItems:'center', borderRadius:25, backgroundColor:"#ff9800", shadowColor: "#000", shadowOffset: { width: 0, height: 8, },
       shadowOpacity: 0.30, shadowRadius: 10.32, elevation: 16, padding: 10 },
        buttonText:{ color:'#ffff', fontWeight:'200', fontSize:20 } })


