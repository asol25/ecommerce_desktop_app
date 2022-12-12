import axios from 'axios';

export const find = async (courseId) => {
  const response = await axios.get(`${(process.env.REACT_APP_VERCEL_ENV_API || 'http://localhost:33714')}/videos/${courseId}`);
  return response;
};

export const createVideo = async (video, _id) => {
  const _video = {
    title: video.title,
    description: video.description,
    thumbanailUrl: video.videoThumbnail,
    videoUrl: video.videoUrl,
  };
  const response = await axios.put(`${(process.env.REACT_APP_VERCEL_ENV_API || 'http://localhost:33714')}/videos/createVideo/${_id}`, _video);
  return response;
};
