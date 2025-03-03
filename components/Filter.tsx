import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { ScrollView } from 'react-native'
import { categories } from '@/constants/data'

const Filter = () => {
    const params = useLocalSearchParams<{ filter?: string }>()
    const router = useRouter()
    const [selectedCategory, setSelectedCategory] = useState(params.filter || 'All')
    const handleCategory = (category: string) => {
        if (category === selectedCategory) {
            setSelectedCategory('All')
            router.setParams({ filter: 'All' })
            return
        }
        setSelectedCategory(category)
        router.setParams({ filter: category })
    }
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='mt-3 mb-2'>
            {categories.map((item, index) => (
                <TouchableOpacity onPress={() => handleCategory(item?.category)} className={`px-4 py-2 rounded-full mx-1 ${selectedCategory === item?.category ? 'bg-primary-300 ' : 'bg-white border border-primary-200'}`} key={index}>
                    <Text className={`text-sm ${selectedCategory === item?.category ? 'text-white font-rubik-bold mt-0.5' : 'text-black-300 font-rubik'}`}>{item?.title}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default Filter