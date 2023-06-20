import { View, Text, ScrollView, ViewStyle, TextStyle, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { colorPalette } from '../../theme/colors'
import { NewStoryForm } from '../../components/screens/index'
import { useGenAIStore } from '../../store/screensStore/gen-ai'

const MAIN_CONTAINER: ViewStyle = {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
}
const TITLE: TextStyle = {
    fontSize: 24,
    fontWeight: '400',
    color: colorPalette.black,
    marginTop: 26,
    alignSelf: "center"
}
const INSTRUCTION: TextStyle = {
    fontSize: 15,
    lineHeight: 18,
    fontWeight: '400',
    textAlign: 'center',
    color: colorPalette.hardGrey,
    paddingHorizontal: 36,
    marginTop: 25
}
export const GenAISection = () => {
    const { loadingStory } = useGenAIStore()
    return (
        <ScrollView contentContainerStyle={MAIN_CONTAINER} showsVerticalScrollIndicator={false}>
            <Text style={TITLE}>Magic tell AI</Text>
            <Text style={INSTRUCTION}>Here you can create your own story with the help of artificial intelligence. Let your imagination soar and enjoy a unique experience!</Text>
            {loadingStory ? <ActivityIndicator color={colorPalette.darkBlue} size={'large'} style={{marginTop: 20}}/> : <NewStoryForm />}
        </ScrollView>
    )
}

