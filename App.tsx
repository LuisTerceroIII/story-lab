import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import { Routes } from './src/routes/routes';

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar style="dark" />
        <Routes />
    </NavigationContainer>
  )
}


