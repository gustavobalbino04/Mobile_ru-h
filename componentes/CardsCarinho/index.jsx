import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, } from "react-native";

const ItemCarinho = (produtos) =>{

    const {nome, imagem, data, preco} = produtos;

    return(
        <TouchableOpacity style={styles.card}>
            
            <Image style={styles.cardImage} source={{uri:'https://s3-sa-east-1.amazonaws.com/sensediafiles/marketing/newsletter/2015/09set/SENSEDIA-gamification-apis-600.jpg'}}/>
            <hr style={{ width:"1px",height:"80px",backgroundColor:"blank", }}/>
            <View>
            <Text style={styles.cardText}>{nome}</Text>
            <Text>{data}</Text>
            <Text>{preco}</Text>
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
        marginTop:"10px",
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