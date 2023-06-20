import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, NewStory, StoriesScreen, FavoritesScreen, StoryScreen, SignUpScreen, SignInScreen } from '../screens/index';
import { ScreenName } from './screenNames';

export type RootStackParamList = {
    [ScreenName.HOME]: undefined;
    [ScreenName.NEW_STORY]: undefined;
    [ScreenName.STORIES]: undefined;
    [ScreenName.STORY]: undefined;
    [ScreenName.FAVORITES]: undefined;
    [ScreenName.SIGN_UP]: undefined;
    [ScreenName.SIGN_IN]: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const Routes = () => {
    return (
        <Stack.Navigator initialRouteName={ScreenName.HOME} screenOptions={{headerShown: false}}>
            <Stack.Group>
                <Stack.Screen name={ScreenName.HOME} component={Home}/>
                <Stack.Screen name={ScreenName.NEW_STORY} component={NewStory}/>
                <Stack.Screen name={ScreenName.STORIES} component={StoriesScreen}/>
                <Stack.Screen name={ScreenName.STORY} component={StoryScreen}/>
                <Stack.Screen name={ScreenName.FAVORITES} component={FavoritesScreen}/>
                <Stack.Screen name={ScreenName.SIGN_UP} component={SignUpScreen}/>
                <Stack.Screen name={ScreenName.SIGN_IN} component={SignInScreen}/>
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
            </Stack.Group>
        </Stack.Navigator>
    );
};