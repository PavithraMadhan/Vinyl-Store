'use client';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const images = [
  '/BannerImg1.jpeg',
  '/BannerImg2.jpeg',
  '/BannerImg3.jpeg',
];

const bannerImageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'opacity 1s ease-in-out',
};

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 200, sm: 300, md: 400 }, // responsive height
        margin: '0 auto',
        overflow: 'hidden',
        borderRadius: '8px',
      }}
    >
      {images.map((src, index) => (
        <Box
          key={index}
          component="img"
          src={src}
          alt={`Slide ${index}`}
          sx={{ ...bannerImageStyle, opacity: index === current ? 1 : 0 }}
        />
      ))}
    </Box>
  );
}