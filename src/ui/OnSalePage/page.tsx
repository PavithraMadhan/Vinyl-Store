'use client';
import ProductCard from '@/ui/productCard';
import { Box, Button, Grid, Pagination } from '@mui/material';
import { useState, useEffect } from 'react';
import products from '../../mockData/productDetails.json';
import SingleImageBanner from '../singleImageBanner';
import Marquee from 'react-fast-marquee';
import colors from '@/app/lib/colors';

const OnSalePage = () => {
  // Pagination state
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate the start and end index for the products to display
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter and slice the products
  const filteredProducts = products.filter(product => product.onSale === true);
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

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]); // This effect will run when `page` changes

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '0 auto' }}>
      <SingleImageBanner title={'On Sale'} description={'Prices So Low, They Should Be Illegal.'} imageUrl={'/OnSaleBanner.jpg'} />
      <Marquee style={{ fontSize: '1.5rem', color: colors.white, backgroundColor: colors.flagRed, padding: '10px', fontWeight: '700', letterSpacing: '1.5rem' }}>      SALE      SALE      SALE      SALE      SALE      SALE      SALE      SALE      SALE      SALE      SALE      SALE      SALE      SALE      SALE      SALE      SALE      SALE      SALE      SALE      SALE      SALE      SALE      </Marquee>
      
      <Box sx={{ display: { xs: 'none', md: 'block' }, mt: '1rem' }}>
        <Grid container spacing={3}>
          {displayedProducts 
            .map((product) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
                <Box sx={{ height: '100%' }}>
                  <ProductCard
                    image={product.image}
                    name={`${product.title} – ${product.artist}`}
                    price={product.price}
                    isOnSale={product.onSale}
                    salePrice={product.salePrice}
                  />
                </Box>
              </Grid>
            ))}
        </Grid>

        {/* Pagination Controls */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Pagination
            count={Math.ceil(filteredProducts.length / itemsPerPage)} // Total pages
            page={page} // Current page
            onChange={handlePageChange} // Handle page change
            color="primary"
          />
        </Box>
      </Box>

      {/* XS and SM screen display */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Grid container spacing={3}>
          {displayedProductsMobile.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
              <Box sx={{ height: '100%' }}>
                <ProductCard
                  image={product.image}
                  name={`${product.title} – ${product.artist}`}
                  price={product.price}
                  isOnSale={product.onSale}
                  salePrice={product.salePrice}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Load More Button */}
        {displayedProductsMobile.length < filteredProducts.length && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: '1.5rem' }}>
            <Button variant="contained" color="primary" onClick={handleLoadMore}>
              Load More
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default OnSalePage;