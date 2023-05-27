import { View, Text, Button, StyleSheet } from 'react-native'
import React, { FunctionComponent } from 'react'
import { ScreenProps } from './screenProps'
import { useStoryStore } from '../store/storyStore/storyStore'

export const Story: FunctionComponent<ScreenProps> = (props) => {

    const { actionStory, prevStory, nextStory, hasPrevStory, hasNextStory } = useStoryStore()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{actionStory?.title}</Text>
            <Text>{actionStory?.story}</Text>
            <View style={styles.titleContainer}>
                {hasPrevStory() && <Button title="prev" onPress={prevStory} />}
                {hasNextStory() && <Button title="next" onPress={nextStory} />}
            </View>
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
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
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