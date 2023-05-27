import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { Fragment, FunctionComponent, useMemo } from 'react'
import { ScreenProps } from './screenProps'
import { useInteractionsStore } from '../store/userStore/interactionsStore'
import { Story } from '../components/index'

export const Favorites: FunctionComponent<ScreenProps> = (props) => {

    const { likedStories } = useInteractionsStore()

    const renderSeparator = () => {
        return <View style={{ height: 40 }} />;
      };

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.scrollContainer}
                data={likedStories()}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={renderSeparator}
                renderItem={({ item }) => (
                    <Story key={item.id} story={item} />
                )}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#fff',
        flex: 1,
    },
    scrollContainer: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 25,
        paddingBottom: 40,
        paddingTop: 40,
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