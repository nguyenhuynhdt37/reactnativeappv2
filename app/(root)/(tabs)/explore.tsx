import { Cards, FeaturedCards } from "@/components/Card";
import Filter from "@/components/Filter";
import NoResult from "@/components/NoResult";
import Search from "@/components/Search";
import Icons from "@/constants/icons";
import icons from "@/constants/icons";
import { getLatestProperties, getProperties } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/GlobalProvider";
import { useAppwrite } from "@/lib/useAppwrite";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Button, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Explore = () => {
  const routerElement: any = useRouter()
  const params = useLocalSearchParams<{ query?: string, filter?: string }>()
  const { data: LatestProperties, loading: latestPropertiesLoading } = useAppwrite({
    fn: getLatestProperties,
  })
  const { data: properties, loading, refetch } = useAppwrite({
    fn: getProperties,
    params: {
      filter: params.filter || 'All',
      query: params.query || '',
      limit: 6,
    },
    skip: true
  })
  useEffect(() => {
    refetch({
      filter: params.filter || 'All',
      query: params.query || '',
      limit: 20,
    })
  }, [params.filter, params.query])

  const handleCardPress = (id: string) => {
    routerElement.push(`/properties/${id}`);
  }

  return (
    <SafeAreaView className="flex-1 bg-white" >
      <FlatList contentContainerClassName="pb-32" columnWrapperClassName="flex-row gap-5 px-5" data={properties} ListEmptyComponent={
        loading ? <ActivityIndicator size={'large'} className="text-primary-300 mt-5" /> : <NoResult />
      } numColumns={2} keyExtractor={(item) => item?.$id} renderItem={({ item }: any) => (
        <Cards item={item} onPress={() => handleCardPress(item?.$id)} />
      )} ListHeaderComponent={() => (
        <View className="px-5">
          <View className="flex-row items-center justify-between mt-5">
            <TouchableOpacity className="flex-row bg-primary-200 rounded-full size-11 items-center justify-center" onPress={() => routerElement.back()}>
              <Image source={icons.backArrow} className="size-5" />
            </TouchableOpacity>
            <Text className="text-base mr-2 text-center font-rubik-medium text-black-300">
              Search for Your Ideal Home
            </Text>
            <Image source={icons.bell} className="size-6" />
          </View>
          <Search />
          <View className="mt-5">
            <Filter />
            <Text className="font-rubik-medium text-black-300 text-base mt-5">
              Found {properties?.length} properties
            </Text>
          </View>
        </View>
      )} />
    </SafeAreaView >
  );
};
export default Explore;
