'use client';
import ProductCard from "@/ui/productCard";
import { Box, Button, Grid, Pagination } from "@mui/material";
import { useState } from "react";
import products from "../../mockData/productDetails.json";
import SingleImageBanner from "../singleImageBanner";

const NewArrivalsPage = () => {
  // Pagination state
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate the start and end index for the products to display
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter and slice the products
  const filteredProducts = products.filter(product => product.newArrival === true);
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // State to keep track of the number of products to shown mobile view
  const [productsToShow, setProductsToShow] = useState(5);

  // Display the sliced array of products
  const displayedProductsMobile = filteredProducts.slice(0, productsToShow);

  // Load more function to add 5 more products
  const handleLoadMore = () => {
    setProductsToShow(productsToShow + 5);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: '1rem', margin: "0 auto"}}>
    <SingleImageBanner title={"New Arrivals"} description={"Discover our latest collection of your favourites."} imageUrl={"/NewArrivalsBanner.jpeg"} />
      <Box sx={{ display: { xs: "none", md: "block" }, mt: "1rem" }}>
        <Grid container spacing={3}>
          {displayedProducts.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
              <Box sx={{ height: "100%" }}>
                <ProductCard
                  image={product.image}
                  name={`${product.title} – ${product.artist}`}
                  price={product.price}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* Pagination Controls */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Pagination
            count={Math.ceil(filteredProducts.length / itemsPerPage)} // Total pages
            page={page} // Current page
            onChange={handlePageChange} // Handle page change
            color="primary"
          />
        </Box>
      </Box>

      {/* XS and SM screen display */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Grid container spacing={3}>
          {displayedProductsMobile.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
              <Box sx={{ height: "100%" }}>
                <ProductCard
                  image={product.image}
                  name={`${product.title} – ${product.artist}`}
                  price={product.price}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* Load More Button */}
        {displayedProductsMobile.length < filteredProducts.length && (
          <Box sx={{ display: "flex", justifyContent: "flex-end", pt: '1.5rem' }}>
            <Button variant="contained" color="primary" onClick={handleLoadMore}>
              Load More
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default NewArrivalsPage;