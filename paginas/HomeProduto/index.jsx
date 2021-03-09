import React, { useState,} from "react";
import { StyleSheet, Text, View,FlatList,TouchableOpacity,TextInput,Form, Button,Image, Platform, TouchableHighlight,} from "react-native";
import Menu from "../../componentes/Menu"

const HomeProduto = () =>{
    const [id,  setId] = useState(' ');
    const [texto, setTexto] = useState([]);
    const [imagem, setUrlImagem] = useState('');

    const Listar = () =>{
        fetch( '',{
            method : 'GET'
        })
        .then(response => response.json())
        .then(dados => {
            setDicas(dados.data);
            console.log(dados.data);
                })
            .catch(err => console.log(err));
            }

    const renderItem = (produto) => {
        return (
           <View>
            
            <Item imagens = {produto.item.imagens}/>
            <Item texto ={produto.item.texto}/>
           </View>
               
        )
        
    }
    return(
        <View >

        <Menu/>
        
        <View  style={styles.display}>

         <TouchableOpacity style={styles.card}>
           <Image style={styles.cardImage} source={{uri:'https://s3-sa-east-1.amazonaws.com/sensediafiles/marketing/newsletter/2015/09set/SENSEDIA-gamification-apis-600.jpg'}}/>
           <Text style={styles.cardText}>PlayStation 4 Pro</Text>
           
           <View style={styles.display}>
               <Text>22 jun 2020</Text>
               <Text>1 unidade</Text>
           </View>
           
             
         </TouchableOpacity>
         <TouchableOpacity style={styles.card}>
           <Image style={styles.cardImage} source={{uri:'https://s3-sa-east-1.amazonaws.com/sensediafiles/marketing/newsletter/2015/09set/SENSEDIA-gamification-apis-600.jpg'}}/>
           <Text style={styles.cardText}>PlayStation 4 Pro</Text>
           
           <View style={styles.display}>
               <Text>22 jun 2020</Text>
               <Text>1 unidade</Text>
           </View>
           
             
         </TouchableOpacity>
        </View>
        <View  style={styles.display}>

<TouchableOpacity style={styles.card}>
  <Image style={styles.cardImage} source={{uri:'https://s3-sa-east-1.amazonaws.com/sensediafiles/marketing/newsletter/2015/09set/SENSEDIA-gamification-apis-600.jpg'}}/>
  <Text style={styles.cardText}>PlayStation 4 Pro</Text>
  
  <View style={styles.display}>
      <Text>22 jun 2020</Text>
      <Text>1 unidade</Text>
  </View>
  
    
</TouchableOpacity>
<TouchableOpacity style={styles.card}>
  <Image style={styles.cardImage} source={{uri:'https://s3-sa-east-1.amazonaws.com/sensediafiles/marketing/newsletter/2015/09set/SENSEDIA-gamification-apis-600.jpg'}}/>
  <Text style={styles.cardText}>PlayStation 4 Pro</Text>
  
  
  <View style={styles.display}>
      <Text>22 jun 2020</Text>
      <Text>1 unidade</Text>
  </View>
  
    
</TouchableOpacity>

    </View>
</View>

    )

};
const styles = StyleSheet.create({

    
    
    card:{
        width:"47%",
        height:"50%",
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
        padding: "2%",
        justifyContent: 'space-between',

    },
  });
  
export default HomeProduto;