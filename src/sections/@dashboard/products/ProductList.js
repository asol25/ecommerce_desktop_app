import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// @mui
import { Grid } from '@mui/material';
import { VideoContainerList } from '../../../components/products/VideoContrainerList';
import ShopProductCard from './ProductCard';
import * as apis from '../../../apis/apis';
// ----------------------------------------------------------------------

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default function ProductList({ products, ...other }) {
  const [courseId, setCourseId] = useState(1);
  const [isCheckedSaveVideo, setIsCheckedSaveVideo] = useState(true);
  const [courseVideos, setCourseVideos] = useState([]);
  const [openVideoContainerList, setOpenVideoContainerList] = useState(false);

  const handleClickOpenVideoContainerList = (_courseId) => {
    setCourseId(_courseId);
    setOpenVideoContainerList(true);
  };

  const handleCloseVideoContainerList = () => {
    setOpenVideoContainerList(false);
  };

  useEffect(() => {
    let isChecked = true;

    if (isChecked) {
      const fetchData = async () => {
        console.log(`#courseId: ${courseId}`);
        const response = await apis.videos.find(courseId);
        const { data, status } = await response;
        if (status === 200) {
          setCourseVideos(data);
        }
      };
      fetchData();
    }
    return () => {
      isChecked = false;
    };
  }, [isCheckedSaveVideo, courseId]);
  return (
    <>
      <Grid container spacing={3} {...other}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={3}>
            <ShopProductCard product={product} handleClickOpenVideoContainerList={handleClickOpenVideoContainerList} />
          </Grid>
        ))}
      </Grid>

      <VideoContainerList
        open={openVideoContainerList}
        handleClose={handleCloseVideoContainerList}
        videos={courseVideos}
        courseId={courseId}
        onHandleSussesUploadVideo={setIsCheckedSaveVideo}
        stateSusses={isCheckedSaveVideo}
      />
    </>
  );
}
