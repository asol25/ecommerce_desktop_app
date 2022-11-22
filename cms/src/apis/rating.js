import axios from "axios";

export const find = async () => {
    const response = await axios.get("https://cryptic-mesa-81897.herokuapp.com/rating/");
    return response;
}