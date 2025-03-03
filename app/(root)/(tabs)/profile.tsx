import {
  View,
  Text,
  ScrollView,
  Image,
  ImageSourcePropType,
  Alert,
} from "react-native";
import React from "react";
import { logout } from "@/lib/appwrite";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { TouchableOpacity } from "react-native";
import { settings } from "@/constants/data";
import { useGlobalContext } from "@/lib/GlobalProvider";
interface ISettingItem {
  icon: ImageSourcePropType;
  title: string;
  showArrow?: boolean;
  onPress?: () => void;
  textStyle?: string;
}
const SettingItem = ({
  icon,
  title,
  onPress,
  showArrow = true,
  textStyle,
}: ISettingItem) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="py-3 flex-row items-center justify-between"
    >
      <View className="flex-row gap-3 items-center">
        <Image className="size-6" source={icon} />
        <Text
          className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}
        >
          {title}
        </Text>
      </View>
      {showArrow && <Image source={icons.rightArrow} className="size-5" />}
    </TouchableOpacity>
  );
};

const Profile = () => {
  const { user, refetch } = useGlobalContext();
  const handleLogout = async () => {
    const res = await logout();
    if (res) {
      Alert.alert("Logout", "You have been logged logout successfully");
      refetch();
    } else {
      Alert.alert("Logout", "An error occurred while logging out");
    }
  };
  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 px-7"
      >
        <View className="mt-5 flex-row justify-between">
          <Text className="text-xl font-rubik-bold ">Profile</Text>
          <Image source={icons.bell} className="size-6" />
        </View>
        <View className="mt-5 items-center">
          <View className="flex-row justify-center relative mt-5">
            <Image
              className="size-44 rounded-full "
              source={{ uri: user?.avatar }}
            />
            <TouchableOpacity className="">
              <Image
                source={icons.edit}
                className="absolute bottom-0 right-0 w-8 h-8"
              />
            </TouchableOpacity>
          </View>
          <Text className="text-2xl font-rubik-bold mt-5">{user?.name}</Text>
        </View>
        <View className="mt-10">
          <SettingItem
            icon={icons.calendar}
            title="MyBookings"
            showArrow
            textStyle=""
          />
          <SettingItem
            icon={icons.wallet}
            title="Payments"
            showArrow
            textStyle=""
          />
        </View>
        <View className="mt-5 pt-5 border-t border-primary-200">
          {settings.slice(2).map((setting, index) => (
            <SettingItem key={index} {...setting} />
          ))}
        </View>
        <View className="mt-5 pt-5 border-primary-200">
          <SettingItem
            icon={icons.logout}
            title="Logout"
            textStyle="text-danger"
            showArrow={false}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
