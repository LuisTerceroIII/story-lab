import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { Fragment, FunctionComponent, useMemo } from 'react'
import { ScreenProps } from './screenProps'
import { useInteractionsStore } from '../store/userStore/interactionsStore'

export const Favorites: FunctionComponent<ScreenProps> = (props) => {

    const { likedStories } = useInteractionsStore()

    const favorites = useMemo(() => {
        return likedStories().map(story => {
           return (
            <Fragment key={story?.id}>
                <Text style={styles.title}>{story?.title}</Text>
                <Text>{story?.story?.trimStart()}</Text>
            </Fragment>
           )
        })
    },[likedStories()?.length])

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                {favorites}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    scrollContainer: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 25,
        paddingBottom: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
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