import { View, Text, StyleSheet } from 'react-native'
import React, { FunctionComponent } from 'react'
import { Image } from 'expo-image'
import { shadows } from '../util/styles/shadows'
import { Story as StoryType } from '../util/model'

const blurhash = "'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';"

interface StoryProps {
    story: StoryType
}

export const Story: FunctionComponent<StoryProps> = ({story}) => {
  return (
    <View style={[styles.container]}>
        <Text style={styles.title}>{story?.title}</Text>
        <Image
            source={story?.coverImage?.url}
            placeholder={blurhash}
            contentFit="cover"
            transition={400}
            priority='high'
            placeholderContentFit='cover'
            style={styles.image} />
        <Text style={styles.story}>{story?.content?.trimStart()}</Text>
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
    },
    title: {
        fontSize: 24,
        marginTop: 10
    },
    image: {
        width: 170, 
        height: 170,
        borderRadius: 200,
        marginTop: 20,
        marginBottom: 20,
    },
    story : {
        fontSize: 16,
        paddingHorizontal: 2,
        paddingBottom: 20
    }

})