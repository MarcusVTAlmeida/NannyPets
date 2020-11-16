import React from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';
import localUri from "../Screens/Dono/CadDono";
import * as ImagePicker from 'expo-image-picker'
import Header from '../components/Header';
import styles from './styles';


const Stack = createStackNavigator();
const Perfil = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior='padding-bottom' style={styles.container } >
      <Header/>
      <Text style={{color: "purple", fontSize: 20 }}>Visualizar</Text>    
      <Image 
        source={require('../assets/Exemplo.png')}
      />
      <Text style={{color: "purple"}}>Cleberson Assis Paixão</Text>
      <TouchableOpacity
        style={styles.botao} onPress={ () => navigation.navigate('Home')}
      >
        <Text  style={styles.botaoTexto} >
          Voltar
          </Text>
      </TouchableOpacity>   
            
      </KeyboardAvoidingView>    
    );
}


export default Perfil;