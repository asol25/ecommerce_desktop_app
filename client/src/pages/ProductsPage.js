import { Helmet } from 'react-helmet-async';
import { useState, useEffect, React } from 'react';
// @mui
import { Container, Stack, Typography } from '@mui/material';
// components
import { ProductSort, ProductList, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import * as apis from '../apis/apis';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);

  useEffect(() => {
    let isChecked = true;

    if (isChecked) {
      const fetchData = async () => {
        const response = await apis.courses.find();
        const { data, status } = response;
        if (status === 200 && data.length > 0) {
          setProducts(data);
        }
      }
      fetchData();
    }

    return () => {
      isChecked = false;
    }
  }, []);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const sortName = (array) => {
    return array.sort((a, b) => {
      const nameA = a.title.toUpperCase();
      const nameB = b.title.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }

  const filteredProducts = async (options, key) => {
    console.log(options, key);
    let featured;
    let newest;
    let priceDesc
    let priceAsc;
    await setProducts([]);
    switch (key) {
      case options.featured:
        featured = await sortName(products);
        await setProducts(featured);
        break;
      case options.newest:
        newest = await products.sort((a, b) => a.title - b.title);
        await setProducts(newest);
        break;
      case options.priceDesc:

        priceDesc = await products.sort((a, b) => b.newPrice - a.newPrice);
        await setProducts(priceDesc);
        break;
      case options.priceAsc:
        priceAsc = await products.sort((a, b) => a.newPrice - b.newPrice);
        await setProducts(priceAsc);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <Helmet>
        <title> Dashboard: Courses | Minimal UI </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Courses
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar
              openFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            />
            <ProductSort handleSort={filteredProducts} />
          </Stack>
        </Stack>

        <ProductList products={products} />
      </Container>
    </>
  );
}
