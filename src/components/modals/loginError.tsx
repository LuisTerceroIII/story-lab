import { View, Text, TouchableOpacity, ViewStyle, ImageStyle } from 'react-native'
import React, { FunctionComponent } from 'react'
import { useGlobalUIStore } from '../../store/screensStore/globalUIStore'
import Modal from './modal'
import { Image } from 'expo-image'

const MAIN_CONTAINER: ViewStyle = {
    width: "100%",
    height: "40%",
    backgroundColor: 'white',
}
const LOGO: ImageStyle = {
    width: 220,
    height: 212,
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
                <Text>Login Error</Text>
                <Text>{error?.message}</Text>
                <Image
                    source={{uri: "../../assets/logo.png"}}
                    contentFit="cover"
                    transition={400}
                    priority='high'
                    placeholderContentFit='cover'
                    style={LOGO} />
                <TouchableOpacity onPress={closeModal}>
                    <Text>Close</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default LoginError