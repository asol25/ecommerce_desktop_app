import { useState } from 'react';
// @mui
import { Menu, Button, MenuItem, Typography } from '@mui/material';
// component
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

const SORT_BY_OPTIONS = [
  { value: 'featured', label: 'A - Z', },
  { value: 'newest', label: 'Z - A', },
  { value: 'priceDesc', label: 'Price: High-Low', },
  { value: 'priceAsc', label: 'Price: Low-High', },
];

export default function ShopProductSort(props) {
  const [selectedSort, setSelectedSort] = useState(SORT_BY_OPTIONS[0].label);

  const [open, setOpen] = useState(null);
  const caseSortProducts = {
    featured: "featured",
    newest: "newest",
    priceDesc: "priceDesc",
    priceAsc: "priceAsc"
  }
  const handleOpen = (event) => {

    setOpen(event.currentTarget);
  };

  const handleClose = (event) => {
    setOpen(null);
  };

  return (
    <>
      <Button
        color="inherit"
        disableRipple
        onClick={handleOpen}
        endIcon={<Iconify icon={open ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'} />}
      >
        Sort By:&nbsp;
        <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
          {selectedSort}
        </Typography>
      </Button>
      <Menu
        keepMounted
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {SORT_BY_OPTIONS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === 'A - Z'}
            onClick={() => {
              setSelectedSort(option.label);
              props.handleSort(caseSortProducts, option.value)
            }}
            sx={{ typography: 'body2' }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
