import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "../assets/colors";

const filterButtons = [
  { id: 1, text: "all", action: null },
  { id: 2, text: "skirt", action: "skirt" },
  { id: 3, text: "jacket", action: "jacket" },
  { id: 4, text: "dress", action: "dress" },
];

export default function FilterOptions({ setFilter, applyFilter }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const toggleList = (index, action) => {
    setSelectedIndex(index);
    setFilter(action);
    applyFilter();
  };
  return filterButtons.map((button, index) => (
    <TouchableOpacity
      key={button.id}
      className={`${
        selectedIndex === index ? "bg-black" : null
      }  py-2 px-5 rounded-3xl border border-[${colors.borderGray}] `}
      onPress={() => toggleList(index, button.action)}
    >
      <Text
        style={{ fontFamily: "Nunito-Regular" }}
        className={`${
          selectedIndex === index ? "text-white" : "text-black"
        }   text-[14px] capitalize`}
      >
        {button.text}
      </Text>
    </TouchableOpacity>
  ));
}
