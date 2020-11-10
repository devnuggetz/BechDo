import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/trade.png")} />
      <AppTextInput
        placeholder="Email"
        icon="email"
        keyboardType="email-address"
        onChange={(text) => setEmail(text)}
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="emailAddress"
      />
      <AppTextInput
        placeholder="Password"
        icon="lock"
        autoCapitalize="none"
        autoCorrect={false}
        onChange={(text) => setPassword(text)}
        textContentType="password"
        secureTextEntry
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
