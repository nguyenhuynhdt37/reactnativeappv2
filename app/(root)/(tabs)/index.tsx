import { Cards, FeaturedCards } from "@/components/Card";
import Filter from "@/components/Filter";
import NoResult from "@/components/NoResult";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import { getLatestProperties, getProperties } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/GlobalProvider";
import { useAppwrite } from "@/lib/useAppwrite";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Button, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const { user } = useGlobalContext()
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
      limit: 6,
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
        <View className="mx-5">
          <View className="flex-row justify-between items-center mt-5">
            <View className="flex-row items-center">
              <Image className="size-12 rounded-full" source={{ uri: user?.avatar }} />
              <View className="ml-2">
                <Text className="text-xs font-rubik text-black-100">Good Morning!</Text>
                <Text className="text-base text-black-300 font-rubik-medium">{user?.name}</Text>
              </View>
            </View>
            <Image className="size-5" source={icons.bell} />
          </View>
          <Search />
          <View className="my-5">
            <View className="flex-row justify-between items-center">
              <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
              <TouchableOpacity>
                <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
              </TouchableOpacity>
            </View>
          </View>
          {
            latestPropertiesLoading ? <ActivityIndicator size={'large'} className="text-primary-300" /> : !LatestProperties || LatestProperties?.length === 0 ? < NoResult /> : (

              <FlatList horizontal bounces={false} keyExtractor={(item) => item?.$id} contentContainerClassName="flex-row gap-5" data={LatestProperties} renderItem={({ item }) => {
                return (
                  <FeaturedCards item={item} onPress={() => handleCardPress(item?.$id)} />
                )
              }} />
            )
          }
          <View className="my-5">
            <View className="flex-row justify-between items-center">
              <Text className="text-xl font-rubik-bold text-black-300">Our Recommendation</Text>
              <TouchableOpacity>
                <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
              </TouchableOpacity>
            </View>
            <Filter />
          </View>
        </View >
      )} />
    </SafeAreaView >
  );
};
export default Index;
