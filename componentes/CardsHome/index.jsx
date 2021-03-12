import React,{useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Alert, Modal,   Pressable,  } from "react-native";

const ItemProduto = (produtos) =>{
    
    const {nome, imagem, data, preco} = produtos;
    return(

        
        <TouchableOpacity  style={styles.card}>
           <Image style={styles.cardImage} source={{uri:{imagem}}}/>
            <Text style={styles.cardText}>{nome}</Text>
           
           <View style={styles.display}>
                <Text>{data}</Text>
                <Text style={{fontSize: "15px",}}>R${preco}</Text>
           </View>
           
             
         </TouchableOpacity>
        )
        
               
    

};



const styles = StyleSheet.create({

    
    
    card:{
        
        marginRight: "5%",
        width:"47%",
        height:"95%",
        backgroundColor:"#C4C4C4",
        borderRadius: '10px',
        marginTop:"10px",
        marginBottom:10,
        
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
        
        justifyContent: 'space-between',
        marginTop: "-5px",

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