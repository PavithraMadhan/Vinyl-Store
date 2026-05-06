'use client';

import { Box, Typography, Link } from '@mui/material';
import colors from '@/app/lib/colors';

export default function Footer() {
  const quickLinks = [
    { label: 'New Arrivals', href: '/collections/new-arrivals' },
    { label: 'On Sale', href: '/collections/on-sale' },
    { label: 'Accessories', href: '/collections/accessories' },
    { label: 'More', href: '/collections/more' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: colors.carbonBlack,
        color: colors.white,
        py: 4,
        px: { xs: 2, md: 6 },
      }}
    >
      <Box
        sx={{
          maxWidth: '1440px',
          mx: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: 4,
        }}
      >
        {/* About */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            MyStore
          </Typography>
          <Typography variant="body2">
            Your favorite vinyl record store. Discover new releases, classics, and exclusive editions.
          </Typography>
        </Box>

        {/* Links Section */}
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                underline="none"
                sx={{
                  color: colors.white,
                  '&:hover': { color: colors.carrotOrange },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Box>
        </Box>

        {/* Contact */}
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Contact Us
          </Typography>
          <Typography variant="body2">Email: support@mystore.com</Typography>
          <Typography variant="body2">Phone: +1 (123) 456-7890</Typography>
        </Box>
      </Box>

      {/* Copyright */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body2" sx={{ color: colors.dustGrey }}>
          &copy; {new Date().getFullYear()} MyStore. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}