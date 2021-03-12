import React, { useState, useEffect, } from "react";
import { render } from "react-dom";
import { SafeAreaView, StyleSheet, Text, View,FlatList,VirtualizedList,ScrollView,Row, TouchableOpacity,TextInput,Form, Button,Image, Platform, TouchableHighlight,} from "react-native";
import Menu from "../../componentes/Menu";
import ItemProduto from '../../componentes/CardsHome';

const HomeProduto = () => {

    const [produto, setProduto] = useState([]);

    
    useEffect(()=>{
        
        Listar();
    }, []);

    
    

    const Listar = () => {
        fetch( 'https://5f9a074d9d94640016f70531.mockapi.io/api/produto',{
            method : 'GET'
        })
        .then(response => response.json())
        .then(data => {
            setProduto(data)
            console.log()
        })
        .catch(err => console.log(err));
    };
    

    const renderItem = (produtos) => {
      return (
          <ItemProduto 
            
              nome={produtos.item.nome} 
              imagem={produtos.item.imagem}
              data={produtos.item.data}
              preco={produtos.item.preco} />
      )
    };

    return(
        <View>
        <Menu/>

        <SafeAreaView style={{flex:1}}>
        <FlatList
        
        data={produto}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
        </SafeAreaView>    
        </View>
    )
    
    
};
const styles = StyleSheet.create({


    display:{
        display: "flex",
        flex: 1,
        flexDirection: 'row',
        padding: "2%",
        justifyContent: 'space-between',
        marginTop: "-5px",
        

    },
  })

  
export default HomeProduto;