'use client';

import colors from '@/app/lib/colors';
import { Box, Typography } from '@mui/material';
import AddToCartButton from './CustomComponents/plusButton';

interface ProductCardProps {
    image: string;
    name: string;
    price: string | number;
    isSoldOut?: boolean;
    isOnSale?: boolean;
    salePrice?: string | number | null; // Add salePrice prop to pass the discounted price
}

const parentBoxStyles = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 2,
    border: { xs: '1px solid #e5e7eb', md: 'none' },
    overflow: 'hidden',
    boxShadow: { xs: 0, md: 3 },
    transition: { xs: 'none', md: 'transform 0.3s, box-shadow 0.3s' },
    '&:hover': {
        transform: { xs: 'none', md: 'scale(1.05)' },
        boxShadow: { xs: 0, md: 6 },
        cursor: 'pointer',
    },
};

const soldOutSectionStyle = {
    padding: '1rem',
    backgroundColor: colors.flagRed,
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
};

const productDetailsBox = {
    padding: '1rem',
    backgroundColor: '#fff',
    flexGrow: 1, // make text container grow to fill remaining space
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, isSoldOut = false, isOnSale = false, salePrice }) => {
    return (
        <Box sx={parentBoxStyles}>
            {/* Image */}
            <Box
                component='img'
                src={image}
                alt={name}
                sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    flexShrink: 0, // prevent image from shrinking
                }}
            />

            {/* Name & Price or Sold Out */}
            {!isSoldOut ? (
                <Box sx={productDetailsBox}>
                    <Box>
                        <Typography variant='subtitle1' sx={{ fontWeight: 600, color: '#040302' }}>
                            {name}
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                        {isOnSale ? (
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <Box>
                                <Typography
                                    variant='subtitle2'
                                    sx={{
                                        fontWeight: 700,
                                        color: 'red',
                                        fontSize: '1rem',
                                        textDecoration: 'line-through',
                                    }}
                                >
                                    ${price}
                                </Typography>
                                </Box>
                                <Box>
                                <Typography
                                    variant='subtitle2'
                                    sx={{
                                        fontWeight: 700,
                                        color: colors.black,
                                        fontSize: '1rem',
                                    }}
                                >
                                    ${salePrice}
                                </Typography>
                                </Box>
                            </Box>
                        ) : (
                            <Typography
                                variant='subtitle2'
                                sx={{ fontWeight: 700, color: colors.black, fontSize: '1rem' }}
                            >
                                ${price}
                            </Typography>
                        )}
                        <AddToCartButton />
                    </Box>
                </Box>
            ) : (
                <Box sx={soldOutSectionStyle}>
                    <Typography sx={{ fontWeight: 500, color: colors.white }}>
                        Sold Out
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default ProductCard;