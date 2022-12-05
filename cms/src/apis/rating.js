import axios from "axios";

export const find = async () => {
    const response = await axios.get("http://localhost:33714/rating/");
    return response;
}