import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, } from "react-native";

const ItemCarinho = ({produto, navigation}) =>{



    return(
        <TouchableOpacity style={styles.card}>
            
            <Image style={styles.cardImage} source={{uri: produto.imagem}}/>
            <hr style={{ width:"1px",height:"80px",backgroundColor:"blank", }}/>
            <View>
            <Text style={styles.cardText}>{produto.nome}</Text>
            <Text>{produto.data}</Text>
            <Text>{produto.preco}</Text>
            </View>
            
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({ 

    
    
    card:{
        width:"96%",
        height:"50%",
        backgroundColor:"#C4C4C4",
        borderRadius: '10px',
        marginTop:"2px",
        marginBottom:10,
        display:"flex",
        flex: 1,
        flexDirection: 'row',
        padding: "2%",
        margin: "2%"
    },
    cardImage:{
        width:"50%",
        borderRadius: '10px',
        resizeMode:'cover'
    },
    cardText:{
        padding:"2%",
        fontSize: 18,
        
    },
    display:{
        flex: 1,
        flexDirection: 'row',
        padding: "2%",
        justifyContent: 'space-between',

    },

  });
export default ItemCarinho;