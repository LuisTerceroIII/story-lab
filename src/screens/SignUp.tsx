import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { ScreenProps } from '../screens/screenProps'
import { ScreenName } from '../routes/screenNames';
import { useAuthStore, useSignUp, useSetEmail, useSetPassword } from '../store/authStore/authStore';
import LoginError from '../components/modals/loginError';
import { colorPalette } from '../theme/colors';
import { Image, ImageStyle } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';

const MAIN_CONTAINER: ViewStyle = {
    flex: 1,
    backgroundColor: colorPalette.ultraWhite,
    alignItems: 'center',
    justifyContent: 'center',
}
const INPUTS: ViewStyle = {
    flex: 1
}
const LOGO: ImageStyle = {
    width: 220,
    height: 212,
}
const TITLE: TextStyle = {
    fontSize: 36,
    fontWeight: '400',
}
const LABEL: TextStyle = {
    fontSize: 18,
    fontWeight: '400',
    marginTop: 34
}
const INPUT: ViewStyle & TextStyle= {
    marginTop: 10,
    width: 320,
    height: 48,
    borderColor: colorPalette.black,
    borderWidth: 1,
    paddingLeft: 5,
    fontSize: 18,
}
const BUTTON: ViewStyle = {
    width: 147,
    height: 48,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colorPalette.black,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50
}
const BUTTON_TEXT: TextStyle = {
    fontSize: 20,
    fontWeight: '400',
    color: colorPalette.black
}
const LINK: TextStyle = {
    fontSize: 16,
    fontWeight: '500',
    color: colorPalette.softBlue,
    alignSelf: 'center',
}

export const SignUpScreen: React.FC<ScreenProps> = ({ navigation }) => {

    const { email, password, error, detailError, loading } = useAuthStore((state) => ({
        email: state.email,
        password: state.password,
        error: state.error,
        detailError: state.detailError,
        loading: state.loading,
    }));

    const storeSignUp = useSignUp()
    const setEmail = useSetEmail()
    const setPassword = useSetPassword()

    const signUp = async () => {
        await storeSignUp()
        //navigation.navigate(ScreenName.HOME);
    }
    const goToLogin = () => {
        navigation.navigate(ScreenName.SIGN_IN);
    }
    const goHome = () => {
        navigation.navigate(ScreenName.HOME);
    }

    return (
        <SafeAreaView style={MAIN_CONTAINER}>
            <Image
                source={{uri: "/Users/hybeans/Desktop/Luis/StoryLab/assets/logo.png"}}
                contentFit="cover"
                transition={400}
                priority='high'
                placeholderContentFit='cover'
                style={LOGO} />
        <Text style={TITLE}>Magic Tell</Text>
        {error && <LoginError error={detailError}/> }
        <View style={INPUTS}>
            <Text style={LABEL}>Email</Text>
            <TextInput
                style={INPUT}
                value={email}
                onChangeText={setEmail}
                secureTextEntry={false}
            />
            <Text style={[LABEL, {marginTop: 19}]}>Password</Text>
            <TextInput
                style={INPUT}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            {loading ? (
                <ActivityIndicator size="large" color={colorPalette.black} style={{marginTop:50}}/>
            ) : (
                <TouchableOpacity style={BUTTON} onPress={signUp}>
                    <Text style={BUTTON_TEXT}>Register</Text>
                </TouchableOpacity>
            )}
            <TouchableOpacity onPress={goToLogin}>
                <Text style={[LINK,{marginTop: 26, marginBottom: 18}]}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goHome}>
                <Text style={LINK}>Login as guest</Text>
            </TouchableOpacity>

            
        </View>
        </SafeAreaView>
    );
}