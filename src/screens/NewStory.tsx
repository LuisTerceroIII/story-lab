import { View, Text, SafeAreaView, TextStyle, ViewStyle, TouchableOpacity, ScrollView } from 'react-native'
import React, { FunctionComponent } from 'react'
import { ScreenProps } from '../screens/screenProps'
import { ScreenName } from '../routes/screenNames'
import { useGenAIStore } from '../store/screensStore/gen-ai'
import { Button } from '../components/basics'
import { Image, ImageStyle } from 'expo-image'
import { colorPalette } from '../theme/colors'

const MAIN_CONTAINER: ViewStyle = {
    marginHorizontal: 20,
    marginTop: 70
}
const TITLE_CONTAINER: ViewStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20

}
const TITLE: TextStyle = {
    fontWeight: '400',
    fontSize: 22,
    lineHeight: 26,
}
const LIKE_ICON: ImageStyle = {
    width: 25,
    height: 25
}
const CATEGORY_CONTAINER: ViewStyle = {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
}
const CATEGORY: TextStyle = {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 21,
    color: colorPalette.hardGrey
}
const CATEGORY_ICON: ImageStyle = {
    width: 50,
    height: 50,
    marginRight: 15
}
const STORY: TextStyle = {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 33,
    color: colorPalette.black,
    marginTop: 25
}


export const NewStory: FunctionComponent<ScreenProps> = (props) => {
    const { navigation } = props
    const { generatedStory } = useGenAIStore(state => ({ generatedStory: state.generatedStory }))
    console.log(generatedStory?.content)
    return (
        <SafeAreaView style={MAIN_CONTAINER}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={TITLE_CONTAINER}>
                    <Text style={TITLE}>{generatedStory?.title}</Text>
                    <TouchableOpacity>
                        <Image source={require('/Users/hybeans/Desktop/Luis/StoryLab/assets/icons/Others/heart_white_black_border.png')} style={LIKE_ICON} />
                    </TouchableOpacity>
                </View>
                <View style={CATEGORY_CONTAINER}>
                    <Image source={require('/Users/hybeans/Desktop/Luis/StoryLab/assets/icons/Categories/bedtime_stories_black.png')} style={CATEGORY_ICON} />
                    <Text style={CATEGORY}>{generatedStory?.category}</Text>
                </View>
                <Text style={STORY}>{generatedStory?.content?.trim().replace(/^\s+/, '')}</Text>
                <Button label="Go home" onPress={() => navigation.navigate(ScreenName.HOME)} />   
            </ScrollView>
        </SafeAreaView>
    )
}
