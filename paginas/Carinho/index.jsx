import React from "react";
import { StyleSheet, Text, View,FlatList,TouchableOpacity,TextInput,Form, Button,Image, Platform, TouchableHighlight,} from "react-native";
import Menu from "../../componentes/Menu"

const Carinho = () =>{
    return(
        <View>

        <Menu/>
        <View style={{ 
                height: 55,
                backgroundColor: '#34495E',
                display: 'flex',
                marginTop: -20,
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                }}>
            <h2 style={{
                color: "white",
                fontFamily: "revert",
                }}>Minhas reservas</h2>
        </View>
        </View>

    )
}
export default Carinho;