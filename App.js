import React from "react";
import { View,Text, StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ProductDetails from "./screens/ProductDetails";
import HomeScreen from "./screens/HomeScreen";
import CardScreen from "./screens/CartScreen";

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
          <Stack.Screen name="Details" component={ProductDetails}></Stack.Screen>
          <Stack.Screen name="Cart" component={CardScreen}></Stack.Screen>
          {/* <View style={styles.container}>
            <HomeScreen />
            <ProductDetails />
            <CardScreen />
          </View> */}
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});