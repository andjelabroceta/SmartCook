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
} from "react-native";
import { SearchBar } from "react-native-elements";
import { Colors } from "@/constants/Colors";
import Background from "@/assets/images/background.jpg";
import { TextInput } from "react-native-gesture-handler";

export default function HomeScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const [search, setSearch] = useState("");
  const { width, height } = Dimensions.get("window"); //za uklapanje slike u ekran
  const [pressed, setPressed] = useState(false); //aktivnost dugmadi

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Add your ingredients</Text>
        </View>

        {/* <TextInput style = {styles.searchBar}
      onChangeText={}
      value = {}>

      </TextInput> */}
        {/* <SearchBar
        containerStyle = {styles.searchContainer}
        leftIconContainerStyle = {styles.leftIconContainer}
        rightIconContainerStyle = {styles.rightIconContainer}
        clearIcon = {styles.clearIcon}
        style = {styles.searchBar}
        placeholder="Type Here..."
        onChangeText={handleSearch}
        value={search}
      /> */}

        <View style={styles.buttonContainer}>
          <Pressable
            style={[styles.mealButton, pressed && styles.buttonPressed]}
          >
            <Text style={styles.mealButtonText}>Breakfast</Text>
          </Pressable>
          <Pressable
            style={[styles.mealButton, pressed && styles.buttonPressed]}
          >
            <Text style={styles.mealButtonText}>Lunch</Text>
          </Pressable>
          <Pressable
            style={[styles.mealButton, pressed && styles.buttonPressed]}
          >
            <Text style={styles.mealButtonText}>Dinner</Text>
          </Pressable>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/images/list.jpg")}
            style={{ width: width, height: height * 0.6, marginTop: 10 }}
            resizeMode="contain "
          />
        </View>
        <Pressable style={[styles.mainButton, pressed && styles.buttonPressed]}>
          <Text style={styles.mainButtonText}>Give me recipe!</Text>
        </Pressable>
      </View>
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
  },
  //  searchBar : {
  //   backgroundColor : '#fff'
  //  },
  //  searchContainer : {
  //   //flex : 1,
  //   backgroundColor : '#fff',
  //   borderBottomColor: 'transparent',
  //   borderTopColor: 'transparent'
  //  },
  //  leftIconContainer : {
  //   borderBottomColor: 'transparent',
  //   borderTopColor: 'transparent',
  //   backgroundColor : '#fff',

  //  },
  //  rightIconContainer : {
  //   backgroundColor : '#fff',
  //  },
  //  clearIcon : {

  //  },
  imageContainer: {
    alignItems: "center",
    marginLeft: 35,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 10,
    marginTop: 20,
    alignItems: "center",
  },
  mealButton: {
    backgroundColor: "#dedddc",
    width: 100,
    height: 50,
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  mealButtonText: {
    color: "white",
    fontSize: 18,
  },
  mainButton: {
    marginHorizontal: "auto",
    marginVertical: 15,
    width: 400,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#dedddc",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  mainButtonText: {
    color: "white",
    fontSize: 22,
    fontWeight: 600,
  },
  buttonPressed: {
    backgroundColor: "#0AA296",
  },
});
