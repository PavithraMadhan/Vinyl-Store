"use client";

import { Box, Typography, Grid, Button } from "@mui/material";
import ProductCard from "../productCard"; // Assuming this is your custom component
import colors from "@/app/lib/colors";
import products from "../../mockData/productDetails.json";

const smallScreenDisplayStyles = {
  display: "flex",
  overflowX: "auto",
  gap: '0.5rem',
  scrollSnapType: "x mandatory",
  "&::-webkit-scrollbar": { height: "0px" },
  "&::-webkit-scrollbar-thumb": { backgroundColor: "transparent" },
  height: "100%",
  mx: '0.25rem',
};

export default function VinylProductDisplayGrid() {

  return (
    <Box sx={{ margin: "0 auto", paddingY: "2rem" }}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h1" sx={{ fontWeight: 700, mb: 3, fontSize: {xs:'1.5rem', sm: '2rem'} }}>
          Vinyls from yours truly
        </Typography>
      </Box>

      {/* MD+ screen grid container */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Grid container spacing={3}>
          {products.slice(0, 11).map((product) => (
            <Grid size ={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
              {/* Make the card fill the height */}
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
      </Box>

      {/* XS and SM screen display */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Box sx={smallScreenDisplayStyles}>
          {products.slice(0, 7).map((product) => (
            <Box
              key={product.id}
              sx={{
                flex: { xs: "0 0 80%", sm: "0 0 40%" }, // card takes 80% of viewport width
                scrollSnapAlign: "start",
                mb: "0.25rem",
              }}
            >
              <ProductCard
                image={product.image}
                name={`${product.title} – ${product.artist}`}
                price={product.price}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: 'flex-end', flexDirection: 'row', pt: '1.5rem' }}>
        <Button
          variant="contained"
          href="/collections/new-arrivals"
          sx={{
            backgroundColor: colors.carrotOrange,
            fontWeight: 500,
            textTransform: "none", // keeps the text as-is
            "&:hover": {
              backgroundColor: colors.carrotOrange, // prevent color change on hover
            },
          }}
        >
          View All
        </Button>
      </Box>
    </Box>
  );
}