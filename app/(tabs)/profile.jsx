import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  Image,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "react-native-elements/dist/buttons/Button";
import { getUser, logout } from "@/hooks/auth";
import { router, useFocusEffect, useNavigation } from "expo-router";
import { NotifyMessage } from "@/utils/utils";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { FavoriteRecipeCard } from "@/components/custom/FavoriteRecipeCard";
import { Colors } from "@/constants/Colors";
import { findFavoriteRecipes } from "@/hooks/favoriteRecipes";
import { RecipePreviewResponse } from "@/model/RecipePreviewResponse";
import { Animated } from "react-native";
import { useEmptyStateAnimations } from "@/components/custom/EmptyFavoritesAnimation";
import { EmptyFavorites } from "@/components/custom/EmptyFavorites";

const Profile = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = async () => {
    try {
      let response = await logout();
      setDropdownVisible(false);
      if (response.message == "Logout success!") {
        NotifyMessage(response.message);
        router.replace("/");
      } else {
        NotifyMessage("Error: Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      NotifyMessage("Error: " + error.detail);
    }
  };
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);
  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const fetchFavRecipes = async () => {
        if (!user?.user?.id) return;

        setIsLoading(true);
        try {
          let favRecipes = await findFavoriteRecipes(user?.user.id);
          if (isActive) {
            setFavoriteRecipes(favRecipes);
            setIsLoading(false);
          }
        } catch (error) {
          console.log(error);
          if (isActive) {
            setIsLoading(false);
          }
        }
      };
      fetchFavRecipes();

      return () => {
        isActive = false;
      };
    }, [user])
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Account</Text>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => setDropdownVisible(!isDropdownVisible)}
        >
          <Ionicons name="settings" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      {isDropdownVisible && (
        <View style={styles.dropdown}>
          <TouchableOpacity onPress={handleLogout} style={styles.dropdownItem}>
            <Ionicons name="log-out-outline" size={24} color="red" />
            <Text style={{ color: "red" }}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Profile Section */}
      <TouchableOpacity style={styles.profileSection}>
        <Ionicons
          name="person"
          size={40}
          style={styles.profileImage}
          color={Colors.TURQUOISE}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{user?.user.username}</Text>
          <Text style={styles.profileTitle}>{user?.user.email}</Text>
        </View>
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color="#000"
          style={styles.profileArrow}
        />
      </TouchableOpacity>

      {/* Favorites Section */}
      <View style={styles.favoritesHeader}>
        <Text style={styles.favoritesTitle}>My Favorites</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      {/* Favorites Grid */}
      {favoriteRecipes.length > 0 ? (
        <FlatList
          data={favoriteRecipes}
          renderItem={({ item }) => (
            <FavoriteRecipeCard
              title={item.name}
              prepTime={item.times?.Preparation}
              cookTime={item.times?.Cooking}
              recipeImage={item.image}
              recipeId={item.id}
            />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.recipeRow}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <EmptyFavorites />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    marginTop: "10%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  settingsButton: {
    padding: 5,
  },
  dropdown: {
    position: "absolute",
    top: "5%",
    width: "70%",
    right: "9%",
    zIndex: 10,
    marginTop: 10,
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 6,
    elevation: 4, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  dropdownItem: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    padding: 10,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 15,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  profileTitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  profileArrow: {
    marginLeft: 10,
  },
  favoritesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  favoritesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  seeAllText: {
    fontSize: 14,
    color: Colors.TURQUOISE,
  },
  recipeRow: {
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
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
    flexDirection: "row",
    alignItems: "center",
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
  floatingButton: {
    position: "absolute",
    bottom: 70, // Positioned above your bottom navbar
    alignSelf: "center",
    backgroundColor: "#1E3D59",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default Profile;
