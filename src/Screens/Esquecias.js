import React from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';
import Header from '../components/Header';
import styles from './styles';

const Stack = createStackNavigator();
const Esquecias = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior='padding-bottom' style={styles.container } >
      <Header/>
      <View style={styles.campos}>
      <Text style={styles.text}>Recupere sua senha</Text>
      <TextInputstyle styles = {styles.caixaEmail}
       placeholder = '  Código'
       placeholderTextColor = 'purple'
    />
     <TextInput style={styles.caixaSenha}
       placeholder = '  Nova senha'
       placeholderTextColor = 'purple'
       autoCompleteType = 'password'
       secureTextEntry={true}

    />
    <TextInput style={styles.caixaSenha}
       placeholder = '  Confirme a senha'
       placeholderTextColor = 'purple'
       autoCompleteType = 'password'
       secureTextEntry={true}
    />
      <TouchableOpacity
        style={styles.botao} onPress={ () => navigation.navigate('Home')}
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
      </View>
      </KeyboardAvoidingView>
      
      
  );
}


export default Esquecias;