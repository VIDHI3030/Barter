import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
    ScrollView} from 'react-native';
import db from '../config';
import firebase from 'firebase';



export default class LogInScreen extends Component{
  constructor(){
    super();
    this.state={
      emailId:'',
      password:'',
      firstName:'',
      lastName:'',
      address:'',
      contact:'',
      confirmPassword:'',
      isModalVisible:'false'
    }
  }

  userSignUp = (emailId, password,confirmPassword) =>{
   if(password !== confirmPassword){
       return Alert.alert("password doesn't match\nCheck your password.")
   }else{
     firebase.auth().createUserWithEmailAndPassword(emailId, password)
     .then(()=>{
       db.collection('users').add({
         first_name:this.state.firstName,
         last_name:this.state.lastName,
         contact:this.state.contact,
         email_id:this.state.emailId,
         address:this.state.address
       })
       return  Alert.alert(
            'User Added Successfully',
            '',
            [
              {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
            ]
        );
     })
     .catch((error)=> {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       return Alert.alert(errorMessage)
     });
   }
 }

userLogin = (emailId, password)=>{
   firebase.auth().signInWithEmailAndPassword(emailId, password)
   .then(()=>{
     this.props.navigation.navigate('DonateBooks')
   })
   .catch((error)=> {
     var errorCode = error.code;
     var errorMessage = error.message;
     return Alert.alert(errorMessage)
   })
 }

showModal = ()=>{
  return(
  <Modal
    animationType="fade"
    transparent={true}
    visible={this.state.isModalVisible}
    >
    <View style={styles.modalContainer}>
      <ScrollView style={{width:'100%'}}>
        <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
        <Text
          style={styles.modalTitle}
          >Registration</Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"First Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Last Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Contact"}
          maxLength ={10}
          keyboardType={'numeric'}
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Address"}
          multiline = {true}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Email"}
          keyboardType ={'email-address'}
          onChangeText={(text)=>{
            this.setState({
              emailId: text
            })
          }}
        /><TextInput
          style={styles.formTextInput}
          placeholder ={"Password"}
          secureTextEntry = {true}
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        /><TextInput
          style={styles.formTextInput}
          placeholder ={"Confrim Password"}
          secureTextEntry = {true}
          onChangeText={(text)=>{
            this.setState({
              confirmPassword: text
            })
          }}
        />
        <View style={styles.modalBackButton}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={()=>
              this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
            }
          >
          <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modalBackButton}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={()=>this.setState({"isModalVisible":false})}
          >
          <Text style={{color:'#ff5722'}}>Cancel</Text>
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
        <View style={{justifyContent: 'center',alignItems: 'center'}}>

        </View>
          {
            this.showModal()
          }
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Image source={require('../assets/bookSanta.jpg')} style={{width:150,height:150}}/>
          <Text style={styles.title}>Book Santa</Text>
        </View>
        <View>
            <TextInput
            style={styles.loginBox}
            placeholder="abc@example.com"
            keyboardType ='email-address'
            onChangeText={(text)=>{
              this.setState({
                emailId: text
              })
            }}
          />
          <TextInput
          style={styles.loginBox}
          secureTextEntry = {true}
          placeholder="enter Password"
          onChangeText={(text)=>{
            this.setState({
              password: text
            })
          }}
        />
        <TouchableOpacity
           style={[styles.button,{marginBottom:20, marginTop:20}]}
           onPress = {()=>{
             this.userLogin(this.state.emailId, this.state.password)
           }}
           >
           <Text style={styles.buttonText}>Login</Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.button}
           onPress={()=>this.setState({ isModalVisible:true})}
           >
           <Text style={styles.buttonText}>SignUp</Text>
         </TouchableOpacity>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'#F8BE85',
   alignItems: 'center',
   justifyContent: 'center'
 },
 profileContainer:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
 },
 title :{
   fontSize:65,
   fontWeight:'300',
   paddingBottom:30,
   color : '#ff3d00'
 },
 loginBox:{
   width: 300,
   height: 40,
   borderBottomWidth: 1.5,
   borderColor : '#ff8a65',
   fontSize: 20,
   margin:10,
   paddingLeft:10
 },
 KeyboardAvoidingView:{
   flex:1,
   justifyContent:'center',
   alignItems:'center'
 },
 modalTitle :{
   justifyContent:'center',
   alignSelf:'center',
   fontSize:30,
   color:'#ff5722',
   margin:50
 },
 modalContainer:{
   flex:1,
   borderRadius:20,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor:"#ffff",
   marginRight:30,
   marginLeft : 30,
   marginTop:80,
   marginBottom:80,
 },
 formTextInput:{
   width:"75%",
   height:35,
   alignSelf:'center',
   borderColor:'#ffab91',
   borderRadius:10,
   borderWidth:1,
   marginTop:20,
   padding:10
 },
 registerButton:{
   width:200,
   height:40,
   alignItems:'center',
   justifyContent:'center',
   borderWidth:1,
   borderRadius:10,
   marginTop:30
 },
 registerButtonText:{
   color:'#ff5722',
   fontSize:15,
   fontWeight:'bold'
 },
 cancelButton:{
   width:200,
   height:30,
   justifyContent:'center',
   alignItems:'center',
   marginTop:5,
 },
 
 button:{
   width:300,
   height:50,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:25,
   backgroundColor:"#ff9800",
   shadowColor: "#000",
   shadowOffset: {
      width: 0,
      height: 8,
   },
   shadowOpacity: 0.30,
   shadowRadius: 10.32,
   elevation: 16,
   padding: 10
 },
 buttonText:{
   color:'#ffff',
   fontWeight:'200',
   fontSize:20
 }
})
/*import React, { Component } from 'react';
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
*/