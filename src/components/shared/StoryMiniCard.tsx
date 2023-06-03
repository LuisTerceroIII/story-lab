import { Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import React, { CSSProperties, FunctionComponent } from 'react'
import { Image } from 'expo-image'
import { shadows } from '../../utils/styles/shadows'
import { Story as StoryType } from '../../../types/model'
import { useStoryStore } from '../../store/storyStore/storyStore'
import { useNavigation } from '@react-navigation/native';
import { ScreenName } from '../../routes/screenNames'
import { RootStackParamList } from '../../routes/routes'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

const blurhash = "'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';"

interface StoryProps {
    story: StoryType
    containerStyle?: ViewStyle
}
type storyScreenProp = NativeStackNavigationProp<RootStackParamList, ScreenName.STORY>

export const StoryMiniCard: FunctionComponent<StoryProps> = ({story, containerStyle}) => {
    const { setActionStory, getCategoryLabel } = useStoryStore()
    const navigation = useNavigation<storyScreenProp>()

    const goToStory = () => {
        setActionStory(story?.id)
        navigation.navigate(ScreenName.STORY)
    }
    return (
        <TouchableOpacity style={[styles.container, containerStyle]} onPress={goToStory}>
            <Image
                source={story?.coverImage?.url}
                placeholder={blurhash}
                contentFit="cover"
                transition={400}
                priority='high'
                placeholderContentFit='contain'
                style={styles.image} />
            <Text style={styles.title} numberOfLines={1}>{story?.title}</Text>
            <Text style={styles.story}>{getCategoryLabel(story?.category)}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 170,
        height: 190,
        alignItems: 'center',
        ...shadows.shadow

    },
    title: {
        fontSize: 18,
        marginTop: 12,
        paddingHorizontal: 10,
    },
    image: {
        width: 170, 
        height: 115,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        top: 0,
        position: 'relative',
    },
    story : {
        fontSize: 15,
        paddingTop: 10,
        color: '#999',
    }

})