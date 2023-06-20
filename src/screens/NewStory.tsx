import { View, Text, Button } from 'react-native'
import React, { FunctionComponent } from 'react'
import { ScreenProps } from '../screens/screenProps'
import { ScreenName } from '../routes/screenNames'
import { useGenAIStore } from '../store/screensStore/gen-ai'



export const NewStory: FunctionComponent<ScreenProps> = (props) => {
    const { navigation } = props
    const { generatedStory } = useGenAIStore(state => ({ generatedStory: state.generatedStory }))
    return (
        <View>
            <Text>{generatedStory?.title}</Text>
            <Text>{generatedStory?.category}</Text>
            <Text>{generatedStory?.content}</Text>
            <Button title="Click me" onPress={() => navigation.navigate(ScreenName.HOME)} />   
        </View>
    )
}
