import {
  Box,
  Center,
  FlatList,
  HStack,
  Pressable,
  Image,
  Text,
  Modal,
  VStack,
  Button,
} from "native-base";
import React from "react";
import Products from "../src/data/Products";
import Colors from "../src/Colors";
import { useState } from "react";
import Buttone from "./Buttone";

const OrdersInfos = [
  {
    title: "Products",
    price: 125.77,
    color: "black",
  },
  {
    title: "Shipping",
    price: 35.0,
    color: "black",
  },

  {
    title: "Total Amount",
    price: 3458.0,
    color: "green.700",
  },
];
const OrderModel = () => {
  const [showModel, setShowModel] = useState(false);
  return (
    <Center>
      <Buttone
        onPress={() => setShowModel(true)}
        bg={Colors.red}
        color={Colors.white}
        mt={5}
      >
        SHOW PAYMENT & TOTAL
      </Buttone>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header> Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfos.map((i, index) => (
                <HStack
                  key={index}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontWeight="medium">{i.title}</Text>
                  <Text color={i.color} bold fontSize={20}>
                    ${i.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w="full"
              justifyContent="center"
              bg={Colors.paypal}
              h={45}
              rounded={5}
              overflow="hidden"
              onPress={() => setShowModel(false)}
            >
              <Image
                source={require("../../ProjectA/assets/MBbanklogo.png")}
                alt="MBbanklogo"
                resizeMode="contain"
                w="full"
                h={70}
              />
            </Pressable>
            <Button
              w="full"
              mt={2}
              flex={1}
              bg={Colors.red}
              h={45}
              _text={{
                color: Colors.white,
              }}
              onPress={() => setShowModel(false)}
              _pressed={{
                bg: Colors.red,
              }}
            >
              PlACE AN ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModel;
