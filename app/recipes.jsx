import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  Platform,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import RecipeCard from "@/components/custom/RecipeCard";
import { Colors } from "@/constants/Colors";
import axios from "axios";
import { FlatList } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Recipes = () => {
  const { width } = Dimensions.get("window");
  const [recipes, setRecipes] = useState([]);
  const router = useRouter();
  const API_URL = "http://192.168.2.40:8000/api/v1/recipes/search";
  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.post(API_URL, {
        ingredients: ["potato", "chicken"], // primjer podataka
      });
      setRecipes(response.data);
    } catch (error) {
      console.error(
        "Error fetching recipes:",
        error.response?.data || error.message
      );
    }
  };

  const handlePress = (id) => {
    //dinamic route
    router.push(`/recipes/${id}`);
  };
  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => handlePress(item.id)}>
        <View style={styles.container}>
          <Image
            source={
              item.image
                ? { uri: item.image }
                : require("../assets/images/example_image1.jpg")
            }
            style={styles.image}
          ></Image>
          <View style={styles.recipeHeaderContainer}>
            <Text style={styles.recipeHeader}>{item.name}</Text>
            <Text style={styles.recipeSubheader}>
              Preparation time: {item.times?.Preparation || "Nepoznato"}
            </Text>
            <Text style={styles.recipeSubheader}>
              Cooking time: {item.times?.Cooking || "Nepoznato"}
            </Text>

            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Pressable onPress={() => handlePress(item.id)}>
                <Ionicons
                  name="arrow-forward-circle-outline"
                  size={30}
                  color={Colors.PURPLE}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Recipes</Text>
        <Text style={styles.header2}>Choose your favourite!</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/illustrations/woman_in_kichen.png")}
          style={styles.backgroundImage}
          resizeMode="contain"
        />
        <View style={styles.subHeaderContainer}>
          <Text style={styles.subHeader}>
            We choose the best recipes for you according to your ingredients!
          </Text>
        </View>
      </View>

      <View style={styles.recipesContainer}>
        <FlatList
          data={recipes}
          renderItem={renderItem}
          keyExtractor={(recipe) => recipe.id}
          contentContainerStyle={{ flexGrow: 1 }}
        />
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
  backgroundImage: {
    width: 300,
    height: 200,
  },
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
