import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons, Feather, Entypo, AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import colors from "../assets/colors";
import { useCallback, useState, useEffect } from "react";
import Search from "../components/Search";
import products from "../assets/data/productsData";
import ProductCard from "../components/ProductCard";
import NavigationTab from "../components/NavigationTab";
import FilterOptions from "../components/FilterOptions";

// SplashScreen.preventAutoHideAsync();

export default function HomeScreen({ navigation }) {
  const [allProducts, setAllProducts] = useState([]);
  const [filter, setFilter] = useState(null);
  const applyFilter = () => {
    console.log("the products should rearrange");
    console.log(filter);
  };

  useEffect(() => {
    if (!filter) setAllProducts(products);
    if (filter === "skirt")
      setAllProducts(
        products.filter((product) => product.name.includes("Skirt"))
      );
    if (filter === "jacket")
      setAllProducts(
        products.filter((product) => product.name.includes("Jacket"))
      );
    if (filter === "dress")
      setAllProducts(
        products.filter((product) => product.name.includes("Dress"))
      );
  }, [filter]);
  return (
    <View className="flex-1 ">
      <View className=" rounded-br-3xl rounded-bl-3xl relative ">
        <View className="absolute top-0 w-full h-full bg-black/40 z-[99] rounded-br-3xl rounded-bl-3xl items-center justify-center">
          <Text
            style={{ fontFamily: "Nunito-Bold" }}
            className=" text-3xl mt-10 text-white "
          >
            Explore all collections
          </Text>
          <View className="absolute top-16 right-10">
            <Ionicons name="notifications-outline" size={40} color="white" />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Collection")}
            className="absolute -bottom-6 p-2 -translate-y-1/2 rounded-full bg-black/60"
          >
            <Feather name="chevrons-down" size={35} color="white" />
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/17866105/pexels-photo-17866105/free-photo-of-young-woman-in-sunglasses-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=1200",
          }}
          className="w-full h-[250px] rounded-br-3xl rounded-bl-3xl"
        />
      </View>

      {/* text field */}
      <Search />

      {/* filters section */}
      <View className="mx-[30px] pb-3  flex-row justify-between">
        {/* create an array of objects and map through preferrably to return the
        below */}
        <FilterOptions setFilter={setFilter} applyFilter={applyFilter} />
      </View>

      {/* products view */}
      <View className="flex-1">
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="mx-[30px]"
          contentContainerStyle={{ flexDirection: "row" }}
        >
          <View>
            {allProducts
              .filter((product, i) => i % 2 === 0)
              .map((product) => (
                <ProductCard
                  product={product}
                  key={product.id}
                  navigation={navigation}
                  larger
                />
              ))}
          </View>
          <View>
            {allProducts
              .filter((product, i) => i % 2 !== 0)
              .map((product) => (
                <ProductCard
                  product={product}
                  key={product.id}
                  navigation={navigation}
                />
              ))}
          </View>
        </ScrollView>
      </View>
      {/* <View className="h-[500px]">
        <Text>This is just a temporary fix to my scrollview</Text>
      </View> */}

      {/* tab navigation lookalike*/}
      <NavigationTab navigation={navigation} />
      <StatusBar hidden={true} />
    </View>
  );
}
