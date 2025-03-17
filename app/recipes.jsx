import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Recipes = () => {
  return (
    <SafeAreaView style = {{flex : 1}}>
        <View style = {styles.mainContainer}>
            <View style = {styles.headerContainer}>
              <Text style = {styles.header}>Recipes</Text>
            </View>
            <View style = {styles.header2Container}>
              <Text style = {styles.header2}>Choose your favourite!</Text>
            </View>
        </View>
    </SafeAreaView>
  )
}
export default Recipes
const styles = StyleSheet.create({
    mainContainer : {
    flex : 1,
    backgroundColor : 'white'
    },
    headerContainer : {
    //flex : 1,
    justifyContent : 'center',
    paddingTop : 15,
    },
    header : {
    marginHorizontal : 'auto',
    fontSize : 28,
    fontWeight : 700,

    },
    header2Container : {
    justifyContent : 'center',
    paddingTop : 15, 
    },
    header2 : {
        color : '#0AA296'
    }

})