import { View, Text, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'

const NoResult = () => {
    return (
        <View className='items-center  my-5'>
            <Image className='w-11/12 h-80' source={images.noResult} />
            <Text className='text-2xl font-rubik-bold  text-black-300'>No Results</Text>
            <Text className='text-base text-black-100 mt-2 '>
                We couldn't find any results
            </Text>
        </View>
    )
}

export default NoResult