import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ParamListBase } from "@react-navigation/native"

export interface ScreenProps {
    navigation: NativeStackNavigationProp<ParamListBase>
    route: any
}