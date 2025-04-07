import { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Pressable,
  Dimensions,
  Link,
  Platform,
  Appearance,
  TextInput,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { SearchBar } from "react-native-elements";
import { Colors } from "@/constants/Colors";
import Background from "@/assets/images/background.jpg";

import { handleUrlParams } from "expo-router/build/fork/getStateFromPath-forks";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const { width, height } = Dimensions.get("window");
  const [pressed, setPressed] = useState(false);
  const [text, setText] = useState("");
  const [ingredientAdded, setIgredientdded] = useState(false);
  const [ingredients, setIngredients] = useState([]);

  const handleAddIngredientButton = () => {
    if (text.trim() != "") {
      setIngredients([...ingredients, text]); //text from textInput is added to list of ingredients
      setText(""); //textInput is empty
      setIgredientdded(true);
    }
  };
  const handleDelete = (indexToDelete) => {
    //removes ingredient from list
    const updatedIngredients = ingredients.filter(
      (_, index) => index !== indexToDelete
    );
    setIngredients(updatedIngredients);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Add your ingredients</Text>
          </View>
          <View style={styles.addIngredientContainer}>
            <View style={styles.searchBarContainer}>
              <TextInput
                style={styles.searchBar}
                onChangeText={setText}
                value={text}
              ></TextInput>
            </View>
            <Pressable
              style={styles.addButton}
              onPress={() => handleAddIngredientButton()}
            >
              <Ionicons name="add" size={20} color={"black"} />
            </Pressable>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require("@/assets/images/list.jpg")}
              style={{ width: width, height: height * 0.5 }}
              resizeMode="cover"
            />
            <View style={styles.textOnImageContainer}>
              {ingredients.map((item, index) => (
                <View key={index} style={styles.listContainer}>
                  <Text style={styles.textOnImage}>• {item}</Text>
                  <Pressable
                    style={styles.deleteButton}
                    onPress={() => handleDelete(index)}
                  >
                    <Ionicons name="trash" size={20} color={"white"} />
                  </Pressable>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.categoriesContainer}>
            <Text style={styles.categoriesSubheader}>
              Do you want some special recipe?
            </Text>
            <View style={styles.buttonContainer}>
              <ScrollView horizontal={true}>
                <View style={{ flexDirection: "column" }}>
                  <Pressable style={styles.button}>
                    <Image
                      source={require("../../assets/icons/birthday.png")}
                      style={{ width: 30, height: 30 }}
                    />
                  </Pressable>
                  <Text style={styles.buttonText}>Birthday</Text>
                </View>

                <View style={{ flexDirection: "column" }}>
                  <Pressable style={styles.button}>
                    <Image
                      source={require("../../assets/icons/dessert.png")}
                      style={{ width: 30, height: 30 }}
                    />
                  </Pressable>
                  <Text style={styles.buttonText}>Dessert</Text>
                </View>

                <View style={{ flexDirection: "column" }}>
                  <Pressable style={styles.button}>
                    <Image
                      source={require("../../assets/icons/fitness.png")}
                      style={{ width: 30, height: 30 }}
                    />
                  </Pressable>
                  <Text style={styles.buttonText}>Fitness</Text>
                </View>

                <View style={{ flexDirection: "column" }}>
                  <Pressable style={styles.button}>
                    <Image
                      source={require("../../assets/icons/cocktail.png")}
                      style={{ width: 30, height: 30 }}
                    />
                  </Pressable>
                  <Text style={styles.buttonText}>Cocktails</Text>
                </View>

                <View style={{ flexDirection: "column" }}>
                  <Pressable style={styles.button}>
                    <Image
                      source={require("../../assets/icons/breakfast.png")}
                      style={{ width: 30, height: 30 }}
                    />
                  </Pressable>
                  <Text style={styles.buttonText}>Breakfast</Text>
                </View>

                <View style={{ flexDirection: "column" }}>
                  <Pressable style={styles.button}>
                    <Image
                      source={require("../../assets/icons/dinner.png")}
                      style={{ width: 30, height: 30 }}
                    />
                  </Pressable>
                  <Text style={styles.buttonText}>Dinner</Text>
                </View>

                <View style={{ flexDirection: "column" }}>
                  <Pressable style={styles.button}>
                    <Image
                      source={require("../../assets/icons/lunch.png")}
                      style={{ width: 30, height: 30 }}
                    />
                  </Pressable>
                  <Text style={styles.buttonText}>Lunch</Text>
                </View>

                <View style={{ flexDirection: "column" }}>
                  <Pressable style={styles.button}>
                    <Image
                      source={require("../../assets/icons/pasta.png")}
                      style={{ width: 30, height: 30 }}
                    />
                  </Pressable>
                  <Text style={styles.buttonText}>Pasta</Text>
                </View>

                <View style={{ flexDirection: "column" }}>
                  <Pressable style={styles.button}>
                    <Image
                      source={require("../../assets/icons/seafood.png")}
                      style={{ width: 30, height: 30 }}
                    />
                  </Pressable>
                  <Text style={styles.buttonText}>Seafood</Text>
                </View>

                {/* <Pressable style={styles.button}>
                  <Image
                    source={require("../../assets/icons/vegetarian.png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text style={styles.buttonText}>Vegetarian</Text>
                </Pressable> */}
                <View style={{ flexDirection: "column" }}>
                  <Pressable style={styles.button}>
                    <Image
                      source={require("../../assets/icons/vegetarian.png")}
                      style={{ width: 30, height: 30 }}
                    />
                  </Pressable>
                  <Text style={styles.buttonText}>Vegetarian</Text>
                </View>
              </ScrollView>
            </View>
          </View>

          <Pressable
            style={[styles.mainButton, pressed && styles.buttonPressed]}
            onPress={() =>
              router.push({
                pathname: "/recipes",
                params: {
                  ingredients: JSON.stringify(ingredients),
                },
              })
            }
          >
            <Text style={styles.mainButtonText}>Give me recipe!</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    //flex : 1,
    justifyContent: "center",
    paddingTop: 15,
  },
  header: {
    marginHorizontal: "auto",
    fontSize: 28,
    fontWeight: 700,
    color: Colors.PURPLE,
  },
  addIngredientContainer: {
    flexDirection: "row",
    margin: "auto",
  },
  searchBar: {
    backgroundColor: "#fff",
    color: "black",
  },
  searchBarContainer: {
    paddingVertical: 10,
    margin: 10,
    height: 50,
    width: 200,
    padding: 5,
    borderRadius: 10,
    borderColor: Colors.GREY,
    borderWidth: 2,
    backgroundColor: "#fff",
  },
  addButton: {
    backgroundColor: Colors.TURQUOISE,
    height: 35,
    borderRadius: 5,
    marginTop: 15,
    padding: 5,
  },
  imageContainer: {
    alignItems: "center",
    marginLeft: 35,
    position: "relative",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 15,
  },
  button: {
    marginRight: 25,
    backgroundColor: Colors.YELLOW,
    borderRadius: 100,
    borderColor: Colors.YELLOW,
    borderWidth: 2,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    backgroundColor: Colors.PURPLE,
    borderRadius: 5,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 14,
  },
  mainButton: {
    marginHorizontal: "auto",
    marginTop: 2,
    width: 400,
    height: 50,
    borderRadius: 20,
    backgroundColor: Colors.TURQUOISE,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  mainButtonText: {
    color: Colors.PURPLE,
    fontSize: 22,
    fontWeight: 600,
  },
  buttonPressed: {
    backgroundColor: Colors.YELLOW,
    color: Colors.PURPLE,
  },
  textOnImageContainer: {
    position: "absolute",
    top: 50,
    width: "100%",
    paddingHorizontal: 50,
  },
  textOnImage: {
    fontStyle: "italic",
    fontSize: 16,
    paddingTop: 5,
    color: Colors.PURPLE,
    flexShrink: 1,
    maxWidth: "90%",
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  deleteButton: {
    //marginLeft: 100,
    alignItems: "center",
    backgroundColor: Colors.PURPLE,
    borderRadius: 5,
    padding: 5,
    marginBottom: 2,
  },
  categoriesContainer: {
    flex: 1,
    marginTop: 10,
    marginLeft: 30,
    marginBottom: 20,
    margin: "auto",
  },
  categoriesSubheader: {
    color: Colors.PURPLE,
    fontSize: 20,
  },
});
