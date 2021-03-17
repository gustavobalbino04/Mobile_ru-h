import React, { useState, useEffect, } from "react";
import { render } from "react-dom";
import { SafeAreaView, StyleSheet, Text, View,FlatList,VirtualizedList,ScrollView,Row, TouchableOpacity,TextInput,Form, Button,Image, Platform, TouchableHighlight,} from "react-native";
import Menu from "../../componentes/Menu";
import ItemCarinho from '../../componentes/CardsCarinho';

const Carinho = () => {

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
          <ItemCarinho 
            
              nome={produtos.item.nome} 
              imagem={produtos.item.imagem}
              data={produtos.item.data}
              preco={produtos.item.preco} />
      )
    };

    return(
        <>
        <Menu/>
        <View style={styles.subTitulo}>
            <h2 style={{color: "white",fontFamily: "revert",}}>Minhas reservas</h2>
        </View>
        <>
        <ScrollView>
        <SafeAreaView style={{flex:0.5}}>
        <FlatList
        
        data={produto}
        
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
        </SafeAreaView>  
        </ScrollView>  
        </>
        </>
    )
    
    
};
const styles = StyleSheet.create({
    subTitulo:{
        height: 55,
        backgroundColor: '#34495E',
        display: 'flex',
        marginTop: -20,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    }
  });

export default Carinho;