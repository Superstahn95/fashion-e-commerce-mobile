import { useState } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { getTotalCartAmount } from "../features/cart/cartSlice";

export default function CartTotal() {
  const total = useSelector(getTotalCartAmount);
  const [shippingFee, setShippingFee] = useState(10);
  return (
    <View>
      <View className="flex-row items-center justify-between py-3">
        <Text
          style={{ fontFamily: "Nunito-Regular" }}
          className="text-[12px] text-[#707070]"
        >
          Subtotal
        </Text>
        <Text style={{ fontFamily: "Nunito-Bold" }}>${total}</Text>
      </View>
      <View className="flex-row items-center justify-between py-2">
        <Text
          style={{ fontFamily: "Nunito-Regular" }}
          className="text-[12px] text-[#707070]"
        >
          Shipping
        </Text>
        <Text style={{ fontFamily: "Nunito-Bold" }}>${shippingFee}</Text>
      </View>
      <View className="flex-row items-center justify-between py-7 mt-2 border-t border-solid border-[#848484]">
        <Text style={{ fontFamily: "Nunito-Bold" }} className="text-[12px]">
          Total
        </Text>
        <Text style={{ fontFamily: "Nunito-Bold" }}>
          ${total + shippingFee}
        </Text>
      </View>
    </View>
  );
}
