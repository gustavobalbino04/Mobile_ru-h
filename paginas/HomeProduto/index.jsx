import React, { useState, useEffect, } from "react";
import { render } from "react-dom";
import { SafeAreaView, StyleSheet, Text, View,FlatList,VirtualizedList,ScrollView,Row, TouchableOpacity,TextInput,Form, Button,Image, Platform, TouchableHighlight,} from "react-native";
import Menu from "../../componentes/Menu";
import ItemProduto from '../../componentes/CardsHome';
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import produtoServico from '../../../services/produtoServico';


const HomeProduto = ({navigation}) => {
    const [produto, setProduto] = useState([]);

    
    useEffect(()=>{
        
        Listar();
    }, []);

    
    

    const Listar = () => {
        produtoServico
        .listar()
        .then(response => response.json())
        .then(data => {
            setProduto(data)
            console.log()
        })
        .catch(err => console.log(err));
    };
    

    const renderItem = (produto) => {
      return (
          <ItemProduto 
            
              nome={produto.item.nome} 
              imagem={produto.item.imagem}
              data={produto.item.data}
              preco={produto.item.preco}
              
              />
      )
    };

    return(
       <>
        <Menu/>
        
        <SafeAreaView style={styles.container}>
        <FlatList
         data={produto}
         numColumns={2}
         renderItem={renderItem}
         keyExtractor={item => item.id}
         
         />
        </SafeAreaView>  
         
        </>   
    )  
};
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'space-around',
      },
  })

  
export default HomeProduto;