import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
//import BackArrow from "../../utils/images/backArrow"

const DetailProduto = ({route}) => {
    const {produto}= route.params;

    return(
        
        <View style={styles.container}>
        <Image style={styles.cardImage} source={{uri:'https://s3-sa-east-1.amazonaws.com/sensediafiles/marketing/newsletter/2015/09set/SENSEDIA-gamification-apis-600.jpg'}}/>
        <Text style={styles.titulo} >{produto.titulo}</Text>
          <Text style={styles.DateText}>Bem, é só olhar o conteúdo uma vez. Você também pode colocar um ponto de interrupção e avaliar this.props no depurador. Atualmente, até o console.log faz o trabalho (pelo menos no Chrome, você pode expandir valores impressos assim) - e até o console.log não é nada para usar na produção.</Text>
          <View style={styles.TextContainer}>
            <Text>2 peças</Text>
            <Text>12  jun 2020</Text>
          </View>
          <View style={styles.di}>

          <Text style={styles.preco}>Preço </Text>
          <Text style={styles.preco}>R$36</Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textobtn}>
            Resevar
          </Text>
          </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 5,
      height: "100%",
      width: "100%",
    },
    titulo: {
      fontFamily: "Arial Black",
      fontSize: 36,
    },
    preco:{
      fontFamily: "Arial Black",
      fontSize: 20,
    },
    petTextCont: {
      marginTop: "7%",
      alignItems: "center"
    },
    TextContainer: {
      
     justifyContent: "space-evenly"
    },
    listItem : {
      flex : 1,
      margin : 10,
      padding:10,
      width : '90%',
      height: "50%",
      alignSelf : 'center',
      textAlign: "center",
      flexDirection : 'row',
      borderWidth: 2,
      backgroundColor: "white",
    },
    cardImage:{
      width:"50%",
      borderRadius: '10px',
      resizeMode:'cover'
  },
    DateBox : {
      flex : 1,
      margin : 10,
      width : '97%',
      height: "20%",
      alignSelf : 'center',
      textAlign: "center",
      flexDirection : 'row',
      borderWidth: 2,
      backgroundColor: "white",
    },
  NameText: {
      fontFamily : 'Arial Black',
      fontSize: 25,
      textAlign: "center",
      justifyContent: "center"
  },
  DateText: {
      fontFamily : 'Arial',
      fontSize: 15,
      textAlign: "justify",
     
  },
  di: {
    display: "flex",
    justifyContent: "space-around",
  },
  btn: {
    backgroundColor: "#F2690F",
    width: "95%",
    height: "8%",
    alignSelf : 'center',
    textAlign: "center",
    borderRadius: "10px"
  },
  textobtn: {
    fontFamily : 'Arial',
    fontSize: 18,
    alignSelf : 'center',
    textAlign: "center",
    banckgroundcolor: "White",
  }
  });

export default DetailProduto;