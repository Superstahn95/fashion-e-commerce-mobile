import {
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import CartContent from "../components/CartContent";
import Header from "../components/Header";
import CartTotal from "../components/CartTotal";
import {
  getCart,
  incrementQuantity,
  decrementQuantity,
} from "../features/cart/cartSlice";

const headerIcons = [
  {
    id: 1,
    icon: <MaterialIcons name="delete-outline" size={24} color="black" />,
  },
];
export default function CartScreen({ navigation }) {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header navigation={navigation} title={"Cart"} icons={headerIcons} />
      {cart.length < 1 ? (
        <View className="flex-1  items-center justify-center">
          <Text>There are currently no items in your cart</Text>
        </View>
      ) : (
        <>
          <View className="my-[17px]">
            {cart.map((item) => (
              <CartContent key={item.id} item={item} />
            ))}
          </View>
          <View className="mx-[30px] pb-10">
            <View className="relative w-full border border-[#848484] rounded-lg">
              <TextInput
                style={{ fontFamily: "Nunito-Regular" }}
                className="w-full py-[10px] px-[5px]"
                placeholder="Enter Promo Code"
              />
            </View>

            <CartTotal />

            <TouchableOpacity
              onPress={() => navigation.navigate("Checkout")}
              className="bg-black w-full py-3 rounded-[20px]"
            >
              <Text
                style={{ fontFamily: "Nunito-Regular" }}
                className="text-white text-center"
              >
                Pay Now
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      <StatusBar hidden />
    </ScrollView>
  );
}
