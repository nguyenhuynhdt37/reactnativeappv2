import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface IButton {
    className: string,
    onPress: () => void
    title: string
    font: string
}
const Button = ({ className, onPress, title }: IButton) => {
    return (
        <TouchableOpacity className={className} onPress={onPress}>
            <Text className={`text-center ${font}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button