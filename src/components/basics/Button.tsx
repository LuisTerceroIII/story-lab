import { View, Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native'
import React, { FunctionComponent } from 'react'
import { colorPalette } from '../../theme/colors'
interface ButtonProps {
    onPress: () => void
    label: string
    containerStyle?: ViewStyle
    textStyle?: TextStyle
}
const MAIN_CONTAINER: ViewStyle = {
    width: 147,
    height: 48,
    borderRadius: 10,
    borderColor: colorPalette.black,
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: colorPalette.ultraWhite,
    justifyContent: 'center',
    alignItems: 'center',


}
const LABEL: TextStyle = {
    fontWeight: '400',
    fontSize: 20,
    color: colorPalette.black,
}
export const Button: FunctionComponent<ButtonProps> = (props) => {
    const { onPress, label, containerStyle, textStyle } = props
    return (
        <TouchableOpacity onPress={onPress} style={[MAIN_CONTAINER,containerStyle]}>
            <Text style={[LABEL, textStyle]}>{label}</Text>
        </TouchableOpacity>
    )
}