import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import firebase from '../components/Firebase';
import Header from '../components/Header';
import styles from './styles';


const Stack = createStackNavigator();
const LoginC = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
  
    function loginFirebase(){
      firebase.auth().signInWithEmailAndPassword(email, senha).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage);
        // ...
      });
    }
  
    useEffect(()=>{
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
         console.log("Logado"+user.uid)
        } else {
          console.log('não logado!')
        }
      });
    },[])
  
    function createUserFirebase(){
      firebase.auth().createUserWithEmailAndPassword(email, senha).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
    }
  
  return (
    <KeyboardAvoidingView behavior='padding-bottom' style={styles.container } >
       <Header/>
       <View style={styles.campos}>
      <Text style={styles.text}>Cadastre-se</Text>
      <TextInput style = {styles.caixaEmail}
       placeholder = '  Email'
       placeholderTextColor = 'purple'
       autoCompleteType = 'email'
       onChangeText={email => setEmail(email)} value={email}
    />
     <TextInput style = {styles.caixaSenha}
       placeholder = '  Senha'
       placeholderTextColor = 'purple'
       autoCompleteType = 'password'
       secureTextEntry={true}
       onChangeText={senha => setSenha(senha)} value={senha}

    />
    <TextInput style = {styles.caixaSenha}
       placeholder = '  Confirme a senha'
       placeholderTextColor = 'purple'
       autoCompleteType = 'password'
       secureTextEntry={true}
       onChangeText={senha => setSenha(senha)} value={senha}

    />
     <TouchableOpacity
       style={styles.botao} onPress={()=>{ createUserFirebase()}}
      >
        <Text style={styles.botaoTexto}>
          Cadastrar
          </Text>
      </TouchableOpacity> 
      <TouchableOpacity
        style={styles.botao} onPress={ () => navigation.navigate('CadDono')}>
        <Text style={styles.botaoTexto} >
          Proximo
          </Text>
      </TouchableOpacity>   
      <TouchableOpacity
        style={styles.botao} onPress={ () => navigation.navigate('Home')}>
        <Text style={styles.botaoTexto} >
          Voltar
          </Text>
      </TouchableOpacity>
      </View>    
      </KeyboardAvoidingView>    
);
}
export default LoginC;