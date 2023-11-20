import { Text, View, TouchableOpacity, Animated } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRef, useState } from "react";

export default function ProductNotes({ title, final, lists }) {
  //passing in the description property of that product in here
  //passing in the material and care property in here
  //passing in the exchange and delivery in here which shouldn't neccessary come from our backend
  // \u2022=> unicode character for rendering that listlike look in our react native
  //   const { id, title, steps } = note;
  const listArr = lists.split(".");

  const [showDetails, setShowDetails] = useState(false);
  const animationController = useRef(new Animated.Value(0)).current;
  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: showDetails ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    const arrowTransform = animationController.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "90deg"],
    });
    setShowDetails((prevState) => !prevState);
  };
  return (
    <View
      className={`border-t border-[#ADADAD] py-1 ${
        final ? "border-b border-[#ADADAD]" : null
      }`}
    >
      <View className="flex-row items-center justify-between px-2 py-3">
        <Text
          style={{ fontFamily: "Nunito-Bold" }}
          className="text-[16px] text-[#1E1E1E]  capitalize"
        >
          {title}
        </Text>
        <TouchableOpacity
          onPress={() => setShowDetails((prevState) => !prevState)}
        >
          {showDetails ? (
            <AntDesign name="up" size={24} color="black" />
          ) : (
            <AntDesign name="down" size={20} color="black" />
          )}
        </TouchableOpacity>
      </View>
      {showDetails && (
        <View className="ms-2 p-2 ">
          {listArr.map((list, index) => (
            <View key={index} className="flex-row space-x-1">
              <Text style={{ fontFamily: "Nunito-Bold" }}>{`\u2022`}</Text>
              <Text
                style={{ fontFamily: "Nunito-Regular" }}
                className="text-[14px]  leading-5 tracking-wider "
              >{` ${list.trim()}`}</Text>
            </View>
          ))}
        </View>
      )}

      {/* <AntDesign name="up" size={24} color="black" /> */}
    </View>
  );
}
