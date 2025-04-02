import { LinearGradient } from "expo-linear-gradient";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
  FlatList,
  ImageBackground,
} from "react-native";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function RecipeScreen() {
  const { id } = useLocalSearchParams();
  const [recipe, setRecipe] = useState(null);
  const [activeTab, setActiveTab] = useState("ingredients"); //ingredients or instructions
  const router = useRouter();
  const [isFavourite, setIsFavourite] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    try {
      const response = await axios.get(
        `http://192.168.2.40:8000/api/v1/recipes/${id}`
      );
      setRecipe(response.data);
    } catch (error) {
      console.error(
        "Error fetching recipe:",
        error.response?.data || error.message
      );
    }
  };

  const renderIngredients = ({ item }) => {
    return (
      <View style={styles.ingredientsContainer}>
        <View style={styles.ingredientItem}>
          <Text style={styles.ingredientText}>• {item}</Text>
        </View>
      </View>
    );
  };

  const renderInstructions = ({ item, index }) => {
    return (
      <View style={styles.instructionsContainer}>
        <View style={styles.instructionItem}>
          <Text style={styles.instructionStep}>Step {index + 1}:</Text>
          <Text style={styles.instructionText}>{item}</Text>
        </View>
      </View>
    );
  };
  const handleCloseButton = () => {
    router.push("/recipes");
  };
  const handleFavouriteButton = () => {
    //logic for adding favourite recipe
    setIsFavourite(!isFavourite);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setTimeout(() => {
      //scroll to first element in list
      if (listRef.current) {
        listRef.current.scrollToIndex({ index: 0, animated: true });
      }
    }, 100);
  };
  return (
    // <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
    //   <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    //     <View style={{ flex: 1 }}>
    //       {recipe ? ( //if recipe exists
    //         <View style={styles.container}>
    //           <View style={styles.imageContainer}>
    //             <Image
    //               source={{ uri: recipe.image }}
    //               style={styles.image}
    //               resizeMode="cover"
    //             />
    //             <LinearGradient
    //               colors={[
    //                 "rgba(255, 255, 255, 0.8)",
    //                 "rgba(255, 255, 255, 0)",
    //               ]}
    //               style={styles.gradientOverlay}
    //             />
    //           </View>
    //           <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    //             <View style={styles.mainContainer}>
    //               <View style={styles.headerContainer}>
    //                 <Text style={styles.headerText}>{recipe.name}</Text>
    //                 <View style={styles.iconComponent}>
    //                   <Text style={styles.iconText}>
    //                     {" "}
    //                     {recipe.times.Preparation}
    //                   </Text>
    //                   <Ionicons
    //                     name="time-outline"
    //                     size={18}
    //                     color={Colors.YELLOW}
    //                   />
    //                 </View>
    //                 <View style={styles.iconComponent}>
    //                   <Ionicons
    //                     name="star-outline"
    //                     size={18}
    //                     color={Colors.YELLOW}
    //                   />
    //                   <Text style={styles.iconText}> {recipe.rattings}</Text>
    //                 </View>
    //               </View>
    //               <View style={styles.descriptionContainer}>
    //                 <Text style={styles.description}>
    //                   {" "}
    //                   {recipe.description}
    //                 </Text>
    //               </View>
    //               {recipe.nutrients &&
    //                 Object.keys(recipe.nutrients).length > 0 && ( //if nutrients dictionary is not empty
    //                   <View style={styles.nutrientsContainer}>
    //                     <Text style={styles.sectionTitle}>Nutrients</Text>
    //                     {Object.entries(recipe.nutrients).map(
    //                       ([key, value]) => (
    //                         <View key={key} style={styles.nutrientRow}>
    //                           <Text style={styles.nutrientKey}>{key}:</Text>
    //                           <Text style={styles.nutrientValue}>{value}</Text>
    //                         </View>
    //                       )
    //                     )}
    //                   </View>
    //                 )}
    //               <View style={styles.buttonContainer}>
    //                 <Pressable
    //                   style={[
    //                     styles.button,
    //                     activeTab === "ingredients" && styles.activeButton,
    //                   ]}
    //                   onPress={() => setActiveTab("ingredients")}
    //                 >
    //                   <Text
    //                     style={[
    //                       styles.buttonText,
    //                       activeTab === "ingredients" &&
    //                         styles.activeButtonText,
    //                     ]}
    //                   >
    //                     Ingredients
    //                   </Text>
    //                 </Pressable>
    //                 <Pressable
    //                   style={[
    //                     styles.button,
    //                     activeTab === "instructions" && styles.activeButton,
    //                   ]}
    //                   onPress={() => setActiveTab("instructions")}
    //                 >
    //                   <Text
    //                     style={[
    //                       styles.buttonText,
    //                       activeTab === "instructions" &&
    //                         styles.activeButtonText,
    //                     ]}
    //                   >
    //                     Instructions
    //                   </Text>
    //                 </Pressable>
    //               </View>
    //               <FlatList
    //                 data={
    //                   activeTab === "ingredients"
    //                     ? recipe.ingredients
    //                     : recipe.steps
    //                 }
    //                 renderItem={
    //                   activeTab === "ingredients"
    //                     ? renderIngredients
    //                     : renderInstructions
    //                 }
    //                 keyExtractor={(item, index) => index.toString()}
    //                 nestedScrollEnabled={true}
    //                 contentContainerStyle={{ paddingBottom: 20 }} // Da lista ne ide do ivice
    //                 style={{ flex: 1 }}
    //               />
    //             </View>
    //           </ScrollView>
    //         </View>
    //       ) : (
    //         <Text>Loading...</Text> //if recipe doesnt exists
    //       )}
    //     </View>
    //   </ScrollView>
    // </KeyboardAvoidingView>

    <SafeAreaView style={styles.parentContainer}>
      {recipe ? (
        <FlatList
          ref={listRef}
          data={activeTab === "ingredients" ? recipe.ingredients : recipe.steps}
          renderItem={
            activeTab === "ingredients" ? renderIngredients : renderInstructions
          }
          keyExtractor={(item, index) => index.toString()}
          nestedScrollEnabled={true}
          ListHeaderComponent={
            <>
              <View style={styles.imageContainer}>
                <View style={styles.closeButton}>
                  <Pressable onPress={() => handleCloseButton()}>
                    {({ pressed }) => (
                      <Ionicons
                        name={pressed ? "close" : "close-outline"}
                        size={30}
                        color={Colors.PURPLE}
                      />
                    )}
                  </Pressable>
                </View>
                <View style={styles.favouriteButton}>
                  <Pressable onPress={() => handleFavouriteButton()}>
                    <Ionicons
                      name={isFavourite ? "heart" : "heart-outline"}
                      size={30}
                      color={Colors.PURPLE}
                    />
                  </Pressable>
                </View>

                <Image
                  source={{ uri: recipe.image }}
                  style={styles.image}
                  resizeMode="cover"
                />
                <LinearGradient
                  colors={[
                    "rgba(255, 255, 255, 0.8)",
                    "rgba(255, 255, 255, 0)",
                  ]}
                  style={styles.gradientOverlay}
                />
              </View>
              <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                  <Text style={styles.headerText}>{recipe.name}</Text>
                  <View style={styles.iconComponent}>
                    <Text style={styles.iconText}>
                      {recipe.times.Preparation}
                    </Text>
                    <Ionicons
                      name="time-outline"
                      size={18}
                      color={Colors.YELLOW}
                    />
                  </View>
                  <View style={styles.iconComponent}>
                    <Ionicons
                      name="star-outline"
                      size={18}
                      color={Colors.YELLOW}
                    />
                    <Text style={styles.iconText}> {recipe.rattings}</Text>
                  </View>
                </View>
                <View style={styles.descriptionContainer}>
                  <Text style={styles.description}> {recipe.description}</Text>
                </View>
                {recipe.nutrients &&
                  Object.keys(recipe.nutrients).length > 0 && (
                    <View style={styles.nutrientsContainer}>
                      <Text style={styles.sectionTitle}>Nutrients</Text>
                      {Object.entries(recipe.nutrients).map(([key, value]) => (
                        <View key={key} style={styles.nutrientRow}>
                          <Text style={styles.nutrientKey}>{key}:</Text>
                          <Text style={styles.nutrientValue}>{value}</Text>
                        </View>
                      ))}
                    </View>
                  )}
                <View style={styles.buttonContainer}>
                  <Pressable
                    style={[
                      styles.button,
                      activeTab === "ingredients" && styles.activeButton,
                    ]}
                    onPress={
                      () => handleTabChange("ingredients")
                      //setActiveTab("ingredients");
                    }
                  >
                    <Text
                      style={[
                        styles.buttonText,
                        activeTab === "ingredients" && styles.activeButtonText,
                      ]}
                    >
                      Ingredients
                    </Text>
                  </Pressable>
                  <Pressable
                    style={[
                      styles.button,
                      activeTab === "instructions" && styles.activeButton,
                    ]}
                    onPress={
                      () => handleTabChange("instructions")
                      // setActiveTab("instructions");
                    }
                  >
                    <Text
                      style={[
                        styles.buttonText,
                        activeTab === "instructions" && styles.activeButtonText,
                      ]}
                    >
                      Instructions
                    </Text>
                  </Pressable>
                </View>
              </View>
            </>
          }
          ListFooterComponent={
            <>
              {activeTab === "instructions" ? (
                <View>
                  <Image
                    source={require("../../assets/illustrations/kichen.png")}
                    style={{ width: "100%", height: 300 }}
                  ></Image>

                  <View style={styles.bottomButtonContainer}>
                    <Pressable style={styles.button}>
                      <Text style={styles.buttonText}>Let's cook!</Text>
                    </Pressable>
                  </View>
                </View>
              ) : (
                <View>
                  <Image
                    source={require("../../assets/illustrations/family.png")}
                    style={{ width: "100%", height: 250 }}
                  ></Image>
                </View>
              )}
            </>
          }
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    backgroundColor: "white",
    width: 50,
    alignItems: "center",
    padding: 5,
    zIndex: 10,
    top: 100,
    left: 20,
    borderRadius: 10,
  },
  favouriteButton: {
    position: "absolute",
    backgroundColor: "white",
    width: 50,
    alignItems: "center",
    padding: 5,
    zIndex: 10,
    top: 100,
    right: 10,
    borderRadius: 10,
  },
  parentContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: 250,
  },
  image: {
    flex: 1,
  },
  gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "40%",
  },
  mainContainer: {
    flex: 1,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: 25,
    backgroundColor: Colors.PURPLE,
  },
  headerContainer: {
    flexDirection: "row",
  },
  headerText: {
    color: Colors.TURQUOISE,
    fontSize: 22,
    fontWeight: "bold",
    paddingRight: 10,
  },

  iconComponent: {
    flexDirection: "row",
    paddingRight: 5,
    paddingLeft: 5,
  },
  iconText: {
    color: Colors.YELLOW,
    fontSize: 14,
  },

  descriptionContainer: {
    paddingTop: 15,
  },
  description: {
    color: "white",
    fontSize: 15,
  },
  nutrientsContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  nutrientRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 5,
    margin: 5,
    borderRadius: 5,
    borderColor: Colors.TURQUOISE,
    borderWidth: 1,
  },
  nutrientKey: {
    fontSize: 16,
    color: "white",
  },
  nutrientValue: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.1)",
    marginTop: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: Colors.PURPLE,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  activeButton: {
    backgroundColor: Colors.TURQUOISE,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
  activeButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.PURPLE,
  },
  ingredientsContainer: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: Colors.PURPLE,
  },
  ingredientItem: {
    padding: 10,
    paddingLeft: 20,
    //alignItems: "center",
  },
  ingredientText: {
    color: Colors.PURPLE,
    fontSize: 16,
  },
  instructionsContainer: {
    backgroundColor: Colors.TURQUOISE,
  },
  instructionItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "rgba(255, 255, 255, 0.1)",

    borderRadius: 5,
  },
  instructionStep: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.PURPLE,
    paddingBottom: 5,
  },
  instructionText: {
    color: Colors.PURPLE,
    fontSize: 15,
  },
  bottomButtonContainer: {
    alignItems: "center",
    marginTop: 10,
  },
});
