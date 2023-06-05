import { View, Text, Button, StyleSheet, ActivityIndicator, ScrollView } from 'react-native'
import React, { FunctionComponent } from 'react'
import { ScreenProps } from '../screens/screenProps'
import { useStoryStore } from '../store/storyStore/storyStore'
import { useInteractionsStore } from '../store/userStore/interactionsStore'
import { Story } from '../components/index'

export const StoryScreen: FunctionComponent<ScreenProps> = (props) => {

    const { actionStory, loadingStory } = useStoryStore()
    
    return (
        <View style={{backgroundColor: '#fff', flex: 1}}>
            <ScrollView contentContainerStyle={styles.container}>
            {loadingStory ? <ActivityIndicator size="large" color="#00ff00" /> : (
               <Story story={actionStory} />
            )}
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20
    },
    button: {
        width: 100,
        height: 40,
        borderWidth: 4,
        borderStyle: 'solid',
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    }
})