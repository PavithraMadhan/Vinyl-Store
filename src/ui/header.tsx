"use client";

import { Box, Button, Typography } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import colors from "@/app/lib/colors";

const navItems = [
    { label: "New Arrivals", href: "/collections/new-arrivals" },
    { label: "On Sale", href: "/on-sale" },
    { label: "Accessories", href: "/accessories" },
    { label: "More", href: "/more" },
];

const headerParentStyle = {
    maxWidth: "1440px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    py: '0.5rem',
    px: '0.75rem',
};

export default function Header() {
    return (
        <Box
            component="header"
            sx={{
                width: "100%",
                borderBottom: "1px solid #e5e7eb",
            }}
        >
            <Box
                sx={ headerParentStyle }
            >
                <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                    {/* Logo */}
                    <Typography variant="h6" fontWeight="bold">
                        MyStore
                    </Typography>

                    {/* Navigation */}
                    <Box
                        component="nav"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: '1rem',
                        }}
                    >
                        {navItems.map((item) => (
                            <Button key={item.href} href={item.href} variant="text"
                                sx={{
                                    textTransform: "none",
                                    padding: "0.5rem 1rem",
                                    borderRadius: 1,
                                    transition: "background-color 0.3s, color 0.3s",
                                    "&:hover": {
                                        backgroundColor: colors.turfGreen, // background changes on hover
                                        color: colors.white, // text color changes on hover
                                    },
                                }}>
                                <Typography sx={{ fontWeight: '500' }}>
                                    {item.label}
                                </Typography>
                            </Button>
                        ))}
                    </Box>
                </Box>

                {/* Right-side icons/buttons */}
                <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                    <ShoppingCartOutlinedIcon sx={{ width: '1.5rem', height: '1.5rem', color: '#000' }} />

                    {/* Mobile menu icon */}
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        <MenuOutlinedIcon sx={{ width: '1.5rem', height: '1.5rem', color: '#000' }} />
                    </Box>

                    {/* Sign In button */}
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Button variant="contained" sx={{ textTransform: 'none' }}>
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}