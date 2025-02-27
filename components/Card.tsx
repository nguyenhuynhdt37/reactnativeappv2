import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons'
interface Props {
    onPress?: () => void
}
export const FeaturedCards = ({ onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} className='relative items-start w-60 h-80'>
            <Image source={images.japan} className='size-full rounded-2xl' />
            <Image source={images.cardGradient} className='size-full rounded-2xl absolute bottom-0' />
            <View className='flex-row items-center bg-white/90 px-3 py-1 absolute top-5 right-5 rounded-full'>
                <Image source={icons.star} className='size-3.5' />
                <Text className='text-xs font-rubik-bold text-primary-300 ml-1'>4.4</Text>
            </View>
            <View className='absolute bottom-5 inset-x-5'>
                <Text className='text-[1.1rem] text-white font-rubik-extrabold' numberOfLines={1}>Mordem Apartments</Text>
                <Text className='text-base text-white font-rubik'>22 W 15th St, New York, NY</Text>
                <View className='flex-row items-center justify-between'>

                </View>
            </View>
        </TouchableOpacity >
    )
}
export const Cards = () => {
    return (
        <View>
            <Text>Card</Text>
        </View>
    )
}


