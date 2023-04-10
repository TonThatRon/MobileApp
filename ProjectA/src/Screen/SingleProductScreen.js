import React, { useState } from "react";
import {
  Box,
  ScrollView,
  Image,
  HStack,
  Heading,
  Spacer,
  Text,
  text,
} from "native-base";
import Colors from "../Colors";
import Rating from "../../components/Rating";
import { View, TextInput, TouchableOpacity } from "react-native";
import Buttone from "../../components/Buttone";
import Review from "../../components/Review";
import { useNavigation } from "@react-navigation/native";

function SingleProductScreen({ route }) {
  const navigation = useNavigation();
  const Products = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < Products.countInStock) setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: Products.image }}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {Products.name}
        </Heading>
        <Rating
          value={Products.rating}
          text={`${Products.numReviewers} reviews`}
        />
        <HStack space={2} alignItems="center" my={5}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5,
              padding: 5,
            }}
          >
            <TouchableOpacity onPress={decreaseQuantity}>
              <Text style={{ fontSize: 24, fontWeight: "bold", padding: 5 }}>
                -
              </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 20, marginHorizontal: 10 }}>
              {quantity}
            </Text>
            <TouchableOpacity onPress={increaseQuantity}>
              <Text style={{ fontSize: 24, fontWeight: "bold", padding: 5 }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          <Spacer />
          <Heading bold color={Colors.black}>
            ${Products.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          Picture this: me, on Earth, still cooler than everyone this side of
          Optimus Prime, but I've got zero memories. Now I'm on a mission to
          recover my memories and discover all of my awesome powers. I'll have
          to battle Decepticons, outrun an explosion or two, and be heroic-
          basically, I'm in for one epic ride across the Cyberverse."
        </Text>
        <Buttone
          onPress={() => navigation.navigate("Cart")}
          bg={Colors.red}
          color={Colors.black}
          mt={10}
        >
          ADD TO CART
        </Buttone>
        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
