import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons';

import { StatusBar } from 'expo-status-bar';

import Home from './src/pages/Home';
import Report from './src/pages/Report';
import PasswordScreen from './src/pages/PasswordList/index'
import SelectPassword from './src/pages/SelectPassword';

import TicketContext from './src/contexts/TicketContext';
import { useEffect, useState } from 'react';

import { Ticket } from './src/types/ticket';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DEFAULT_TICKETS = [
  {
    id: 'SG-111',
    createdAt: {
      hour: '11:11',
      date: '22/22/22'
    },
    type: 'general'
  },
  {
    id: 'SG-222',
    createdAt: {
      hour: '11:11',
      date: '22/22/22'
    },
    type: 'priority'
  },
  {
    id: 'SG-333',
    createdAt: {
      hour: '11:11',
      date: '22/22/22'
    },
    type: 'general'
  }
]

export default function App() {
  const [tickets, setTickets] = useState<Ticket[]>(DEFAULT_TICKETS)

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  function MainTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Senha" component={PasswordScreen} options={
          {
            title: 'Projeto 1 - Mobile',
            tabBarLabel: 'Tickets',
            headerShown:false,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

            tabBarIcon: ({ color, size }) => (
              <Ionicons name="key-outline" color={color} size={size} />
            ),
          }
        }/>

        <Tab.Screen name="Relatório" component={Report} options={
          {
            tabBarLabel: 'Report',
            headerShown: false,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },

            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bar-chart-outline" color={color} size={size} />
            ),
          }
        }/>
      </Tab.Navigator>
    );
  }

  const handleUpdateTickets = async () => {
    AsyncStorage.clear()
    const previewTickets = await AsyncStorage.getItem('tickets') || []

    await AsyncStorage.setItem('tickets', JSON.stringify({
      ...tickets,
      previewTickets
    }))
  }

  useEffect(() => {
    handleUpdateTickets()
  }, [])

  return (
    <TicketContext>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={Home} options={{ headerShown: false}} />
          <Stack.Screen name="SelectPassword" component={SelectPassword} options={{ headerShown: false}} />
          <Stack.Screen name="Tabs" component={MainTabs} options={{ headerShown: false}} />
        </Stack.Navigator>

        <StatusBar style="dark" />
      </NavigationContainer>
    </TicketContext>
  );
}
