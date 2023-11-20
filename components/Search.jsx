import { Entypo, AntDesign } from "@expo/vector-icons";
import { View, Text, TextInput } from "react-native";
import colors from "../assets/colors";
import React from "react";

export default function Search() {
  return (
    <View className={`relative   m-[30px] flex-row items-center space-x-3`}>
      <TextInput
        style={{ fontFamily: "Nunito-Regular" }}
        placeholder="Search"
        className={` border border-[${colors.borderGray}] rounded-xl py-1 pl-[40px] flex-1 0`}
      />
      <View className={`absolute top-3   left-0`}>
        <AntDesign name="search1" size={15} color="#474747" />
      </View>
      <View
        className={`bg-[#989898] h-full p-2 rounded-lg items-center justofy-center`}
      >
        <Entypo name="sound-mix" size={24} color="#474747" />
      </View>
    </View>
  );
}
