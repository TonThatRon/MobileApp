import React from "react";
import { Image, Box, Center, VStack, Button } from "native-base";
import Colors from "../Colors";
import Buttone from "../../components/Buttone";

function NotVerifyScreen() {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <Image
          source={require("../../assets/icons8-marketplace-hub-64.png")}
          alt="Logo"
          size="lg"
        />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <Buttone bg={Colors.deepGray} color={Colors.red}>
          REGISTER
        </Buttone>
        <Buttone bg={Colors.blue} color={Colors.red}>
          LOGIN
        </Buttone>
      </VStack>
    </Box>
  );
}

export default NotVerifyScreen;
