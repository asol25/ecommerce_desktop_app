import axios from "axios"

export const find = async (id) => {
    const response = await axios.get(`${process.env.SERVER_API || 'http://localhost:33714'}/commentes/${id}`);
    return response;
}