import { useState } from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView,
  Platform, Appearance } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {Colors} from '@/constants/Colors'



export default function HomeScreen() {
  const colorScheme = Appearance.getColorScheme()
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light
  const [search, setSearch] = useState('')
  const handleSearch = () => {
    console.log('cao')
  }
  return (
    <SafeAreaView>
     <View style = {styles.container}>
      <Text style = {styles.header}>Add your ingredients</Text>
     </View>
     <View>
     <SearchBar
        containerStyle = {styles.searchContainer}
        leftIconContainerStyle = {styles.leftIconContainer}
        rightIconContainerStyle = {styles.rightIconContainer}
        clearIcon = {styles.clearIcon}
        style = {styles.searchBar}
        placeholder="Type Here..."
        onChangeText={handleSearch}
        value={search}
      />
     </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container : {
    //flex : 1,
    justifyContent : 'center',
    paddingTop : 50

  },
  header : {
  marginHorizontal : 'auto',
  fontSize : 28,
  fontWeight : 700,

 },
 searchBar : {
  backgroundColor : '#fff'
 },
 searchContainer : {
  //flex : 1,
  backgroundColor : '#fff',
  borderBottomColor: 'transparent',
  borderTopColor: 'transparent'
 },
 leftIconContainer : {
  borderBottomColor: 'transparent',
  borderTopColor: 'transparent',
  backgroundColor : '#fff',
  
 },
 rightIconContainer : {
  backgroundColor : '#fff',
 },
 clearIcon : {
  
 }
});
