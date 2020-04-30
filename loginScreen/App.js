/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

 class App extends Component{
   render(){
     return(
       <KeyboardAvoidingView behavior='padding'
       style={styles.wrapper}>
         <View style={styles.container}>
        <Image
        style={styles.image}
        source={require('./assets/images/codeflare.png')}
        />
        <Text style={styles.loginText}>
          Welcome back
        </Text>
        <TextInput
        style={styles.textInput}
        placeholder="Username"
        placeholderTextColor="#ccc"
        underlineColorAndroid='transparent'
        />
        <TextInput
        secureTextEntry={true}
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor="#ccc"
        underlineColorAndroid='transparent'
        />
        <TouchableOpacity
        style={styles.btn}>

          <Text style={styles.text}>
            Login
          </Text>

        </TouchableOpacity>

        <Text style={styles.forgot}>
          Forgot password?
        </Text>
         </View>
       </KeyboardAvoidingView>
     )
   }
 }

 const styles = StyleSheet.create({
   wrapper:{
     flex:1
   },
   container:{
     flex:1,
     alignItems: 'center',
     justifyContent: 'center',
     paddingLeft: 40,
     paddingRight: 40,
     backgroundColor: '#fff'
   },
   loginText:{
     color: '#cc0000',
     marginTop: 20,
     fontSize: 18,
     fontWeight: 'bold',
     textTransform: 'uppercase'
   },
   image:{
     width:100,
     height: 100
   },

   textInput:{
     alignSelf: 'stretch',
     borderColor: '#4285f4',
     height: 45,
     borderWidth:1,
     borderBottomWidth:1,
     borderTopLeftRadius:1,
     borderTopRightRadius:1,
     borderBottomRightRadius:1,
     borderBottomLeftRadius:1,
     padding:10,
     marginTop:20
   },
   btn:{
     alignSelf: 'stretch',
     alignItems: 'center',
     padding:20,
     marginTop:20,
     borderTopLeftRadius:3,
     borderTopRightRadius:3,
     borderBottomRightRadius:3,
     borderBottomLeftRadius:3,
     backgroundColor: '#36c'
   },
   text:{
     fontSize: 18,
     color: '#fff',
     fontWeight: 'bold'
   },
   forgot:{
     fontSize: 18,
     color: '#ff4444',
     marginTop: 10
   }
 });
 

export default App;
