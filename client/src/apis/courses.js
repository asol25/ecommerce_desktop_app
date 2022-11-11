import axios from "axios"

export const find = async () => {
    const response = await axios.get('http://localhost:5000/courses/');
    return response;
}