import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/GlobalProvider";
import { Redirect } from "expo-router";
import { useEffect } from "react";

const Singin = () => {
  const { isLogged, user, loading, refetch } = useGlobalContext();
  if (isLogged && !loading) {
    return <Redirect href="/" />;
  }
  console.log("isLogin", isLogged);

  const handleLogin = async () => {
    const result = await login();
    console.log("result login", result);
    if (!result) Alert.alert("error", "Login failed");
  };
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView contentContainerClassName="flex-1">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="cover"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to Restate
          </Text>
          <Text className="text-3xl font-rubik-bold text-center text-black-300 mt-2 ">
            Let's Get Your Clone {"\n"}
            <Text className="pt-10 text-primary-300 ">Your Ideal Hone</Text>
          </Text>
          <Text className="text-lg font-rubik text-center text-black-200 mt-10">
            Login to ReState with Google
          </Text>
          <TouchableOpacity
            className="bg-white items-center border-[0.1rem] border-[#f3f3f3] shadow-2xl  flex-row justify-center shadow-zinc-300 w-full py-4 mt-5 rounded-full"
            onPress={handleLogin}
          >
            <Image
              source={icons.google}
              className="w-5 h-5"
              resizeMode="contain"
            />
            <View className="">
              <Text className="ml-4 text-black-300 font-rubik-medium text-lg">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Singin;
