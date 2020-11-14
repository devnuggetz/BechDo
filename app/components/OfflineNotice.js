import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import Text from "./Text";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
  const netInfo = useNetInfo();
  if (netInfo.type != "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection!</Text>
      </View>
    );
  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    position: "absolute",
    top: Constants.statusBarHeight,
    zIndex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
});
