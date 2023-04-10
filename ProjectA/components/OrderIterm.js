import React from "react";
import { Box, Center, FlatList, HStack, Pressable, Image, VStack ,Text, Button} from "native-base";

import Products from "../src/data/Products";
import Colors from "../src/Colors";

const OrderIterm = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={Products.slice(0, 3)}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <Pressable>
          <Box mb={3}>
            <HStack
              alignItems="center"
              bg={Colors.white}
              shadow={1}
              rounded={10}
              overflow="hidden"
            >
              <Center w="25%" bg={Colors.deepGray}>
                <Image
                  source={{ uri: item.image }}
                  alt={item.name}
                  w="full"
                  h={24}
                  resizeMod="contain"
                />
              </Center>
              <VStack w="60%" px={2}>
                <Text isTruncated color={Colors.black} bold fontSize={12}>
                    {item.name}
                </Text>
                <Text color={Colors.lightBlack} mt={2} bold>
                    ${item.price}
                </Text>
              </VStack>
              <Center> 
                <Button bg={Colors.red} _pressed={{
                    bg:Colors.red
                }}
                _text={{
                    color:Colors.white
                }}>
                    5
                </Button>
              </Center>
            </HStack>
          </Box>
        </Pressable>
      )}
    />
  );
};

export default OrderIterm;
