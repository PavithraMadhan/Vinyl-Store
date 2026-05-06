'use client';

import { useState } from 'react';
import { Box, Popover, Typography, Link } from '@mui/material';

export default function ProductHotspots() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [tooltipContent, setTooltipContent] = useState<{ heading: string; description: string; url: string } | null>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    content: { heading: string; description: string; url: string }
  ) => {
    setAnchorEl(event.currentTarget);
    setTooltipContent(content);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setTooltipContent(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'hotspot-popover' : undefined;

  return (
    <Box position="relative" width="100%">
      {/* Desktop / md+ */}
      <Box
        component="img"
        src="/AT-LP70X_desktop_03_1.jpg"
        alt=""
        sx={{
          width: '100%',
          height: 'auto',
          display: { xs: 'none', md: 'block' }, // hidden on xs
        }}
      />

      {/* Mobile / xs */}
      <Box
        component="img"
        src="/AT-LP70X_desktop_03_1_Mobile.jpg"
        alt=""
        sx={{
          width: '100%',
          height: 'auto',
          display: { xs: 'block', md: 'none' }, // hidden on md+
        }}
      />
      {/* HOTSPOT 1 */}
      <Box
        onClick={(e) =>
          handleClick(e, {
            heading: 'AT-LP60XBT-1 Turntable',
            description: 'High-quality Bluetooth turntable for vinyl enthusiasts.',
            url: '/products/audio-technica-at-lp60xbt-1',
          })
        }
        sx={{
          position: 'absolute',
          left: '42%',
          top: '54%',
          transform: 'translate(-50%, -50%)',
          width: 20,
          height: 20,
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.6)',
          border: '2px solid white',
          cursor: 'pointer',
        }}
      />

      {/* HOTSPOT 2 */}
      <Box
        onClick={(e) =>
          handleClick(e, {
            heading: 'AT-SP3X Speakers',
            description: 'Powered bookshelf speakers for crisp, clear sound.',
            url: '/products/audio-technica-at-sp3x-powered-bookshelf-speakers',
          })
        }
        sx={{
          position: 'absolute',
          left: '82%',
          top: '41%',
          transform: 'translate(-50%, -50%)',
          width: 20,
          height: 20,
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.6)',
          border: '2px solid white',
          cursor: 'pointer',
        }}
      />

      {/* Tooltip Popover */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          sx: { p: 2, maxWidth: 220 },
        }}
      >
        {tooltipContent && (
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography sx={{ fontWeight: 700, fontSize: '1rem' }}>
              {tooltipContent.heading}
            </Typography>
            <Typography sx={{ fontSize: {xs: '0.75rem', md: '0.875rem'} }}>{tooltipContent.description}</Typography>
            <Link href={tooltipContent.url} color="primary" sx={{ fontSize: '0.75rem', fontWeight: 700, textDecoration: 'underline' }}>
              Learn More
            </Link>
          </Box>
        )}
      </Popover>
    </Box>
  );
}