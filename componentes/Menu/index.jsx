import React from "react";
import { StyleSheet, View,   Image } from 'react-native';
import Logo from '../../imgs/Logo/logo_transparent 2.png';

const Menu = () =>{
 return(
    <View style={styles.container}>
            <Image
                style={styles.image}
                source={Logo}
            />
            
        </View>
 )

}
const styles = StyleSheet.create({
    container: {
        height: 55,
        backgroundColor: '#34495E',
        display: 'flex',
        marginBottom: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    image: {
        width: 90,
        height: 40
    }
});
export default Menu;