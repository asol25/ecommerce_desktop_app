import axios from "axios"

export const find = async (courseId) => {
    const response = await axios.get(`http://localhost:33714/videos/${courseId}`);
    return response;
}