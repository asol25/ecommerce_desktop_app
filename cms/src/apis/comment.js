import axios from "axios"

export const find = async (id) => {
    const response = await axios.get(`http://localhost:5000/commentes/${id}`);
    return response;
}