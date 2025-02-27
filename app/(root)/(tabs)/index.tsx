import { Cards, FeaturedCards } from "@/components/Card";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/GlobalProvider";
import { Link } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const { user } = useGlobalContext()
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mx-5">
        <View className="flex-row justify-between items-center mt-5">
          <View className="flex-row items-center">
            <Image className="size-12 rounded-full" source={images.avatar} />
            <View className="ml-2">
              <Text className="text-xs font-rubik text-black-100">Good Morning!</Text>
              <Text className="text-base text-black-300 font-rubik-medium">Mr. Huynh</Text>
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
        <View className="gap-5 flex-row">
          <FeaturedCards />
          <FeaturedCards />
          <FeaturedCards />
          <FeaturedCards />
          <FeaturedCards />
        </View>
        <View className="my-5">
          <View className="flex-row justify-between items-center">
            <Text className="text-xl font-rubik-bold text-black-300">Our Recommendation</Text>
            <TouchableOpacity>
              <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row gap-5">
          <Cards />
          <Cards />
        </View>
      </View >
    </SafeAreaView >
  );
};
export default Index;
