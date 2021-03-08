
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeProduto from "./paginas/HomeProduto";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeProduto} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


