import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { Models } from 'react-native-appwrite'
interface Props {
    onPress?: () => void
    item?: Models.Document
}
export const FeaturedCards = ({ onPress, item }: Props) => {
    // console.log(item);

    return (
        <TouchableOpacity onPress={onPress} className='relative items-start w-60 h-80'>
            <Image source={{ uri: item?.image }} className='size-full rounded-2xl' />
            <Image source={images.cardGradient} className='size-full rounded-2xl absolute bottom-0' />
            <View className='flex-row items-center bg-white/90 px-3 py-1 absolute top-5 right-5 rounded-full'>
                <Image source={icons.star} className='size-3.5' />
                <Text className='mt-0.5 text-xs font-rubik-bold text-primary-300 ml-1'>{item?.ratting}</Text>
            </View>
            <View className='absolute bottom-5 inset-x-5'>
                <Text className='text-[1.1rem] text-white font-rubik-extrabold' numberOfLines={1}>{item?.name}</Text>
                <Text className='text-base text-white font-rubik'>{item?.address}</Text>
                <View className='flex-row items-center justify-between'>
                    <Text className='text-[1.1rem] text-white font-rubik-bold' numberOfLines={1}>${item?.price}</Text>
                    <Image source={icons.heart} className='size-3.5' />
                </View>

            </View>
        </TouchableOpacity >
    )
}
export const Cards = ({ onPress, item }: Props) => {
    console.log('card item', item);

    return (
        <TouchableOpacity onPress={onPress} className='flex-1 mt-4  rounded-lg overflow-hidden bg-white shadow-xl shadow-black-100/70 relative'>
            <View className='flex-row items-center bg-white/90 px-3 py-1 absolute top-6 right-5 rounded-full z-50'>
                <Image source={icons.star} className='size-3.5' />
                <Text className='text-xs mt-0.5 font-rubik-bold text-primary-300 ml-0.5'>4.4</Text>
            </View>
            <Image source={{ uri: item?.image }} className='w-full h-44 object-cover' />
            <View className='mt-2 py-4 px-3'>
                <Text className='text-base text-black-300 font-rubik-extrabold' numberOfLines={1}>{item?.name}</Text>
                <Text className='text-xs text-black-100 py-1 font-rubik'>{item?.address}</Text>
                <View className='flex-row w-full items-center justify-between'>
                    <Text className="text-lg font-rubik-bold text-primary-300">${item?.price}</Text>
                    <Image source={icons.heart} className='size-4' tintColor={'#191d31'} />
                </View>
            </View>
        </TouchableOpacity>
    )
}


