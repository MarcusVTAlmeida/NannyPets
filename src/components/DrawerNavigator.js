import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainStackNavigator } from "./MainStackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
      
      <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainStackNavigator}/>
      <Drawer.Screen name="Perfil" component={MainStackNavigator}/>
      <Drawer.Screen name="Esquecias" component={MainStackNavigator}/>
      <Drawer.Screen name="Cadastrar" component={MainStackNavigator}/>
      <Drawer.Screen name="CadPet" component={MainStackNavigator}/>
      <Drawer.Screen name="CadDono" component={MainStackNavigator}/>
      <Drawer.Screen name="LoginC" component={MainStackNavigator}/>
      <Drawer.Screen name="LoginAnfi" component={MainStackNavigator}/>
    </Drawer.Navigator>                
    
  );
}
export default DrawerNavigator;