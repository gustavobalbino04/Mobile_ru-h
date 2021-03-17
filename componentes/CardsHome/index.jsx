import React,{ useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Alert,   Pressable, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';



const ItemProduto = ({produto, navigation}) =>{

    

  
    return(
        <>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail-Produto',{
          produtos : produtos
        })}>
           <Image style={styles.cardImage} source={{uri: produto.imagem}}/>
            <Text style={styles.cardText}>{produto.nome}</Text>
           
           <View style={styles.display}>
                <Text>{produto.data}</Text>
                <Text style={{fontSize: "15px",}}>R${produto.preco}</Text>
           </View>
         </TouchableOpacity>
        </>
    )
};



const styles = StyleSheet.create({
    card:{
        width:"47%",
        height:"95%",
        backgroundColor:"#C4C4C4",
        borderRadius: '10px',
        marginTop:"5px",
        marginBottom:10,
        marginLeft:"2%",
    },
    cardImage:{
        borderRadius: '10px',
        width:'100%',
        height:150,
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
    container: {
        flex: 1,
        backgroundColor: '#9b59b6',
        alignItems: 'center',
        justifyContent: 'center'
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
  })
export default ItemProduto;