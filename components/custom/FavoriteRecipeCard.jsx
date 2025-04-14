import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export const FavoriteRecipeCard = ({
  title,
  cookTime,
  prepTime,
  recipeImage,
  recipeId,
}) => {
  const router = useRouter();
  const handleRecipePress = () => {
    router.push(`/recipes/${recipeId}`);
  };

  return (
    <TouchableOpacity style={styles.recipeCard} onPress={handleRecipePress}>
      <Image source={{ uri: recipeImage }} style={styles.recipeImage} />
      <TouchableOpacity style={styles.favoriteButton}>
        <Ionicons name="heart" size={22} color={Colors.TURQUOISE} />
      </TouchableOpacity>
      <Text style={styles.recipeTitle}>{title}</Text>
      <View style={styles.authorContainer}>
        {prepTime && (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Ionicons name="time-outline" size={14} color="#000" />
            <Text style={styles.authorName}>{prepTime}</Text>
          </View>
        )}
        {cookTime && (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Ionicons name="flame-outline" size={14} color="#000" />
            <Text style={styles.authorName}>{cookTime}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  recipeCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    width: "48%",
    marginBottom: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  recipeImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 15,
    padding: 5,
  },
  recipeTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 5,
  },
  authorContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  authorImage: {
    width: 22,
    height: 22,
    borderRadius: 11,
    marginRight: 5,
  },
  authorName: {
    fontSize: 12,
    color: "#666",
  },
});
