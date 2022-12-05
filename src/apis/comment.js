import axios from "axios"

export const find = async (id) => {
    const response = await axios.get(`http://localhost:33714/commentes/${id}`);
    return response;
}