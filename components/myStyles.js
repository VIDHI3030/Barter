import * as React from 'react';
import {  StyleSheet } from 'react-native';
import{RFValue} from 'react-native-responsive-fontsize';
const myStyles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6fc0b8",
    alignItems: "center",
    justifyContent: "center"
  },
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 65,
    fontWeight: "300",
    paddingBottom: 30,
    color: "#fff"
  },
  inputBox: {
    width: 300,
    height: RFValue(50),
    borderBottomWidth: 1.5,
    borderColor: "#fff",
    fontSize: RFValue(20),
    margin: 10,
    paddingLeft:RFValue(10),
    marginTop:RFValue(15)
  },
  KeyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalTitle: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: RFValue(30),
    color: "#ff5722",
    margin: 50
  },
  modalContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80
  },
  formTextInput: {
    width: "75%",
    height: 35,
    alignSelf: "center",
    borderColor: "#ffab91",
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10
  },
  button: {
    width: '80%',
    height: RFValue(50),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(25),
    marginBottom:RFValue(10),
    backgroundColor: "#ff5722",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10
  },
  imageContainer:{
    flex:0.75,
    width:"40%",
    height:"20%",
    marginLeft:20,
    marginTop:30,
    borderRadius:40,
    
  },
  logOutContainer : {
    flex:0.2,
    justifyContent:'flex-end',
    paddingBottom:30
  },
  logOutButton : {
    height:30,
    width:'100%',
    justifyContent:'center',
    padding:10
  },
  logOutText:{
    fontSize: 30,
    fontWeight:'bold'
  },
  backTextWhite: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    alignSelf: "flex-start"
  },
  rowBack: {
    alignItems: "center",
    backgroundColor: "#29b6f6",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 100
  },
  backRightBtnRight: {
    backgroundColor: "#29b6f6",
    right: 0
  },
  buttonText: {
    color: "#6fc0b8",
    fontWeight: "200",
    fontSize: RFValue(20)
  },
  smallbutton:{
    width:100,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8
 
    }
  } 
});

  



export default myStyles;
