import 'react-native-url-polyfill/auto';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/routes/RootNavigation';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes/routes';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';

export default function App() {

    SplashScreen.preventAutoHideAsync();

    const [fontsLoaded, error] = useFonts({
        'FireSans-Black': require('./assets/fonts/FiraSans-Black.ttf'),
        'FiraSans-Bold': require('./assets/fonts/FiraSans-Bold.ttf'),
        'FiraSans-ExtraBold': require('./assets/fonts/FiraSans-ExtraBold.ttf'),
        'FiraSans-Medium': require('./assets/fonts/FiraSans-Medium.ttf'),
        'FiraSans-Regular': require('./assets/fonts/FiraSans-Regular.ttf'),
        'FiraSans-SemiBold': require('./assets/fonts/FiraSans-SemiBold.ttf'),
    });
    useEffect(() => {
        const checkLoadedFont = async () => {
            if (fontsLoaded) {
                console.log('fonts loaded')
                await SplashScreen.hideAsync();
            }
            if(error) {
                console.log('error loading fonts')
            }
        }
        checkLoadedFont()
    }, [fontsLoaded])
    
    return (
        <NavigationContainer ref={navigationRef}>
            <StatusBar style="dark" />
            <Routes />
        </NavigationContainer>
    )
}


