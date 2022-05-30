import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  RadioGroup,
  Radio,
  Stack,
  InputGroup,
  InputLeftElement,
  Flex,
} from "@chakra-ui/react";

const AddProduct = ({ add }) => {
  // TODO: Remove below const and instead import them from chakra
  const [form, setForm] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();

  const handeOnChange = (e) => {
    let { checked, type, name, value, files } = e.target;
    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    add({ ...form, imageSrc: "https://picsum.photos/seed/picsum2/421/260" });
    onClose();
  };
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen}>Add New Product</Button>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
        <ModalBody pb={6}>
        <FormControl>
              <FormLabel>Title</FormLabel>
          <Input data-cy="add-product-title" ref={initialRef}
              name="title" onChange={handeOnChange}/>
              </FormControl>
              <FormControl mt={4}>
              <FormLabel>Category</FormLabel> 
          <Select data-cy="add-product-category"  name="category"
            onChange={handeOnChange} >
            <option data-cy="add-product-category-shirt" value="shirt">Shirt</option>
            <option data-cy="add-product-category-pant"  value="pant">Pant</option>
            <option data-cy="add-product-category-jeans" value="jeans">jeans</option>
          </Select>
          </FormControl>
            <FormControl mt={4}>
            <FormLabel>Gender</FormLabel>
          <RadioGroup data-cy="add-product-gender"  name="gender">
          <Stack direction="row">
            <Radio data-cy="add-product-gender-male"  value="male" onChange={handeOnChange}>Male</Radio>
            <Radio data-cy="add-product-gender-female" value="female" onChange={handeOnChange} >Female</Radio>
            <Radio data-cy="add-product-gender-unisex"  value="unisex" onChange={handeOnChange}>Unisex</Radio>
            </Stack>
              </RadioGroup>
              </FormControl>
            <FormControl mt={4}>
              <FormLabel>Price</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children="Rs." />
          <Input data-cy="add-product-price" type="number" 
          name="price"  onChange={handeOnChange} />
            </InputGroup>
            </FormControl>
            <Flex flexDirection="row-reverse">
          <Button data-cy="add-product-submit-button" mt={4}
                colorScheme="teal"
                type="submit"  onClick={handleOnSubmit}>Create</Button>
                 </Flex>
        </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProduct;
