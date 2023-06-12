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

const MAIN_CONTAINER: ViewStyle = {
    flex: 1,
    backgroundColor: colorPalette.ultraWhite
}

export const SearchScreen: FunctionComponent<ScreenProps> = (props) => {

    const { navigation } = props
    const { setCatName, catName } = useHomeUIStore()
    const { generateStory } = useStoryStore()
    const { user } = useAuthentication();

    console.log('user', user?.displayName)

    return (
        <SafeAreaView style={MAIN_CONTAINER}>
            
            <MainFooter />
        </SafeAreaView>
    )
}
