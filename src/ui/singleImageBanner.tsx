import { Box, Typography } from "@mui/material";

interface BannerProps {
  imageUrl: string; // Image URL for the banner
  title: string; // Main title (e.g., "New Arrivals")
  description: string; // Description text (e.g., "Discover our latest collection of products.")
}

const SingleImageBanner: React.FC<BannerProps> = ({ imageUrl, title, description }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "300px", // Adjust this for the desired banner height
        backgroundImage: `url(${imageUrl})`, // Use the passed image URL prop
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 2, // Optional, adds rounded corners to the banner
      }}
    >
      {/* Overlay text */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          zIndex: 10, // Ensure text is on top
        }}
      >
        {/* Main Heading */}
        <Typography variant="h1" sx={{ fontWeight: "bold", fontSize: "3rem", mb: 1 }}>
          {title} {/* Display the title passed as a prop */}
        </Typography>

        {/* Description */}
        <Typography variant="body1" sx={{ fontSize: "1.2rem", fontWeight: 300 }}>
          {description} {/* Display the description passed as a prop */}
        </Typography>
      </Box>
    </Box>
  );
};

export default SingleImageBanner;