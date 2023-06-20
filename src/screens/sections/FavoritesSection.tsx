import { View, StyleSheet, FlatList, ViewStyle, TextStyle, ActivityIndicator, TouchableOpacity, Text } from 'react-native'
import React, { useMemo } from 'react'
import { useInteractionsStore } from '../../store/userStore/interactionsStore'
import { StoryMiniCard } from '../../components/index'
import { colorPalette } from '../../theme/colors'
import { useStoryStore } from '../../store/storyStore/storyStore'
import { MyStoriesCategory } from '../../types/models'

const TITLE: TextStyle = {
    fontSize: 36,
    fontWeight: '400',
    marginTop: 27,
    marginHorizontal: 20,
    marginBottom: 43,
}
const CATEGORIES_CONTAINER: ViewStyle = {
    flexDirection: 'row',
    marginLeft: 13,
    paddingRight: 20,
}
const SELECTED_CATEGORY: ViewStyle = {
    borderRadius: 20,
    backgroundColor: colorPalette.darkBlue,
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 21
}
const UNSELECTED_CATEGORY: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 21,
    width: 120,
    height: 40,
}
const SELECTED_CATEGORY_TEXT: TextStyle = {
    fontSize: 14,
    fontWeight: '500',
    color: colorPalette.ultraWhite,
    paddingHorizontal: 10,
}
const UNSELECTED_CATEGORY_TEXT: TextStyle = {
    fontSize: 14,
    fontWeight: '500',
    color: colorPalette.black,
    paddingHorizontal: 10,
}
const CARD_CONTAINER: ViewStyle = {
    flex: 1,
}

export const FavoritesSection = (props) => {

    const { likedStories, genAIStories } = useInteractionsStore()

    const { loadingStory, myStoriesCategorySelected, setMyStoriesFilter, filterByGenAIStories } = useStoryStore()

    const story = ({ item }) => {
        return <View style={CARD_CONTAINER}>
            	{loadingStory ?
                	<ActivityIndicator size="large" color="#00ff00" /> : (
                	<StoryMiniCard story={item} containerStyle={{alignSelf: "center"}}/>
            	)}
        	</View>
    }

    const TitleAndCategorySelector = useMemo(() => {
        return (
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <Text style={TITLE}>My stories</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={Object.values(MyStoriesCategory)}
                    contentContainerStyle={CATEGORIES_CONTAINER}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => setMyStoriesFilter(item)} style={[item == myStoriesCategorySelected ? SELECTED_CATEGORY : UNSELECTED_CATEGORY]}>
                            <Text style={item == myStoriesCategorySelected ? SELECTED_CATEGORY_TEXT : UNSELECTED_CATEGORY_TEXT}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            )
    }, [myStoriesCategorySelected])

    const renderSeparator = () => {
        return <View style={{ height: 20 }} />
    }

    const StoriesList = useMemo(() => {
        return (
            <FlatList
                ListHeaderComponent={TitleAndCategorySelector}
                data={filterByGenAIStories() ? genAIStories() :  likedStories()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={renderSeparator}
                renderItem={story}
            />
        )
    }, [myStoriesCategorySelected])

    return (
        <FlatList
                data={[]}
                renderItem={() => null}
                contentContainerStyle={{ flexGrow: 1, backgroundColor: colorPalette.ultraWhite }}
                ListHeaderComponent={StoriesList}
            />
    )
}