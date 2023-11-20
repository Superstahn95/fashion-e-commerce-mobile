import { SafeAreaView, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import CollectionScreen from "./screens/CollectionScreen";
import ProductReviewScreen from "./screens/ProductReviewScreen";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import StackNavigation from "./navigation/StackNavigation";
import { store } from "./store";
import { Provider } from "react-redux";

//having a bug with using the nunito fonts=> will look for a fix
export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }
  return (
    // <SafeAreaView>
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
    // </SafeAreaView>
  );
}
