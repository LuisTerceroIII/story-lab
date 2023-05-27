import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, NewStory, Story, Favorites } from '../screens/index';
import { ScreenName } from './screenNames';



const Stack = createNativeStackNavigator()

export const Routes = () => {


    return (
        <Stack.Navigator initialRouteName={ScreenName.HOME}>
            <Stack.Group>
                <Stack.Screen name={ScreenName.HOME} component={Home} options={{ title: 'Story Lab' }}/>
                <Stack.Screen name={ScreenName.NEW_STORY} component={NewStory} />
                <Stack.Screen name={ScreenName.STORY} component={Story} options={{ title: `` }}/>
                <Stack.Screen name={ScreenName.FAVORITES} component={Favorites} options={{title: "Favorites"}}/>
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
            </Stack.Group>
        </Stack.Navigator>
    );
};