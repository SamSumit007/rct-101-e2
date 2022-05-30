import React, { useEffect, useState } from "react";
import { Flex, Grid, Spacer  } from "@chakra-ui/react";
import axios from "axios";
import Product from "./Product";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";


const Products = () => {
  const [pageFilter, setPageFilter] = useState({
    pageNumber: 1,
    limit: 3,
    totalCount: 0,
  });
  const [products, setProducts] = useState([]);

  const { pageNumber, limit } = pageFilter;

  const handleOnAdd = (body) => {
    axios.post("http://localhost:8080/products", body).then((r) => {
      setProducts([...products, r.data]);
    });
  };
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `http://localhost:8080/products?_page=${pageNumber}&_limit=${limit}`
      );
      setPageFilter({
        ...pageFilter,
        totalCount: Number(response.headers["x-total-count"]),
      });

      setProducts(response.data);
    };
    getProducts();
  }, [pageNumber, limit]);
  return (
    <Flex direction="column"
    justifyContent="center"
    alignItems="center"
    borderColor="silver.400"
    borderWidth={1.5}
    borderStyle="solid"
    borderRadius={15}
    p={4}
    mt={4}>
      {/*  AddProduct */} <AddProduct add={handleOnAdd} />
      <Grid w="100%" gridGap={4} gridTemplateColumns="repeat(3, 1fr)">{/* List of Products */}
      {products.map((pro) => (
          <Product key={pro.id} {...pro} />
        ))} </Grid>
      {/* Pagination */} <Pagination pageFilter={pageFilter} setPageFilter={setPageFilter} />
    </Flex>
  );
};

export default Products;
