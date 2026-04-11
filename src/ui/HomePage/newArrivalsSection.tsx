"use client";

import { Box, Typography, Grid, Button } from "@mui/material";
import ProductCard from "../productCard";
import products from "../../mockData/productDetails.json";
import colors from "@/app/lib/colors";

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

export default function NewArrivals() {

    return (
        <Box sx={{ margin: "0 auto", paddingY: "2rem", }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h1" sx={{ fontWeight: 700, mb: 3, fontSize: '2rem' }}>
                    New Arrivals
                </Typography>
            </Box>

            {/* MD+ screen grid container */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
                <Grid container spacing={3}>
                    {products.filter(product => product.newArrival === true).slice(0, 8).map((product) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
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
                <Box
                    sx={smallScreenDisplayStyles}
                >
                    {products.slice(0, 10).map((product) => (
                        <Box
                            key={product.id}
                            sx={{
                                flex: { xs: "0 0 80%", sm: "0 0 40%" }, // card takes 80% of viewport width
                                scrollSnapAlign: "start",
                                mb: 1
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
                <Button variant="contained" href="/collections/new-arrivals" sx={{
                    backgroundColor: colors.carrotOrange, fontWeight: 500,
                    textTransform: "none", // keeps the text as-is
                    "&:hover": {
                        backgroundColor: colors.carrotOrange, // prevent color change on hover
                    },
                }}>
                    View All
                </Button>
            </Box>
        </Box>
    );
}