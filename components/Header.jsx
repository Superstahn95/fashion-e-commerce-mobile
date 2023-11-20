import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Header({ title, icons, navigation }) {
  return (
    <View className="mx-[30px] pt-10  flex-row items-center">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{ fontFamily: "Nunito-Bold" }}
        className=" flex-1 text-center text-[18px]"
      >
        {title}
      </Text>
      <View className="flex-row items-center space-x-2">
        {/* they are both going to be inside a touchable opacity */}
        {icons?.map((icon) => (
          <TouchableOpacity key={icon.id}>{icon.icon}</TouchableOpacity>
        ))}
        {/* <Ionicons name="notifications-outline" size={24} color="black" />
        <MaterialCommunityIcons name="cart-outline" size={24} color="black" /> */}
      </View>
    </View>
  );
}
