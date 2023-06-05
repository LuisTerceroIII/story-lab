import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import React, { FunctionComponent } from 'react'
import { ScreenProps } from '../screens/screenProps'
import { useStoryStore } from '../store/storyStore/storyStore'
import { StoryMiniCard } from '../components/index'

export const StoriesScreen: FunctionComponent<ScreenProps> = (props) => {

    const { loadingStory, getShuffleStories} = useStoryStore()

    const story = ({ item, index }) => {
        return <View style={styles.container}>
            	{loadingStory ?
                	<ActivityIndicator size="large" color="#00ff00" /> : (
                	<StoryMiniCard story={item} containerStyle={{marginRight: index % 2 !== 0 ? 0 : 20}}/>
            	)}
        	</View>
	
    }
    const renderSeparator = () => {
        return <View style={{ height: 20 }} />;
      };
    
    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.scrollContainer}
                data={getShuffleStories()}
                numColumns={2}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={renderSeparator}
                renderItem={story}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
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