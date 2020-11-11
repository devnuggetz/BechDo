import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppText from "../components/AppText";
import ListItems from "../components/ListItems";
import colors from "../config/colors";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;
  return (
    <View style={{ paddingTop: 20 }}>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>₹{listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItems
            image={require("../assets/avatar.png")}
            title="Drake Drake"
            subtitle="88 Listings"
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});
