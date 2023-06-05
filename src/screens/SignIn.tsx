import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScreenProps } from '../screens/screenProps'
import { ScreenName } from '../routes/screenNames';
import { useAuthStore, useSignIn, useSetEmail, useSetPassword } from '../store/authStore/authStore';

export const SignInScreen: React.FC<ScreenProps> = ({ navigation }) => {

    const { email, password, error } = useAuthStore((state) => ({
        email: state.email,
        password: state.password,
        error: state.error,
    }));

    const signIn = async () => {
        await useSignIn()
        navigation.navigate(ScreenName.HOME);
    }

    return (
        <View style={styles.container}>
        <Text>Signup screen!</Text>
        {!!error && <View style={styles.error}><Text>{error}</Text></View>}
        <View style={styles.controls}>
            <TextInput
            placeholder='Email'
            style={styles.control}
            value={email}
            onChangeText={useSetEmail}
            />

            <TextInput
            placeholder='Password'
            style={styles.control}
            value={password}
            onChangeText={useSetPassword}
            secureTextEntry={true}
            />

            <TouchableOpacity style={styles.control} onPress={signIn}>
                <Text>Sign up</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  controls: {
    flex: 1,
  },

  control: {
    marginTop: 10
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  }
});