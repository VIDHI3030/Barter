import React, { Component } from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image, TextInput,KeyboardAvoidingView,ToastAndroid,Alert} from 'react-native';
import db from '../config';
import BookSanta from '../components/booksanta'
import firebase from 'firebase';
export default class LogIn extends Component {
    constructor(){
        super();
        this.state={email:'',password:''}
    }
    logIn=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password).then((response)=>{
            return Alert.alert("User LogIned Successfully");
        })
        .catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }
    signUp=(email,password,confirmPassword)=>{
        if(password!=confirmPassword){
            return Alert.alert("Password does not match")
        } else{
            firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
                db.collection('users').add({
                    'firstName':this.state.firstName,
                     'LastName':this.state.LastName,
                     'contact':this.state.contact,
                     'email':this.state.email,
                     'adress':this.state.adress
                })
                return Alert.alert("User Added Successfully",'',[{text:'okay',onPress:()=>({isModelVisible:false})}]);
            })
            .catch(function(error){
                var errorCode=error.code;
                var errorMessage=error.message;
                return Alert.alert(errorMessage)
            }) 
        }
    }
    showModal=()=>{
        return(
            <Modal animationType="fade" transparent={true} visible={this.state.isModelVisible}>
                <View style={styles.modalContainer}>
                    <ScrollView style={{width:'100%'}}>
                        <KeyboardAvoidingView style={styles.keyView}>
                            <Text style={styles.modalTitle}>
                                Registration
                            </Text>
                            <TextInput style={styles.ti} placeholder={"first name"} maxLength={10}
                             onChangeText={(text)=>{this.setState({firstName:text})}}></TextInput>
                            <TextInput style={styles.ti} placeholder={"last name"} maxLength={10}
                             onChangeText={(text)=>{this.setState({LastName:text})}}></TextInput>
                            <TextInput style={styles.ti} placeholder={"contact"} maxLength={10}
                             onChangeText={(text)=>{this.setState({contact:text})}}></TextInput>
                            <TextInput style={styles.ti} placeholder={"adress"} multiline={true}
                             onChangeText={(text)=>{this.setState({adress:text})}}></TextInput>
                            <TextInput style={styles.ti} placeholder={"email"} keyboardType={'email-address'}
                             onChangeText={(text)=>{this.setState({email:text})}}></TextInput>           
                            <TextInput style={styles.ti} placeholder={"password"} secureTextEntry={true}
                             onChangeText={(text)=>{this.setState({password:text})}}></TextInput>  
                            <TextInput style={styles.ti} placeholder={"confirmPassword"} secureTextEntry={true}
                             onChangeText={(text)=>{this.setState({confirmPassword:text})}}></TextInput>           
                            <View>
                                <TouchableOpacity style={styles.rb}
                                onPress={()=>{this.signUp(this.state.email,this.state.password,this.state.confirmPassword)}}>
                                    <Text style={styles.buttonText}>register</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.rb}
                                onPress={()=>{this.setState({isModelVisible:false})}}>
                                    <Text style={styles.buttonText} >cancel button</Text>
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
                    <BookSanta/>
            <Text style={styles.title}> Barter </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TextInput style={styles.loginBox} placeholder="abc@example.com" keyboardType='email-address'
                    onChangeText={(text)=>{this.setState({email:text})}}/>
                     <TextInput style={styles.loginBox} placeholder="enter password" secureTextEntry={true}
                    onChangeText={(text)=>{this.setState({password:text})}}/>
                    <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.logIn(this.state.email,this.state.password)}}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.signUp(this.state.email,this.state.password)}}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
          
        )
    }
}
const styles=StyleSheet.create({
    loginBox:{
        width:200,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10
    },
    buttonStyle:{
        height:30,
        width:90,
        marginTop:20,
        paddingTop:5,
        borderRadius:1,
        borderWidth:1,
    },
    container:{
        flex:1,
        backgroundColor:'#f8bef5'
    },
    profileContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:65,
        fontWeight:'bold',
        paddingBottom:30,
        color:'green'
    },
    buttonText:{
        color:'white',
        fontWeight:'200',
        fontSize:20,
    },
    buttonContainer:{alignItems:'center',flex:1},
    keyView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modalTitle:{justifyContent:'center',alignSelf:'center',fontSize:30,color:'#ff5722',margin:50},
    modalContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        marginRight:30,
        marginLeft:30,
        marginTop:80,
        marginBottom:80
    },
    ti:{
        width:'75%',
        height:35,
        alignSelf:'center',
        borderRadius:10,
        marginTop:20,
        padding:10
    },
    rb:{
        width:200,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginTop:30
    },
    
})