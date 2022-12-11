import axios from "axios";

export const find = async () => {
    const response = await axios.get(`${process.env.SERVER_API || 'http://localhost:33714'}/categorys`);
    return response;
}