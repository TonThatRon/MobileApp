import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShippingScreen from "../Screen/ShippingScreen";
import PaymentScreen from "../Screen/PaymentScreen";
import PlaceOrderScreen from "../Screen/PlaceOrderScreen";
import HomeScreen from "../Screen/HomeScreen";
import SingleProductScreen from "../Screen/SingleProductScreen";

const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home "
      screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Single" component={SingleProductScreen} />
        <Stack.Screen name="Shipping" component={ShippingScreen} />
        <Stack.Screen name="Checkout" component={PaymentScreen} />
        <Stack.Screen name="Placeorder" component={PlaceOrderScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;
