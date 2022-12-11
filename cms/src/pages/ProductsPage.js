import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { useState, useEffect, React } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

// @mui
import { alpha, Container, InputAdornment, OutlinedInput, Stack, styled, Typography, Grid } from '@mui/material';
// components
import NewCourse from '../components/products/NewCourse';
import { ProductSort, ProductList, ProductFilterSidebar } from '../sections/@dashboard/products';
// mock
import * as apis from '../apis/apis';
import Iconify from '../components/iconify';
// ----------------------------------------------------------------------

const StyledSearch = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': {
    width: 320,
    boxShadow: theme.customShadows.z8,
  },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
  },
}));

export default function ProductsPage() {
  const { isAuthenticated, user } = useAuth0();

  const [products, setProducts] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [filterProductCategory, setFilterCategoryOptions] = useState(null);
  const [filterProductPrice, setFilterProductPriceOptions] = useState(null);
  const [filterProductRating, setFilterProductRatingOptions] = useState(null);
  const [searchNameCourse, setSearchCourse] = useState('');
  const [isCheckedNewCoursesSussecfuly, setIsCheckedNewCoursesSussecfuly] = useState(true);

  const applySortFilter = (array, price, rating, search, course) => {
    let stabilizedThis = array;
    if (course) {
      stabilizedThis = filter(
        stabilizedThis,
        (_node) => _node.title.toUpperCase().indexOf(course.toUpperCase()) !== -1
      );
    }
    if (price) {
      stabilizedThis = filter(stabilizedThis, (_node) => Number(_node.newPrice) < Number(price));
    }

    if (search) {
      return filter(stabilizedThis, (_node) => _node.category.id === search);
    }

    return stabilizedThis;
  };
  const filterProducts = products
    ? applySortFilter(products, filterProductPrice, filterProductRating, filterProductCategory, searchNameCourse)
    : null;

  useEffect(() => {
    let isChecked = true;

    if (isChecked) {
      const fetchData = async () => {
        const response = await apis.courses.find();
        const { data, status } = response;
        if (status === 200 && data.length > 0) {
          setProducts(data);
        }
      };
      fetchData();
    }

    return () => {
      isChecked = false;
    };
  }, [isCheckedNewCoursesSussecfuly]);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleFilterByusername = (event) => {
    setSearchCourse(event.target.value);
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
  };

  const filteredProducts = async (options, key) => {
    console.log(options, key);
    let featured;
    let newest;
    let priceDesc;
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
  };

  return (
    <>
      <Helmet>
        <title> Dashboard: Courses | Minimal UI </title>
      </Helmet>



      {(isAuthenticated && user.email === (process.env.EMAIL || "usool.203@gmail.com")) && <>
        <Container>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Courses
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent={'space-between'}>
            <StyledSearch
              value={searchNameCourse}
              onChange={handleFilterByusername}
              placeholder="Search user..."
              startAdornment={
                <InputAdornment position="start">
                  <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                </InputAdornment>
              }
            />
            <NewCourse isCheckedNewCoursesSussecfuly={isCheckedNewCoursesSussecfuly} onChange={setIsCheckedNewCoursesSussecfuly} />
          </Stack>

          <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
            <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
              <ProductFilterSidebar
                openFilter={openFilter}
                onOpenFilter={handleOpenFilter}
                onCloseFilter={handleCloseFilter}
                handleFilter={{
                  setFilterCategoryOptions,
                  setFilterProductPriceOptions,
                  setFilterProductRatingOptions,
                }}
              />
              <ProductSort handleSort={filteredProducts} />
            </Stack>
          </Stack>

          <ProductList products={filterProducts} />
        </Container>
      </>}
    </>
  );
}
