import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerStyle: { backgroundColor: '#0a0a0b', borderBottomWidth: 0 }, 
        headerTintColor: '#8A2BE2',
        headerTitleStyle: { fontWeight: 'bold', letterSpacing: 2 }
      }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'AURASTREAM' }} />
        <Stack.Screen name="Details" component={Details} options={{ title: 'DETALHES' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}