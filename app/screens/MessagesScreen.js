import React, { useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ListItems from "../components/ListItems";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDelete from "../components/ListItemDelete";

const initialMessages = [
  {
    id: 1,
    title: "Nandu Chai Wala",
    description:
      "Wassup Wassup Bro, just texting to see if everything is okay. Big fan of pasedina football club here.",
    image: require("../assets/avatar.png"),
  },
  {
    id: 2,
    title: "Drake 878",
    description:
      "Wassup Wassup Bro, just texting to see if everything is okay. Big fan of pasedina football club here.",
    image: require("../assets/avatar.png"),
  },
  {
    id: 3,
    title: "Masala Papad",
    description:
      "Wassup Wassup Bro, just texting to see if everything is okay. Big fan of pasedina football club here.",
    image: require("../assets/avatar.png"),
  },
  {
    id: 4,
    title: "Rangeen Churi",
    description:
      "Wassup Wassup Bro, just texting to see if everything is okay. Big fan of pasedina football club here.",
    image: require("../assets/avatar.png"),
  },
];
const MessagesScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItems
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("Your Message is: ", item)}
            renderRightActions={() => (
              <ListItemDelete onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
