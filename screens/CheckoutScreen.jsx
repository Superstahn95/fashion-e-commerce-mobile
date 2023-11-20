import { Text, View, StatusBar, Image, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import CartTotal from "../components/CartTotal";

export default function CheckoutScreen({ navigation }) {
  return (
    <View className="flex-1">
      <Header title={"Checkout"} navigation={navigation} />
      <View className="mx-[30px] mt-[17px]">
        <Image source={require("../assets/card.png")} className="w-full" />
        <View className="flex-row items-center justify-between">
          <Text
            style={{ fontFamily: "Nunito-Bold" }}
            className="text-[#1E1E1E] text-[16px]"
          >
            Shipping Information
          </Text>
          <Text
            style={{ fontFamily: "Nunito-Regular" }}
            className="text-[13px] text-[#474747] "
          >
            Edit
          </Text>
        </View>
        <View className="pt-3 pb-8 border-b border-[#848484]">
          {/* house address */}
          <Text
            style={{ fontFamily: "Nunito-Regular" }}
            className="text-[12px] leading-4 text-[#707070]"
          >
            22, Oshone Close, Nile
          </Text>
          {/* state and country */}
          <Text
            style={{ fontFamily: "Nunito-Regular" }}
            className="text-[12px] leading-4 text-[#707070]"
          >
            Lagos, Nigeria.
          </Text>
          {/* postal code */}
          <Text
            style={{ fontFamily: "Nunito-Regular" }}
            className="text-[12px] leading-4 text-[#707070]"
          >
            100254{" "}
          </Text>
        </View>
        {/* cart total */}
        <CartTotal />
        {/* to be extracted to a separate component */}
      </View>
      <View className="absolute bottom-5  mx-[30px] left-0 right-0 flex items-center justify-center">
        <TouchableOpacity className="bg-black w-full py-3 rounded-[20px]">
          <Text className="text-white font-bold text-center">Pay Now</Text>
        </TouchableOpacity>
      </View>
      <StatusBar hidden />
    </View>
  );
}
