"use client";

import { useState } from "react";
import { Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import colors from "@/app/lib/colors";

const AddToCartButton = () => {
  const [added, setAdded] = useState(false);

  return (
    <Box>
      {!added ? (
        <Button
          variant="outlined"
          onClick={() => setAdded(true)}
          sx={{
            minWidth: 0,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            padding: 0,
            backgroundColor: "#fff",
            border: `1px solid #ccc`,
            color: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AddIcon />
        </Button>
      ) : (
        <Button
          variant="contained"
          startIcon={<CheckIcon />}
          sx={{
            height: "40px",
            borderRadius: "20px",
            textTransform: "none",
            backgroundColor: colors.turfGreen,
            color: "#fff",
            padding: "0 16px",
          }}
        >
          Added to Cart
        </Button>
      )}
    </Box>
  );
};

export default AddToCartButton;