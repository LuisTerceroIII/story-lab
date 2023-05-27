import { Text, StyleSheet, TextInput, TouchableOpacity, View } from "react-native"
import { FunctionComponent } from "react"
import { ScreenName } from "../routes/screenNames"
import { ScreenProps } from "./screenProps"
import { useHomeUIStore } from "../store/screensStore/homeUI"
import { useStoryStore } from "../store/storyStore/storyStore"

export const Home: FunctionComponent<ScreenProps> = (props) => {
    const { navigation } = props
    const { setCatName, catName } = useHomeUIStore()
    const { generateStory } = useStoryStore()

    const updateAndGoToHistory = () : void => {
        navigation.navigate(ScreenName.STORY)
        //generateStory(catName)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cat edition</Text>
            <TextInput onChangeText={setCatName} value={catName} style={styles.input} onSubmitEditing={updateAndGoToHistory}/>
            <TouchableOpacity onPress={updateAndGoToHistory} style={styles.button}><Text>Generate</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20
    },
    input: {
        width: 200,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
        marginTop: 10
    }
  });