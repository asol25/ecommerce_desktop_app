import axios from "axios"

export const find = async () => {
    const response = await axios.get(`https://cryptic-mesa-81897.herokuapp.com/analytic`);
    return response;
}

export const getAnalyticFlowNowMonth = async (month) => {
    const response = await axios.get(`https://cryptic-mesa-81897.herokuapp.com/orders/${month}`);
    return response;
}
