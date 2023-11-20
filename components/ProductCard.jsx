import { Text, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ProductCard({ product, larger, navigation }) {
  const { name, price, image } = product;
  //need to look for a better fix form my width for sake of responsiveness
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductReview", {
          product,
        })
      }
      className={`${larger ? "mr-5" : null} w-fit mb-7 `}
    >
      <View className="relative ">
        <Image
          source={{ uri: image }}
          className={`${
            larger ? "h-[271px]" : "h-[231px]"
          } w-[156px] rounded-3xl rounded-br-[50px]`}
        />
        <View className="absolute bottom-0 w-full p-2  bg-black/60 rounded-3xl rounded-br-[50px]">
          <Text
            style={{ fontFamily: "Nunito-Regular" }}
            className="text-white text-xs"
          >
            {name}
          </Text>
          <Text
            style={{ fontFamily: "Nunito-Regular" }}
            className="text-white text-[7px]"
          >
            {price}
          </Text>
        </View>
        <TouchableOpacity className="absolute bg-[#1E1E1E] rounded-md top-4 right-4">
          <Feather name="bookmark" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
