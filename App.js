import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import NavigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
export default function App() {
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
