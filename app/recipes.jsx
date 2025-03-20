import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import RecipeCard from "@/components/custom/RecipeCard";
import { Colors } from "@/constants/Colors";

const Recipes = () => {
  const { width } = Dimensions.get("window");
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Recipes</Text>
        <Text style={styles.header2}>Choose your favourite!</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/illustrations/woman_in_kichen.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.subHeaderContainer}>
          <Text style={styles.subHeader}>
            We choose the best recipes for you according to your ingredients!
          </Text>
        </View>
      </View>

      <View style={styles.recipesContainer}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default Recipes;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    //flex: 1,
    justifyContent: "center",
    paddingTop: 15,
  },
  header: {
    marginHorizontal: "auto",
    fontSize: 30,
    fontWeight: 700,
    color: Colors.PURPLE,
  },

  header2: {
    marginHorizontal: "auto",
    fontSize: 22,
    paddingTop: 10,
    color: Colors.TURQUOISE,
  },
  recipesContainer: {
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  subHeaderContainer: {
    marginHorizontal: 5,
    backgroundColor: Colors.YELLOW,
    padding: 5,
    paddingHorizontal: 25,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.PURPLE,
  },
  image: {
    width: 300,
    height: 200,
  },
});
