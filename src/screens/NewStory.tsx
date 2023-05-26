import { View, Text, Button, SafeAreaView } from 'react-native'
import React, { FunctionComponent } from 'react'
import { ScreenProps } from './screenProps'
import { ScreenName } from '../routes/screenNames'
import { useHomeUIStore } from '../store/screensStore/homeUI'


export const NewStory: FunctionComponent<ScreenProps> = (props) => {
    const { navigation } = props
    const { catName } = useHomeUIStore()
    return (
        <SafeAreaView>
            <View>
                <Text>La historia de hoy sera sobre: {catName}</Text>
                <Button title="Click me" onPress={() => navigation.navigate(ScreenName.HOME)} />   
            </View>
        </SafeAreaView>
    )
}
