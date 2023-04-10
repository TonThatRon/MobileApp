import React from "react";
import {
  View,
  Text,
  Box,
  Image,
  Heading,
  VStack,
  Input,
  Button,
} from "native-base";

import Colors from "../Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Pressable } from "react-native";

function LoginScreen({navigation}) {
  return (
    <Box flex="1" bg={Colors.black}>
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.jpg")}
      ></Image>
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading>LOGIN</Heading>
        <VStack space={5} pt="6">
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={30} color={Colors.subGreen} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            placeholderTextColor={Colors.subGreen}
            w="70%"
            pl={2}
            color={Colors.subGreen}
            borderBottomColor={Colors.underline}
          />
          <Input
            InputLeftElement={
              <AntDesign name="eye" size={30} color={Colors.subGreen} />
            }
            variant="underlined"
            placeholder="*******"
            placeholderTextColor={Colors.subGreen}
            w="70%"
            type="password"
            pl={2}
            color={Colors.subGreen}
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button
          _pressed={{
            bg: Colors.main,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.blue}
          onPress={() => navigation.navigate("Bottom")}
        >
          LOGIN
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
          <Text color={Colors.red} size="sm">
            
            SIGN UP
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default LoginScreen;
