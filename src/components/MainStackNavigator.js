
import Login from "../../src/Screens/Login/Login";
import CadCuidador from "../Screens/Cuidador/CadCuidador";
import LoginC from "../Screens/LoginC";
import Esquecias from "../Screens/Esquecias";
import Cadastrar from "../Screens/Cadastrar";
import CadPet from "../../src/Screens/Pet/CadPet";
import CadDono from "../../src/Screens/Dono/CadDono";
import Perfil from "../Screens/Perfil";
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";

const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Esquecias" component={Esquecias}/>
      <Stack.Screen name="Cadastrar" component={Cadastrar}/>
      <Stack.Screen name="CadPet" component={CadPet}/>
      <Stack.Screen name="CadDono" component={CadDono}/>
      <Stack.Screen name="Perfil" component={Perfil}/>
      <Stack.Screen name="CadCuidador" component={CadCuidador}/>
      <Stack.Screen name="LoginC" component={LoginC}/>
    </Stack.Navigator>
  );
}

export { MainStackNavigator };