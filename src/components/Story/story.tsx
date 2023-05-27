import { View, Text, StyleSheet } from 'react-native'
import React, { FunctionComponent } from 'react'
import { Image } from 'expo-image'
import { Story as StoryType} from '../../../types/types'
import { shadows } from '../../util/styles/shadows'

const blurhash = "'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';"

interface StoryProps {
    story: StoryType
}

export const Story: FunctionComponent<StoryProps> = ({story}) => {
  return (
    <View style={[styles.container]}>
        <Text style={styles.title}>{story?.title}</Text>
        <Image
            source={story?.imgURL}
            placeholder={blurhash}
            contentFit="contain"
            transition={400}
            priority='high'
            placeholderContentFit='contain'
            style={styles.image} />
        <Text style={styles.story}>{story?.story?.trimStart()}</Text>
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
        ...shadows.shadow
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10
    },
    image: {
        width: 200, 
        height: 200,
    },
    story : {
        fontSize: 16,
        paddingHorizontal: 20,
        paddingBottom: 20
    }

})