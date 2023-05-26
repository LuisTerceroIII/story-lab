import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { Home, NewHistory } from '../screens/index';
import { ScreenName } from './screenNames';



const Stack = createNativeStackNavigator()

export const Routes = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenName.Home}>
        <Stack.Group>
            <Stack.Screen name={ScreenName.Home} component={Home} options={{ title: 'Overview' }}/>
            <Stack.Screen name={ScreenName.NEW_HISTORY} component={NewHistory} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
        </Stack.Group>
    </Stack.Navigator>
  );
};