import React, { useState, useEffect, useRef} from 'react';
import { View, ScrollView, SafeAreaView, Text, Button, Image, StyleSheet, Modal, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import * as ImagePicker from 'expo-image-picker'
import Header from '../components/Header';
import styles from './styles';

const Stack = createStackNavigator();
const CadPet = ({ navigation }) => {
  const [selectImg, setSelectImg] = React.useState(null)

    let openImage = async () =>{
      let permission = await ImagePicker.requestCameraRollPermissionsAsync();

      if (permission.granted === false){
return;

      }

      let picker = await ImagePicker.launchImageLibraryAsync()
      if (picker.cancelled === true){
        return;
      }
      setSelectImg({localUri:picker.uri})
      console.log(picker)
    }
  return (
<KeyboardAvoidingView behavior='padding-bottom' style={styles.container } >
<Header/>
      <Text style={{color: "purple", fontSize: 28 }}>Sobre seu PET!</Text>
      <TouchableOpacity
      onPress={openImage}>
         {
        selectImg !== null ? 
        (
          <Image style={styles.image} 
          source={{uri:(selectImg.localUri != null) ? selectImg.localUri : 'https://i.imgur.com/TkIrScD.png'}}
      />
        ) : <Image 
        source={require('../assets/adicionarFoto.png')}
      />
      }
    </TouchableOpacity>
     <TextInput style = {styles.caixaEmail}
       placeholder = '  Nome'
       placeholderTextColor = 'purple'
       autoCompleteType = 'name'
    />
     <TextInput style = {styles.caixaEmail}
       placeholder = '  Idade'
       placeholderTextColor = 'purple'
    />
     <TextInput style = {styles.caixaEmail}
       placeholder = '  Porte'
       placeholderTextColor = 'purple'

    />
    <TextInput style = {styles.caixaEmail}
       placeholder = '  Raça'
       placeholderTextColor = 'purple'
    />
    <TouchableOpacity
        style={styles.botao} onPress={ () => navigation.navigate('Perfil')}
      >
      <Text style={styles.botaoTexto}>
          Confirmar
          </Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={styles.botao} onPress={ () => navigation.navigate('Home')}
      >
        <Text style={styles.botaoTexto}>
          Voltar
          </Text>
      </TouchableOpacity>    
      </KeyboardAvoidingView>
     
  );
}
export default CadPet;