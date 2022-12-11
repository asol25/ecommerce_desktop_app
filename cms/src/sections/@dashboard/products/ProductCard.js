import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components

// ----------------------------------------------------------------------

const StyledProductImg = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product, handleClickOpenVideoContainerList }) {
  const { id, title, description, thumbnailUrl, newPrice, oddPrice } = product;
  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <StyledProductImg alt={title} src={thumbnailUrl} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" sx={{ cursor: 'pointer' }} onClick={() => handleClickOpenVideoContainerList(id)}>
          <Typography variant="h5" noWrap>
            {title}
          </Typography>
        </Link>

        <Divider />

        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {description}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              {oddPrice && fCurrency(oddPrice)}
            </Typography>
            &nbsp;
            {fCurrency(newPrice)}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
