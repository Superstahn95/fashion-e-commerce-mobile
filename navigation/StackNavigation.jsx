import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import CollectionScreen from "../screens/CollectionScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import ProductReviewScreen from "../screens/ProductReviewScreen";

const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  const screenOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Collection" component={CollectionScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
      <Stack.Screen name="ProductReview" component={ProductReviewScreen} />
    </Stack.Navigator>
  );
}
