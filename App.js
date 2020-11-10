import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <MessagesScreen />;
}

const styles = StyleSheet.create({});
