import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from "react-native";
import React from "react";

export default function CollectionCard({ collection }) {
  const width = Dimensions.get("screen").width - 60;
  const { name, image } = collection;
  //clicking on the touchable opacity should take us to the screen for products affiliated to that collection
  return (
    <TouchableOpacity className="mx-[30px] mb-4 relative rounded-2xl overflow-hidden">
      <View className="absolute top-0 left-0 w-full h-full bg-black/60 z-[99]">
        <Text className="text-white border-b border-white text-[20px] font-bold pb-2 absolute bottom-7 left-7">
          {name}
        </Text>
      </View>
      <Image
        source={{ uri: image }}
        style={{ width, height: width / 2 }}
        className="rounded-2xl"
      />
    </TouchableOpacity>
  );
}
