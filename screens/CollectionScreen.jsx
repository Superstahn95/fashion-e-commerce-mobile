import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Search from "../components/Search";
import collectionsData from "../assets/data/collectionsData";
import { useEffect, useState } from "react";
import CollectionCard from "../components/CollectionCard";
import Header from "../components/Header";

export default function CollectionScreen({ navigation }) {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    setCollections(collectionsData);
  }, []);
  const headerIcons = [
    {
      id: 1,
      icon: <Ionicons name="notifications-outline" size={24} color="black" />,
    },
    {
      id: 2,
      icon: (
        <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
      ),
    },
  ];
  return (
    <View className="flex-1 ">
      {/* header might later on be moved into its own separte component */}
      <Header
        title={"Collections"}
        icons={headerIcons}
        navigation={navigation}
      />
      <Search />

      <FlatList
        showsVerticalScrollIndicator={false}
        className="flex-1"
        data={collections}
        renderItem={({ item }) => <CollectionCard collection={item} />}
        keyExtractor={(item) => item.id}
      />

      <StatusBar hidden />
    </View>
  );
}
