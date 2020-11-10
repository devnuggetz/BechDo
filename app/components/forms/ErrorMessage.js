import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return <AppText styles={styles.error}>{error}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
