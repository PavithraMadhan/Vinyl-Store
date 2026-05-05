import Banner from '@/ui/banner';
import VinylProductDisplayGrid from '@/ui/HomePage/vinylDisplayGrid';
import ProductCard from '@/ui/productCard';
import { Box, Grid } from '@mui/material';
import products from '../../../../mockData/productDetails.json';
const Home = () => {
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid size ={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
              {/* Make the card fill the height */}
              <Box sx={{ height: '100%' }}>
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
    </>
  );
};

export default Home;