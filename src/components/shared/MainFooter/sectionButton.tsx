import { View, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React, { FunctionComponent } from 'react'
import { colorPalette } from '../../../theme/colors'
import { Image } from 'expo-image'

interface SectionProps {
    selectedIcon: string
    unselectedIcon: string
    isSelected: boolean
    onPress: () => void
}
const SELECTED_CONTAINER: ViewStyle = {
    width: 48,
    height: 48,
    backgroundColor: colorPalette.softGrey,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
}
const UNSELECTED_CONTAINER: ViewStyle = {
    width: 48,
    height: 48,
    backgroundColor: "transparent",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
}
const SectionButton: FunctionComponent<SectionProps> = (props) => {

    const { selectedIcon, unselectedIcon, isSelected, onPress } = props

    return (
        <TouchableOpacity onPress={onPress} style={isSelected ? SELECTED_CONTAINER : UNSELECTED_CONTAINER}>
            <Image
                source={{uri: isSelected ? selectedIcon : unselectedIcon}}
                style={{width: 30, height: 30}}
                contentFit='contain'
            />
        </TouchableOpacity>
    )
}

export default SectionButton