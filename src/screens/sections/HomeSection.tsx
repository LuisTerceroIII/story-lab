import { View, Text, FlatList, StyleSheet, ActivityIndicator, ViewStyle, TextStyle, TouchableOpacity, ScrollView } from 'react-native'
import React, { useMemo } from 'react'
import { StoryMiniCard } from '../../components'
import { useStoryStore } from '../../store/storyStore/storyStore'
import { Image } from 'expo-image'
import { colorPalette } from '../../theme/colors'
import { StoriesCategories } from '../../utils/constant'
import { SafeAreaView } from 'react-native-safe-area-context'

const TITLE_CONTAINER: ViewStyle = {
    flexDirection: 'row',
    marginBottom: 43,
    marginTop: 27,
    marginHorizontal: 20,

}
const TITLE: TextStyle = {
    fontSize: 36,
    fontWeight: '400',
    width: 220,
    marginRight: 20,
}
const CATEGORIES_CONTAINER: ViewStyle = {
    flexDirection: 'row',
    marginLeft: 13,
    paddingRight: 20,
}
const SELECTED_CATEGORY: ViewStyle = {
    borderRadius: 20,
    backgroundColor: colorPalette.darkBlue,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 21
}
const UNSELECTED_CATEGORY: ViewStyle = {
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 21

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


export const HomeSection = () => {

    const { loadingStory, getFilteredStories, selectedCategory, setSelectedCategory} = useStoryStore()

    const story = ({ item, index }) => {
        return <View style={CARD_CONTAINER}>
            	{loadingStory ?
                	<ActivityIndicator size="large" color="#00ff00" /> : (
                	<StoryMiniCard story={item} containerStyle={{alignSelf: "center"}}/>
            	)}
        	</View>
    }
    const renderSeparator = () => {
        return <View style={{ height: 20 }} />
    }
    const TitleAndCategorySelector = useMemo(() => {
            return (
                <View>
                    <View style={TITLE_CONTAINER}>
                        <Text style={TITLE}>Hello, Welcome to Magic Tell</Text>
                        <Image
                            source={{uri: "/Users/hybeans/Desktop/Luis/StoryLab/assets/logo.png"}}
                            style={{ width: 90, height: 90 }}
                            contentFit='contain'
                            />
                    </View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={Object.values(StoriesCategories)}
                        contentContainerStyle={CATEGORIES_CONTAINER}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={() => setSelectedCategory(item)} style={[item == selectedCategory ? SELECTED_CATEGORY : UNSELECTED_CATEGORY]}>
                                <Text style={item == selectedCategory ? SELECTED_CATEGORY_TEXT : UNSELECTED_CATEGORY_TEXT}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )
    }, [selectedCategory])
    const StoriesList = useMemo(() => {
        return (
            <FlatList
                ListHeaderComponent={TitleAndCategorySelector}
                data={getFilteredStories()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={renderSeparator}
                renderItem={story}
            />
        )
    }, [selectedCategory])
    return (
            <FlatList
                data={[]}
                renderItem={() => null}
                contentContainerStyle={{ flexGrow: 1, backgroundColor: colorPalette.ultraWhite }}
                ListHeaderComponent={StoriesList}
            />
    )
}