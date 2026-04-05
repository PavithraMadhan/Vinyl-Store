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

            position: "relative",
            overflow: "hidden",

            backgroundColor: "#fff",
            border: "1px solid #ccc", // ✅ force border
            color: "#000",

            transition: "all 0.3s ease",

            "&:hover": {
              width: "auto",
              borderRadius: "20px",
              borderColor: colors.black,
              backgroundColor: "#fff",
              padding: "0.5rem 0.75rem",
            },

            // remove MUI default hover override
            "&:hover fieldset": {
              borderColor: colors.turfGreen,
            },

            // icon centered always
            "& .icon": {
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              transition: "all 0.3s ease",
            },

            // move icon left on hover
            "&:hover .icon": {
              left: "16px",
              transform: "translateY(-50%)",
            },

            // label hidden initially
            "& .label": {
              opacity: 0,
              marginLeft: "40px",
              whiteSpace: "nowrap",
              transition: "opacity 0.2s ease",
            },

            "&:hover .label": {
              opacity: 1,
            },
          }}
        >
          <AddIcon className="icon" />

          <Box className="label">Add to Cart</Box>
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

            "&:hover": {
              backgroundColor: colors.turfGreen,
            },
          }}
        >
          Added to Cart
        </Button>
      )}
    </Box>
  );
};

export default AddToCartButton;