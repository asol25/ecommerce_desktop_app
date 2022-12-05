import axios from 'axios';

export const find = async () => {
  const response = await axios.get('http://localhost:33714/courses/');
  return response;
};

export const getTotalCourse = async () => {
  const response = await axios.get('http://localhost:33714/courses/totalCourseCount');
  return response;
};

export const createCourse = async (options) => {
  const course = {
    title: options.title,
    description: options.description,
    overviews: options.overviews,
    thumbnailUrl: options.thumbnailUrl,
    oddPrice: options.oldPrice,
    newPrice: options.newPrice,
  };

  const response = await axios.put('http://localhost:33714/courses/createdCourse', course);
  return response;
};
