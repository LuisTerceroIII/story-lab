import * as React from 'react';
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, NewStory, StoriesScreen, Favorites, StoryScreen } from '../screens/index';
import { ScreenName } from './screenNames';
import { useStoryStore } from '../store/storyStore/storyStore';

export type RootStackParamList = {
    [ScreenName.HOME]: undefined;
    [ScreenName.NEW_STORY]: undefined;
    [ScreenName.STORIES]: undefined;
    [ScreenName.STORY]: undefined;
    [ScreenName.FAVORITES]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>()

export const Routes = () => {
    return (
        <Stack.Navigator initialRouteName={ScreenName.HOME}>
            <Stack.Group>
                <Stack.Screen name={ScreenName.HOME} component={Home} options={{ title: 'Magic Tell' }}/>
                <Stack.Screen name={ScreenName.NEW_STORY} component={NewStory} />
                <Stack.Screen name={ScreenName.STORIES} component={StoriesScreen} options={{ title: `` }}/>
                <Stack.Screen name={ScreenName.STORY} component={StoryScreen} options={{ title: `${useStoryStore.getState().actionStory?.title}` }}/>
                <Stack.Screen name={ScreenName.FAVORITES} component={Favorites} options={{title: "Favorites"}}/>
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
            </Stack.Group>
        </Stack.Navigator>
    );
};