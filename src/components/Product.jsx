import React from "react";

import {
  Text,
  Image,
  Box,
  Stack,
  Heading,
  Tag,
  TagLabel,
  Flex,
} from "@chakra-ui/react";
const Product = ({ imageSrc, title, category, price, gender }) => {
  // TODO: Remove below const and instead import them from chakra
 
  return (
    <Stack data-cy="product"  boxShadow={"2xl"} rounded={"lg"} p={6} >
      <Image data-cy="product-image" rounded={"lg"}
      height={250} objectFit={"cover"} src={imageSrc}/>
       <Flex justifyContent={"space-between"}>
      <Text data-cy="product-category" color="blue.500"
        textTransform="uppercase">{category}</Text>
        {gender && (
      <Tag size="sm"
      variant="subtle"
      colorScheme="red">
        <TagLabel data-cy="product-gender" textTransform="uppercase">{gender}</TagLabel>
      </Tag>
         )}
      </Flex>
      <Heading data-cy="product-title" color="blue.500"
      size="md"
      textTransform="capitalize">{title}</Heading>
      <Box data-cy="product-price"> {"Rs. "} {price}
      <Box as="span" color="silver.700" fontSize="sm"> / unit </Box>
      </Box>
    </Stack>
  );
};

export default Product;
