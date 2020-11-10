import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "./app/components/Icon";
import ListItems from "./app/components/ListItems";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothings",
    value: 2,
  },
  {
    label: "Books",
    value: 3,
  },

  {
    label: "Apps",
    value: 4,
  },
];
export default function App() {
  return (
    <Screen>
      <AppPicker placeholder="Categories" icon="apps" items={categories} />
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
