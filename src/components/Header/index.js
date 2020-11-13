import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './styles';
import logo from '../../assets/LOGONannyPet.png';

export default function Header(){
    return(
        <View style={styles.header}>
           <Image source={logo} style={styles.logo}/>
        </View>
    )
}