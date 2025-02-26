import { Link } from "expo-router";
import { View, Text } from "react-native";

const Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text className="text-2xl font-rubik">Welcome ReState</Text>
      <Link href={"/sign-in"}>SignIn</Link>
      <Link href={"/(root)/(tabs)/explore"}>Explore</Link>
      <Link href={"/(root)/(tabs)/profile"}>Profile</Link>
      <Link href={"/(root)/properties/1"}>Property</Link>
    </View>
  );
};
export default Index;
