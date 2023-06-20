import { View, Text } from 'react-native'
import React from 'react'
import * as RootNavigation  from "../../routes/RootNavigation";
import { ScreenName } from '../../routes/screenNames';
import { Button } from '../../components/basics/index';

export const ProfileSection = (props) => {
    const { navigate } = props
    //@ts-ignore
    const goToLogin = () => RootNavigation.navigate(ScreenName.SIGN_IN)
    return (
        <View>
            <Text>ProfileSection</Text>
            <Button onPress={goToLogin} label={"Go to login"}/>
        </View>
    )
}

