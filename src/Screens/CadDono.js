import React, {useState, useEffect} from 'react';
import { View, FlatList, ScrollView, Text, Button, Image, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';
import * as ImagePicker from 'expo-image-picker'
import Header from '../components/Header'
import firebase from '../components/Firebase';
import styles from './styles';


const Stack = createStackNavigator();

const CadDono = ({ navigation }) => {
  
  const [selectImg, setSelectImg] = React.useState(null)
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [listFire, setListFire] = useState(null);

  useEffect(() => {
    try {
      firebase.database().ref('/crud').on('value', (snapshot) => {
        const list = [];
        snapshot.forEach((childItem) => {
          list.push({
            key: childItem.key,
            age: childItem.val().age,
            name: childItem.val().name,
          });
        });
        setListFire(list);
      })

    } catch (error) {
      alert(error);
    }
  }, [])

  function delFire(key) {
    firebase.database().ref('/crud/' + key).remove()
  }

  function editFire(key, name, age) {
    navigation.navigate("Edit",{
      key: key,
      name: name,
      age: age
    });
  }

  

  function pushFire(){
      try{
        firebase.database().ref('/crud').push({
          name: name,
        age: age    
        })

      } catch (error) {
        alert(error)
      }
      finally{
        setName('');
        setAge(''); 
      }
   
  }
  
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
     <View style={styles.campos}>
      <Text style={{color: "purple", fontSize: 28 }}>Sobre o DONO!</Text>
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
           
     <TouchableOpacity
        style={styles.botao} onPress={ () => navigation.navigate('CadPet')}
      >
        <Text style={styles.botaoTexto}>
          Proximo
          </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao} onPress={ () => navigation.navigate('Home')}
      >
        <Text style={styles.botaoTexto} >
          Voltar
          </Text>
      </TouchableOpacity>    
      </View>
      </KeyboardAvoidingView>    
      
      
  );
}

export default CadDono;