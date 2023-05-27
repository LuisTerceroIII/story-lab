import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native'
import React, { FunctionComponent } from 'react'
import { ScreenProps } from './screenProps'
import { useStoryStore } from '../store/storyStore/storyStore'
import { useInteractionsStore } from '../store/userStore/interactionsStore'
import { Story } from '../components/index'

export const StoryScreen: FunctionComponent<ScreenProps> = (props) => {

    const { actionStory, prevStory, nextStory, hasPrevStory, hasNextStory, loadingStory } = useStoryStore()
    const { storyIsInFavorites, addStoryToFavorites, removeStoryFromFavorites } = useInteractionsStore()
    
    return (
        <View style={styles.container}>
            {loadingStory ? <ActivityIndicator size="large" color="#00ff00" /> : (
               <Story story={actionStory} />
            )}
            <View style={styles.titleContainer}>
                {hasPrevStory() && !loadingStory && <Button title="prev" onPress={prevStory} />}
                {hasNextStory() && !loadingStory && <Button title="next" onPress={nextStory} />}
            </View>
            {storyIsInFavorites() ? (
                 <Button title="remove from favorites" onPress={removeStoryFromFavorites} /> 
            ): <Button title="add to favorites" onPress={addStoryToFavorites} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20
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
        marginTop: 30
    }
})