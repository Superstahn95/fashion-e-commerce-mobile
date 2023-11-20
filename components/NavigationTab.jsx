import { Text, View, TouchableOpacity } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

export default function NavigationTab({ navigation }) {
  return (
    <View className="absolute  left-0 right-0 bottom-5 items-center justify-center">
      <View className="bg-white w-[296px] rounded-3xl py-[22px] px-[24px] flex-row justify-between items-center">
        <TouchableOpacity>
          <AntDesign name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Feather name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="bookmark" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
