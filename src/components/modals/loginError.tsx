import { View, Text, TouchableOpacity, ViewStyle, ImageStyle, TextStyle } from 'react-native'
import React, { FunctionComponent } from 'react'
import { useGlobalUIStore } from '../../store/screensStore/globalUIStore'
import Modal from './modal'
import { Image } from 'expo-image'
import { colorPalette } from '../../theme/colors'

const MAIN_CONTAINER: ViewStyle = {
    width: "100%",
    height: "60%",
    borderRadius: 20,
    backgroundColor: colorPalette.ultraWhite,
    justifyContent: 'center',
    alignItems: 'center',
}
const LOGO: ImageStyle = {
    width: 220,
    height: 220,
}
const TITLE: TextStyle = {
    fontSize: 27,
    fontWeight: '400',
    marginBottom: 10
}
const BUTTON: ViewStyle = {
    width: 147,
    height: 48,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colorPalette.black,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30
}
const BUTTON_TEXT: TextStyle = {
    fontSize: 15,
    fontWeight: '400',
    color: colorPalette.black
}
const MESSAGE: TextStyle = {
    fontSize: 15,
    fontWeight: '400',
    color: colorPalette.hardGrey,
    textAlign: 'center',
}
interface LoginErrorProps {
    error: any
}
const LoginError: FunctionComponent<LoginErrorProps> = (prop) => {
    const { error } = prop
    const { modalIsOpen, closeModal } = useGlobalUIStore()
    return (
        <Modal isVisible={modalIsOpen}>
            <View style={MAIN_CONTAINER}>
                <Text style={TITLE}>Login Error</Text>
                <Image
                    source={{uri: "/Users/hybeans/Desktop/Luis/StoryLab/assets/images/login.png"}}
                    contentFit="cover"
                    transition={400}
                    priority='high'
                    placeholderContentFit='cover'
                    style={LOGO} />
                <Text style={MESSAGE}>{error?.message}</Text>
                <TouchableOpacity onPress={closeModal} style={BUTTON}>
                    <Text style={BUTTON_TEXT}>Close</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default LoginError