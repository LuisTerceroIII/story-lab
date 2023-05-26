import { SafeAreaView } from "react-native-safe-area-context"
import { Text, View, StyleSheet, Button } from "react-native"
import { FunctionComponent } from "react"
import { ScreenName } from "../routes/screenNames"
import { ScreenProps } from "./screenProps"

export const Home: FunctionComponent<ScreenProps> = (props) => {
    const { navigation } = props
    return (
        <SafeAreaView>
           <View style={styles.container}>
                <Button title="Click me" onPress={() => navigation.navigate(ScreenName.NEW_HISTORY, {
                    name: 'Ronalda'
                })} />   
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });