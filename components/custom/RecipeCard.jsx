import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { Colors } from "@/constants/Colors";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const RecipeCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/example_image1.jpg")}
        style={styles.image}
      ></Image>
      <View style={styles.recipeHeaderContainer}>
        <Text style={styles.recipeHeader}>Naslov recepta nslcnkjn skrrrrr</Text>
        <Text style={styles.recipeSubheader}>Vrijeme pripreme : 15 min</Text>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Ionicons
            name="arrow-forward-circle-outline"
            size={30}
            color={Colors.PURPLE}
          />
        </View>
      </View>
    </View>
  );
};

export default RecipeCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 15,
    ...Platform.select({
      ios: {
        shadowColor: Colors.PURPLE,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: 3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  image: {
    //flex: 1,
    width: 100,
    height: 100,
    borderRadius: 15,
    margin: 10,
  },
  recipeHeaderContainer: {
    flex: 1,
    padding: 10,
  },
  recipeHeader: {
    flexWrap: "wrap",
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.PURPLE,
  },
  recipeSubheader: {
    fontSize: 16,
    color: Colors.TURQUOISE,
  },
});
