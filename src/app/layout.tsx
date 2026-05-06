'use client';

import { ReactNode } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Header from '@/ui/header';
import Footer from '@/ui/footer';
import { CartProvider } from './context/CartContext'; // make sure path is correct

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <ThemeProvider theme={theme}>
          <CssBaseline /> {/* resets styles and applies theme */}
          <CartProvider> {/* <-- wrap everything with CartProvider */}
            <Header />
            <Box
              component="main"
              sx={{
                padding: '1.5rem',
                maxWidth: '1440px',
                margin: '0 auto', // centers horizontally
                width: '100%', // ensures it shrinks on smaller screens
              }}
            >
              {children}
            </Box>
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}