import { View, StyleSheet, FlatList } from 'react-native'
import React, { FunctionComponent } from 'react'
import { ScreenProps } from '../screens/screenProps'
import { useInteractionsStore } from '../store/userStore/interactionsStore'
import { StoryMiniCard } from '../components/index'

export const FavoritesScreen: FunctionComponent<ScreenProps> = (props) => {

    const { likedStories } = useInteractionsStore()

    const renderSeparator = () => {
        return <View style={{ height: 20 }} />;
      };

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.scrollContainer}
                data={likedStories()}
                numColumns={2}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={renderSeparator}
                renderItem={({ item, index }) => (
                    <StoryMiniCard key={item.id} story={item} containerStyle={{marginRight: index % 2 !== 0 ? 0 : 20}} />
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
        justifyContent: 'center',
        paddingHorizontal: 5,
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