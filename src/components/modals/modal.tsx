import { View, Text } from 'react-native'
import React, { FunctionComponent } from 'react'
import Modal from "react-native-modal";
import { palette } from '../../theme/colors';

interface ModalProps {
    isVisible?: boolean
    backdropColor?: palette
    backdropOpacity?: 0 | 0.5 | 1
    animationIn?: "zoomInDown" | "slideInLeft"
    animationOut?: "zoomOutUp" | "slideOutRight"
    animationInTiming?: number
    animationOutTiming?: number
    backdropTransitionInTiming?: number
    backdropTransitionOutTiming?: number
    children?: React.ReactNode
}

const GenericModal: FunctionComponent<ModalProps> = (props) => {

    const { isVisible, backdropColor, backdropOpacity, animationIn, animationOut, animationInTiming, animationOutTiming, backdropTransitionInTiming, backdropTransitionOutTiming, children} = props

    return (
        <View>
            <Modal
                isVisible={isVisible}
                backdropColor={backdropColor}
                backdropOpacity={backdropOpacity}
                animationIn={animationIn}
                animationOut={animationOut}
                animationInTiming={animationInTiming}
                animationOutTiming={animationOutTiming}
                backdropTransitionInTiming={backdropTransitionInTiming}
                backdropTransitionOutTiming={backdropTransitionOutTiming}
            >
                {children}
            </Modal>
        </View>
    )
}

export default Modal