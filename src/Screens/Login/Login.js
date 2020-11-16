import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView,} from 'react-native';
import styles from './styles';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from '../../components/Firebase';
import Header from '../../components/Header';

const Stack = createStackNavigator();

const Login = ({ navigation }) => {
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

    return(     
            <KeyboardAvoidingView behavior='padding-bottom' style={styles.container } > 
            <Header/>                   
              <Text style={styles.informacao} >
                  Nanny Pets é ideal para quem ama animais e da sempre o melhor de sim.
                  Além da possibilidade de ganhar um extra.
              </Text>
                 <View style={styles.campos}>
                <TextInput style = {styles.caixaEmail} 
                   placeholder = '  Email'
                   placeholderTextColor = 'purple'
                   autoCompleteType = 'email'
                   onChangeText={email => setEmail(email)} value={email}
                />                
                <TextInput  style = {styles.caixaSenha}
                    placeholder = '  Senha'
                    placeholderTextColor = 'purple'
                    autoCompleteType = 'password'
                    secureTextEntry={true}
                    onChangeText={senha => setSenha(senha)} value={senha}
                />        
                <TouchableOpacity style={styles.botao} onPress={loginFirebase}>                    
                    <Text style={styles.botaoTexto} >Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao1} onPress={ () => navigation.navigate('LoginC')}>                    
                    <Text style={styles.botaoTexto} >Proxima</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textCadastro} onPress={ () => navigation.navigate('Cadastrar')}>
                <Text style={styles.cadastro}>Cadastrar</Text>
                </TouchableOpacity>                                
                <TouchableOpacity style={styles.anfitriao} onPress={ () => navigation.navigate('LoginAnfi')}>
                    <Text style={styles.textanfitriao}>
                        Quero ser Anfitrião
                    </Text>
                </TouchableOpacity>                
                </View>                
           </KeyboardAvoidingView>         
    )    
}
export default login;