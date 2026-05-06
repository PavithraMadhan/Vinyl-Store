'use client';

import { useState } from 'react';
import { Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import colors from '@/app/lib/colors';

const addToCartStyle = {
  minWidth: 0,
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  padding: 0,
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  color: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const addedToCartStyle = {
  height: '40px',
  borderRadius: '20px',
  textTransform: 'none',
  backgroundColor: colors.turfGreen,
  color: '#fff',
  padding: '0 1rem',
};

interface AddToCartButtonProps {
  onAdd: () => void; // called when the product is added to cart
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onAdd }) => {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    onAdd();        // update the cart context
    setAdded(true); // switch button UI
  };

  return (
    <Box>
      {!added ? (
        <Button variant="outlined" onClick={handleClick} sx={addToCartStyle}>
          <AddIcon />
        </Button>
      ) : (
        <Button variant="contained" startIcon={<CheckIcon />} sx={addedToCartStyle}>
          Added to Cart
        </Button>
      )}
    </Box>
  );
};

export default AddToCartButton;