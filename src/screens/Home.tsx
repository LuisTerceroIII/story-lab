import { SafeAreaView } from "react-native-safe-area-context"
import { Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { FunctionComponent } from "react"
import { ScreenName } from "../routes/screenNames"
import { ScreenProps } from "./screenProps"
import { useHomeUIStore } from "../store/screensStore/homeUI"

export const Home: FunctionComponent<ScreenProps> = (props) => {
    const { navigation } = props
    const { setCatName, catName } = useHomeUIStore()

    const updateAndGoToHistory = () : void => {
        navigation.navigate(ScreenName.STORY)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Cat edition</Text>
            <TextInput onChangeText={setCatName} value={catName} style={styles.input} onSubmitEditing={updateAndGoToHistory}/>
            <TouchableOpacity onPress={updateAndGoToHistory} style={styles.button}><Text>Generate</Text></TouchableOpacity>
        </SafeAreaView>
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