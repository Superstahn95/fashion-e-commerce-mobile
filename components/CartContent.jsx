import { Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  removeFromCart,
  incrementQuantity,
} from "../features/cart/cartSlice";

export default function CartContent({ item }) {
  const dispatch = useDispatch();
  const { id, name, quantity, image, size, price } = item;
  return (
    <View className=" mb-[17px] mx-[30px] flex-row shadow-lg ">
      <View className="w-1/2 h-full ">
        <Image
          source={{
            uri: image,
          }}
          className="max-w-full h-[200px] rounded-3xl rounded-br-[50px]"
        />
      </View>
      <View className=" flex-1">
        <TouchableOpacity
          onPress={() => dispatch(removeFromCart({ id }))}
          className="self-end "
        >
          <AntDesign name="close" size={16} color="black" />
        </TouchableOpacity>
        <View className="mt-10 ml-2">
          <Text
            style={{ fontFamily: "Nunito-Bold" }}
            className="text-[12px] text-[#474747]"
          >
            {name}
          </Text>
          <Text
            style={{ fontFamily: "Nunito-Bold" }}
            className="text-[15px] mt-1"
          >
            ${price}
          </Text>
          <View className="mt-5 flex-row justify-between items-center">
            <Text
              style={{ fontFamily: "Nunito-Regular" }}
              className="text-[12px] text-[#707070]"
            >
              Size: {size}
            </Text>

            {/* controls */}
            <View className="flex-row items-center relative space-x-1">
              <TouchableOpacity
                onPress={() => dispatch(decrementQuantity({ id }))}
                className="bg-[#D6D6D6] rounded-full p-2"
              >
                <View className="bg-white w-[18px] h-[18px] rounded-full">
                  <Text className="w-full text-center">-</Text>
                </View>
              </TouchableOpacity>
              <Text
                style={{ fontFamily: "Nunito-Regular" }}
                className="bg-[#D6D6D6] text-center px-1 absolute left-[30%] -translate-x-[50%]"
              >
                {quantity}
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(incrementQuantity({ id }))}
                className="bg-[#D6D6D6] rounded-full p-2"
              >
                <View className="bg-white w-[18px] h-[18px] rounded-full">
                  <Text className="w-full text-center">+</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
