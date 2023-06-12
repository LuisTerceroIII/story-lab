import { View, Text, ViewStyle } from 'react-native'
import React from 'react'
import { useGlobalUIStore } from '../../../store/screensStore/globalUIStore'
import SectionButton from './sectionButton'
import { colorPalette } from '../../../theme/colors'

const MAIN_CONTAINER: ViewStyle = {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
    height: 65,
    backgroundColor: colorPalette.black,
    borderRadius: 40,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 40
}

const MainFooter = () => {

    const { goToFavorites, goToGenAI, goToHome, goToProfile, goToSearch, isViewingFavorites, isViewingGenAI, isViewingHome, isViewingProfile, isViewingSearch } = useGlobalUIStore( (state) => ({
        goToFavorites: state.goToFavorites,
        goToGenAI: state.goToGenAI,
        goToHome: state.goToHome,
        goToProfile: state.goToProfile,
        goToSearch: state.goToSearch,
        isViewingFavorites: state.isViewingFavorites,
        isViewingGenAI: state.isViewingGenAI,
        isViewingHome: state.isViewingHome,
        isViewingProfile: state.isViewingProfile,
        isViewingSearch: state.isViewingSearch
    }))
    return (
        <View style={MAIN_CONTAINER}>
            <SectionButton 
                isSelected={isViewingHome()}
                selectedIcon="/Users/hybeans/Desktop/Luis/StoryLab/assets/icons/Navigation/home_black.png"
                unselectedIcon="/Users/hybeans/Desktop/Luis/StoryLab/assets/icons/Navigation/home_white.png"
                onPress={goToHome}
                />
            <SectionButton
                isSelected={isViewingGenAI()}
                selectedIcon="/Users/hybeans/Desktop/Luis/StoryLab/assets/icons/Navigation/gen_story_black.png"
                unselectedIcon="/Users/hybeans/Desktop/Luis/StoryLab/assets/icons/Navigation/gen_story_white.png"
                onPress={goToGenAI}
                />
            <SectionButton
                isSelected={isViewingSearch()}
                selectedIcon="/Users/hybeans/Desktop/Luis/StoryLab/assets/icons/Navigation/search_black.png"
                unselectedIcon="/Users/hybeans/Desktop/Luis/StoryLab/assets/icons/Navigation/search_white.png"
                onPress={goToSearch}
                />
            <SectionButton
                isSelected={isViewingFavorites()}
                selectedIcon="/Users/hybeans/Desktop/Luis/StoryLab/assets/icons/Navigation/star_black.png"
                unselectedIcon="/Users/hybeans/Desktop/Luis/StoryLab/assets/icons/Navigation/star_white.png"
                onPress={goToFavorites}
                />
            <SectionButton
                isSelected={isViewingProfile()}
                selectedIcon="/Users/hybeans/Desktop/Luis/StoryLab/assets/icons/Navigation/user_black.png"
                unselectedIcon="/Users/hybeans/Desktop/Luis/StoryLab/assets/icons/Navigation/user_white.png"
                onPress={goToProfile}
                />
        </View>
    )
}

export default MainFooter