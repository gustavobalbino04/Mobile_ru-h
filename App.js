
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeProduto from "./paginas/HomeProduto";
import Carinho from "./paginas/Carinho"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer  >
      <Tab.Navigator  style={{Color: "#F2690F"}}>
        <Tab.Screen name="Home" component={HomeProduto} />
        <Tab.Screen name="Carinho" component={Carinho} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};



