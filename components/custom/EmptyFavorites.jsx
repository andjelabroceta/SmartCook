import { Colors } from "@/constants/Colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEmptyStateAnimations } from "./EmptyFavoritesAnimation";

export const EmptyFavorites = () => {
  const router = useRouter();

  const { heartAnimation, steamAnimation1, steamAnimation2 } =
    useEmptyStateAnimations();
  return (
    <View style={styles.emptyContainer}>
      <View style={styles.illustrationContainer}>
        <Image
          source={require("../../assets/icons/seafood.png")}
          style={styles.emptyImage}
          resizeMode="contain"
        />
        <View style={styles.cookingElements}>
          <Animated.View style={[styles.heart, heartAnimation]}>
            <MaterialCommunityIcons name="heart" size={28} color="#FF6B6B" />
          </Animated.View>
          <Animated.View style={[styles.steam1, steamAnimation1]}>
            <MaterialCommunityIcons
              name="heart"
              size={24}
              color={Colors.ORANGE}
            />
          </Animated.View>
          <Animated.View style={[styles.steam2, steamAnimation2]}>
            <MaterialCommunityIcons
              name="heart"
              size={20}
              color={Colors.TURQUOISE}
            />
          </Animated.View>
        </View>
      </View>
      <Text style={styles.emptyTitle}>Your Recipe Collection is Empty!</Text>
      <Text style={styles.emptySubtitle}>
        Start discovering delicious recipes and save your favorites to find them
        easily later.
      </Text>
      <TouchableOpacity
        style={styles.exploreButton}
        onPress={() => router.push("/home")}
        activeOpacity={0.8}
      >
        <Text style={styles.exploreButtonText}>Explore Recipes</Text>
        <MaterialIcons name="arrow-forward" size={20} color="#FFFFFF" />
      </TouchableOpacity>
      <View style={styles.tipContainer}>
        <MaterialIcons name="lightbulb-outline" size={18} color="#FFD700" />
        <Text style={styles.tipText}>
          Tip: Tap the heart icon on any recipe to add it to your favorites!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  illustrationContainer: {
    height: 200,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    position: "relative",
  },
  emptyImage: {
    width: 180,
    height: 180,
  },
  cookingElements: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  heart: {
    position: "absolute",
    top: 50,
    right: "30%",
  },
  steam1: {
    position: "absolute",
    top: 60,
    left: "35%",
  },
  steam2: {
    position: "absolute",
    top: 50,
    left: "45%",
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 12,
    textAlign: "center",
  },
  emptySubtitle: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },
  exploreButton: {
    flexDirection: "row",
    backgroundColor: Colors.TURQUOISE,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  exploreButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 8,
  },
  tipContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "rgba(255, 215, 0, 0.1)",
    padding: 12,
    borderRadius: 12,
  },
  tipText: {
    fontSize: 14,
    color: "#555555",
    marginLeft: 8,
  },
});
