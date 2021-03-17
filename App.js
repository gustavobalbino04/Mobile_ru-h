import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeProduto from "./paginas/HomeProduto";
import Carinho from "./paginas/Carinho";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DetailProduto from "./paginas/Details"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';





const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      
      <Tab.Navigator  style={{backgroundColor: "#F2690F",}}>
        <Tab.Screen name="Home" component={HomeProduto} />
        <Tab.Screen name="Carinho" component={Carinho} />
        
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};




