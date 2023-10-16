import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';

import TelaCliente from './screens/TelaCliente';
import TelaAtendente from './screens/TelaAtendente';
import TelaRelatorio from './screens/TelaRelatorio';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Cliente" component={TelaCliente} 
        options={{
          tabBarIcon: ({ black, size }) => (
            <FontAwesome5 name="user-friends" size={17.5} color={black}/>
          ),
          headerShown: false,
        }}
        />
        <Tab.Screen name="Atendente" component={TelaAtendente} 
        options={{
          tabBarIcon: ({ black, size }) => (
            <MaterialCommunityIcons name="account-tie" size={size} color={black}/>
          ),
          headerShown: false,
        }}
        />
        <Tab.Screen name="Relatório" component={TelaRelatorio} 
        options={{
          tabBarIcon: ({ black, size }) => (
            <MaterialCommunityIcons name="text-account" size={size} color={black} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
