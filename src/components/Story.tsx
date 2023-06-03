import { View, Text, StyleSheet, ScrollView, Button } from 'react-native'
import React, { FunctionComponent } from 'react'
import { Image } from 'expo-image'
import { shadows } from '../utils/styles/shadows'
import { Story as StoryType } from '../../types/model'
import { useStoryStore } from '../store/storyStore/storyStore'
import { useInteractionsStore } from '../store/userStore/interactionsStore'

const blurhash = "'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';"

interface StoryProps {
    story: StoryType
}

export const Story: FunctionComponent<StoryProps> = ({story}) => {

    const { getCategoryLabel } = useStoryStore()
    const { storyIsInFavorites, addStoryToFavorites, removeStoryFromFavorites } = useInteractionsStore()


    return (
        <View style={[styles.container]}>
            <Text style={styles.title}>{story?.title}</Text>
            <Text style={styles.category}>{getCategoryLabel(story?.category)}</Text>
            <Image
                source={story?.coverImage?.url}
                placeholder={blurhash}
                contentFit="cover"
                transition={400}
                priority='high'
                placeholderContentFit='cover'
                style={styles.image} />
            <Text style={styles.story}>{story?.content?.trimStart()}</Text>
            {storyIsInFavorites(story?.id) ? (
                 <Button title="remove from favorites" onPress={() => removeStoryFromFavorites(story?.id)} /> 
            ): <Button title="add to favorites" onPress={() => addStoryToFavorites(story?.id)} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1
    },
    title: {
        fontSize: 24,
        marginTop: 10
    },
    image: {
        width: 170, 
        height: 170,
        borderRadius: 200,
        marginTop: 15,
        marginBottom: 20,
    },
    category: {
        fontSize: 15,
        paddingTop: 10,
        color: '#999',
    },
    story : {
        fontSize: 16,
        paddingHorizontal: 2,
        paddingBottom: 20,
        lineHeight: 30,
    }

})