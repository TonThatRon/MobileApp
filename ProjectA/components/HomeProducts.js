import React from "react";
import {
  ScrollView,
  Text,
  Flex,
  Heading,
  Image,
  Box,
  Pressable,
} from "native-base";
import Products from "../src/data/Products";
import Colors from "../src/Colors";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";

function HomeProducts() {
  const navigation = useNavigation()
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {Products.map((Products) => (
          <Pressable
          onPress={() =>navigation.navigate("Single",Products)}
            key={Products._id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden"
          >
            <Image
              source={{ uri: Products.image }}
              alt={Products.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                ${Products.price}
              </Heading>
              <Text fontSize={15} mt={1} isTruncated w="full">
                {Products.name}
              </Text>
              <Rating value={Products.rating} />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

export default HomeProducts;
