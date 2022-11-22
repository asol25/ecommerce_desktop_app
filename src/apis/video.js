import axios from "axios"

export const find = async (courseId) => {
    const response = await axios.get(`https://cryptic-mesa-81897.herokuapp.com/videos/${courseId}`);
    return response;
}