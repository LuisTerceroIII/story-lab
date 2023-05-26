import { View, Text, Button, SafeAreaView } from 'react-native'
import React, { FunctionComponent } from 'react'
import { ScreenProps } from './screenProps'
import { ScreenName } from '../routes/screenNames'


export const NewHistory: FunctionComponent<ScreenProps> = (props) => {
    const { navigation } = props
    const { name } = props.route.params
    return (
        <SafeAreaView>
            <View>
                <Text>{name}</Text>
                <Button title="Click me" onPress={() => navigation.navigate(ScreenName.Home)} />   
            </View>
        </SafeAreaView>
    )
}
