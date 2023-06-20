import { View, Text, ViewStyle, TextStyle } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { colorPalette } from '../../theme/colors';

interface DropdownProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    options: any;
    onSelect: (value: any) => void;
    selectedOption: any;
    label?: string;
    containerStyle?: ViewStyle;
    labelStyle?: TextStyle;
}
const MAIN_CONTAINER: ViewStyle = {
    width: 320, 
    height: 48, 
    borderRadius: 0, 
    borderBottomColor: colorPalette.black, 
    borderStyle: 'solid', 
    borderWidth: 1, 
    backgroundColor: "transparent",
}
const LABEL: TextStyle = {
    marginBottom: 9,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 21,
    color: colorPalette.black
}
export const Dropdown = (props) => {
    const { isOpen, setIsOpen, options, onSelect, selectedOption } = props;

    const onValueChange = (value) => {
        onSelect(value())
    }
    return (
        <View style={props?.containerStyle}>
            {props?.label && <Text style={[LABEL,props?.labelStyle]}>{props?.label}</Text>}
            <DropDownPicker
                open={isOpen}
                value={selectedOption}
                items={options}
                setOpen={setIsOpen}
                setValue={onValueChange}
                style={MAIN_CONTAINER}
                dropDownContainerStyle={{ width: 320, borderRadius: 0, borderBottomColor: colorPalette.black, borderStyle: 'solid', borderWidth: 1, backgroundColor: colorPalette.softGrey}}
            />
        </View>
    )
}