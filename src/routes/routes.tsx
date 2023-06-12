import * as React from 'react';
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, NewStory, StoriesScreen, FavoritesScreen, StoryScreen, SignUpScreen, SignInScreen } from '../screens/index';
import { ScreenName } from './screenNames';
import { useStoryStore } from '../store/storyStore/storyStore';

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
        <Stack.Navigator initialRouteName={ScreenName.HOME}>
            <Stack.Group>
                <Stack.Screen name={ScreenName.HOME} component={Home} options={{ title: 'Magic Tell' }}/>
                <Stack.Screen name={ScreenName.NEW_STORY} component={NewStory} />
                <Stack.Screen name={ScreenName.STORIES} component={StoriesScreen} options={{ title: `` }}/>
                <Stack.Screen name={ScreenName.STORY} component={StoryScreen} options={{ title: `${useStoryStore.getState().actionStory?.title}` }}/>
                <Stack.Screen name={ScreenName.FAVORITES} component={FavoritesScreen} options={{title: "Favorites"}}/>
                <Stack.Screen name={ScreenName.SIGN_UP} component={SignUpScreen} options={{title: "Register"}}/>
                <Stack.Screen name={ScreenName.SIGN_IN} component={SignInScreen} options={{title: "Login"}}/>
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
            </Stack.Group>
        </Stack.Navigator>
    );
};