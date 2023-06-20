import { View, Text, TextInput as Input, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { colorPalette } from '../../theme/colors'

const CONTAINER: ViewStyle = {
    height: 48,
    borderBottomColor: colorPalette.black,
    borderStyle: 'solid',
    borderWidth: 1,
    width: 320
}
const LABEL: TextStyle = {
    marginBottom: 9,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21,
    color: colorPalette.black
}
const TEXT_AREA: ViewStyle = {
    height: 245,
    zIndex: 1
}
export const TextInput = (props) => {
    return (
        <View style={props?.containerStyle}>  
            {props?.label && <Text style={[LABEL,props?.labelStyle]}>{props?.label}</Text>}
            <Input style={[CONTAINER, props?.area && TEXT_AREA]} {...props}/>
        </View>

    )
}
