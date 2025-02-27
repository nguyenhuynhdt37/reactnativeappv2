import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useCallback } from 'react'
import { router, useLocalSearchParams, usePathname } from 'expo-router'
import icons from '@/constants/icons'
import { useDebouncedCallback } from 'use-debounce'
const Search = () => {
    const path = usePathname()
    const debouncedSearch = useDebouncedCallback((text: string) => router.setParams({ query: text }), 500)
    const params = useLocalSearchParams<{ query?: string }>()
    const [search, setSearch] = React.useState(params.query || '')
    const handleSearch = (value: string) => {
        setSearch(value)
        debouncedSearch(value)
    }
    console.log(debouncedSearch);

    return (
        <View className='flex-row items-center justify-between w-full px-4 rounded-lg bg-accent-100 border border-primary-100 mt-5 py-2'>
            <View className='flex-1 flex-row items-center justify-start z-50'>
                <Image source={icons.search} className='size-5' />
                <TextInput placeholder='Search any thing ' value={search} onChangeText={handleSearch} className='text-xs font-rubik text-black-300 ml-2 flex-1' />
            </View>
            <TouchableOpacity>
                <Image source={icons.filter} className='size-6' />
            </TouchableOpacity>
        </View>
    )
}

export default Search