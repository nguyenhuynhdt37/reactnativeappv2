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
                    <Text className='text-[1.1rem] text-white font-rubik-bold' numberOfLines={1}>$2.500</Text>
                    <Image source={icons.heart} className='size-3.5' />
                </View>

            </View>
        </TouchableOpacity >
    )
}
export const Cards = ({ onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} className='flex-1 mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative'>
            <View className='flex-row items-center bg-white/90 px-3 py-1 absolute top-5 right-5 rounded-full z-50'>
                <Image source={icons.star} className='size-3.5' />
                <Text className='text-xs font-rubik-bold text-primary-300 ml-0.5'>4.4</Text>
            </View>
            <Image source={images.newYork} className='w-full h-40 object-cover rounded-lg' />
            <View className='mt-2'>
                <Text className='text-base text-black-300 font-rubik-extrabold' numberOfLines={1}>Cozy Studio</Text>
                <Text className='text-xs text-black-100 py-1 font-rubik'>Tokio, Japan</Text>
                <View className='flex-row w-full items-center justify-between'>
                    <Text className="text-lg font-rubik-bold text-primary-300">$1200</Text>
                    <Image source={icons.heart} className='size-4' tintColor={'#191d31'} />
                </View>
            </View>
        </TouchableOpacity>
    )
}


