import {
  Text,
  View,
  ScrollView,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import colors from "../assets/colors";
import ProductNotes from "../components/ProductNotes";
import { useSelector, useDispatch } from "react-redux";
import {
  getSingleCartItem,
  addToCart,
  removeFromCart,
} from "../features/cart/cartSlice";

const { width } = Dimensions.get("screen");
const sizes = [
  {
    id: 1,
    text: "xs",
  },
  {
    id: 2,
    text: "s",
  },
  {
    id: 3,
    text: "m",
  },
  {
    id: 4,
    text: "l",
  },
  {
    id: 5,
    text: "xl",
  },
];
const availableColors = [
  { id: 1, color: "black" },
  { id: 2, color: "red" },
  { id: 3, color: "blue" },
];
const productDescription = [
  {
    id: 1,
    title: "description",
    lists: "Collar neck. Short ball dress with a ball sleeve",
  },
  {
    id: 2,
    title: "material and care",
    lists:
      "Composition of the main fabric, 100% velvet, 40% of acrylic. Avoid ironing and cleaning with chemicals. Machine wash at a temperature of 5%. Do not bleach",
  },
  {
    id: 3,
    title: "payment and delivery",
    lists:
      "Fed Ex performs the delivery within 5 - 10 days to any location in Nigeria. You can make payments through VISA or MASTERCARD or CASH on delivery. Upon receiving the goods, you have the priviledge to try on, examine and assess the quality of the product you ordered as this allows you to determine the overall satisfaction of the product ",
  },
  {
    id: 4,
    title: "exchange and return",
    lists:
      "If you have concerns about a product, you have the option to either return the product, ask for a refund or exchange within days of purchase. Be aware that any personal damage caused to the purchased product will result in the rejection of requests for returns, exchanges or refunds ",
  },
];

export default function ProductReviewScreen({ route, navigation }) {
  const [size, setSize] = useState("m"); //to be sent along with product to our cart
  //this is going to be a relative positioned view holding an image
  const [wearColor, setWearColor] = useState("black");
  const { product } = route.params;
  const { name, description, id, gender, ratings, reviews, price, image } =
    product;
  const dispatch = useDispatch();
  const item = useSelector((state) => getSingleCartItem(state, id));

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} className="mb-24">
        {/* product image and details view */}
        <View className="relative">
          {/* the image will be replaced by the image property of our product object */}
          <Image
            source={{
              uri: image,
            }}
            style={{ width, height: width / 1.4 }}
            className="rounded-b-[40px] object-center"
          />
          <View className="absolute top-14 left-0 right-0 p-2   items-center justify-between">
            {/* This can be extracted to my header component */}
            <View className="bg-transparent w-[90%] flex-row items-center justify-between">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity className=" bg-[#1E1E1E] rounded-md ">
                <Feather name="bookmark" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* description, price and ratings */}
        <View className="m-[30px]">
          {/* name and price */}
          <View className="flex-row items-center justify-between pb-2">
            {/* to be replaced with dynamic data */}
            <Text
              style={{ fontFamily: "Nunito-Bold" }}
              className=" text-lg max-w-[80%]"
            >
              {name}
            </Text>
            <Text style={{ fontFamily: "Nunito-Bold" }} className=" text-lg">
              {price}
            </Text>
          </View>
          {/* short description */}
          <Text
            style={{ fontFamily: "Nunito-Regular" }}
            className="text-[#474747] text-[13px]"
          >
            {description}
          </Text>
          {/* ratings and reviews view */}
          <View className="flex-row items-center space-x-5 mt-2">
            <View className="flex-row space-x-1">
              {[1, 2, 3, 4, 5].map((num) => (
                <AntDesign key={num} name="star" size={24} color="#FFC329" />
              ))}
            </View>
            <Text style={{ fontFamily: "Nunito-Regular" }}>
              ({reviews} reviews)
            </Text>
          </View>

          {/* sizes view */}
          <View className="my-5">
            <Text
              style={{ fontFamily: "Nunito-Bold" }}
              className="text-[15px] "
            >
              Choose size
            </Text>
            <FlatList
              data={sizes}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setSize(item.text)}
                  className={`${
                    size === item.text
                      ? "bg-[#ADADAD] shadow-2xl blur-lg"
                      : null
                  }  h-[35px] w-[35px] mr-2 rounded-full items-center justify-center my-2`}
                >
                  <Text
                    style={{ fontFamily: "Nunito-Regular" }}
                    className="text-[12px] "
                  >
                    {item.text}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
          {/* color view */}
          <View className="mb-5">
            <Text style={{ fontFamily: "Nunito-Bold" }} className="text-[15px]">
              Choose color
            </Text>
            <FlatList
              data={availableColors}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setWearColor(item.color)}
                  className={`mr-4 my-2 p-1 border border-transparent ${
                    wearColor === item.color
                      ? " border-gray-500  rounded-full"
                      : null
                  } `}
                >
                  <View
                    style={{ backgroundColor: item.color }}
                    className="w-[20px] h-[20px] rounded-full"
                  ></View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>

          {productDescription.map((detail, index) =>
            index + 1 !== productDescription.length ? (
              <ProductNotes
                title={detail.title}
                key={detail.title}
                lists={detail.lists}
              />
            ) : (
              <ProductNotes
                title={detail.title}
                key={detail.title}
                final
                lists={detail.lists}
              />
            )
          )}
        </View>

        <StatusBar hidden />
      </ScrollView>
      {/* add to cart button */}
      <View className="absolute bottom-5  mx-[30px] left-0 right-0 flex items-center justify-center">
        {item ? (
          <TouchableOpacity
            onPress={() => dispatch(removeFromCart({ id }))}
            className="bg-black w-full py-3 rounded-[20px]"
          >
            <Text className="text-white font-bold text-center">
              Remove from cart
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() =>
              dispatch(addToCart({ ...product, size, wearColor, quantity: 1 }))
            }
            className="bg-black w-full py-3 rounded-[20px]"
          >
            <Text className="text-white font-bold text-center">
              Add to cart
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}
