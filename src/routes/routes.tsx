import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, NewStory, Story } from '../screens/index';
import { ScreenName } from './screenNames';
import { useHomeUIStore } from '../store/screensStore/homeUI';



const Stack = createNativeStackNavigator()

export const Routes = () => {

    const { catName } = useHomeUIStore()

    return (
        <Stack.Navigator initialRouteName={ScreenName.HOME}>
            <Stack.Group>
                <Stack.Screen name={ScreenName.HOME} component={Home} options={{ title: 'Story Lab' }}/>
                <Stack.Screen name={ScreenName.NEW_STORY} component={NewStory} />
                <Stack.Screen name={ScreenName.STORY} component={Story} options={{ title: `${catName}` }}/>
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
            </Stack.Group>
        </Stack.Navigator>
    );
};