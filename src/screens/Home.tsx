import { Text, StyleSheet, TextInput, TouchableOpacity, View, ViewStyle } from "react-native"
import { FunctionComponent } from "react"
import { ScreenName } from "../routes/screenNames"
import { ScreenProps } from "../screens/screenProps"
import { useHomeUIStore } from "../store/screensStore/homeUI"
import { useStoryStore } from "../store/storyStore/storyStore"
import { useAuthentication } from "../utils/hooks/useAuthentication"
import { User } from "firebase/auth"
import MainFooter from "../components/shared/MainFooter/MainFooter"
import { SafeAreaView } from "react-native-safe-area-context"
import { colorPalette } from "../theme/colors"
import { useGlobalUIStore } from "../store/screensStore/globalUIStore"
import { HomeSection } from "./sections/HomeSection"
import { GenAISection } from "./sections/GenAISection"
import { SearchSection } from "./sections/SearchSection"
import { FavoritesSection } from "./sections/FavoritesSection"
import { ProfileSection } from "./sections/ProfileSection"

const MAIN_CONTAINER: ViewStyle = {
    flex: 1,
    backgroundColor: colorPalette.ultraWhite
}

export const Home: FunctionComponent<ScreenProps> = (props) => {

    const { navigation } = props
    const { setCatName, catName } = useHomeUIStore()
    const { generateStory } = useStoryStore()
    const { user } = useAuthentication();

    const { isViewingFavorites, isViewingGenAI, isViewingHome, isViewingProfile, isViewingSearch } = useGlobalUIStore( (state) => ({
        isViewingFavorites: state.isViewingFavorites,
        isViewingGenAI: state.isViewingGenAI,
        isViewingHome: state.isViewingHome,
        isViewingProfile: state.isViewingProfile,
        isViewingSearch: state.isViewingSearch
    }))

    return (
        <SafeAreaView style={MAIN_CONTAINER}>
            {isViewingHome() && <HomeSection />}
            {isViewingGenAI() && <GenAISection/>}
            {isViewingSearch() && <SearchSection />}
            {isViewingFavorites() && <FavoritesSection />}
            {isViewingProfile() && <ProfileSection/>}
            <MainFooter />
        </SafeAreaView>
    )
}
